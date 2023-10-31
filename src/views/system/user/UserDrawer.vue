<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    destroyOnClose
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" name="form">
      <template #siteSlot="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          ref="siteTreeRef"
          @check="checkSite"
          :treeData="siteTreeData"
          :fieldNames="{ title: 'label', key: 'id' }"
          checkable
          defaultExpandAll
          show-strictly
          toolbar
          title="    功能"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicTree, TreeItem, TreeActionType } from '/@/components/Tree';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { formSchema } from './user.data';
  import { createUser, editUser } from '/@/api/system/user';
  import { selectSite } from '/@/api/system/site';
  import { listToTree } from '/@/utils/helper/treeHelper';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);

  const siteTreeRef = ref<Nullable<TreeActionType>>(null);
  const siteTreeData = ref<TreeItem[]>([]);

  const getSiteTree = () => {
    const tree = unref(siteTreeRef);
    if (!tree) {
      throw new Error('tree is null!');
    }
    return tree;
  };

  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { lg: 12, md: 24 },
  });

  const checkSite = (checkedKeys, e) => {
    const strictly = getSiteTree().getStrictly();
    if (strictly) {
      setFieldsValue({
        allSiteIds: [...checkedKeys, ...e.halfCheckedKeys],
      });
    } else {
      setFieldsValue({
        allSiteIds: checkedKeys,
      });
    }
  };

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });

    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(siteTreeData).length === 0) {
      siteTreeData.value = listToTree(await selectSite()) as any as TreeItem[];
    }

    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.info,
      });
      updateSchema([{ field: 'account', componentProps: { disabled: true } }]);
      if (userStore.getUserInfo?.userId === data.info.id) {
        updateSchema([
          { field: 'enabled', componentProps: { disabled: true } },
          { field: 'roleId', componentProps: { disabled: true } },
          { field: 'siteId', componentProps: { disabled: true } },
          { field: 'enabled', componentProps: { disabled: true } },
        ]);
      }
    } else {
      if (data.siteId) {
        setFieldsValue({
          siteId: data.siteId,
        });
      }
    }
  });
  const getTitle = computed(() => (!unref(isUpdate) ? '新增管理账号' : '编辑管理账号'));
  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      if (values.dataScopeType == 5) {
        const strictly = getSiteTree().getStrictly();
        setFieldsValue({
          strictly,
        });
      }
      // TODO custom api
      if (!unref(isUpdate)) {
        await createUser(values);
      } else {
        await editUser(values.id, values);
      }

      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
