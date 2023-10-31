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
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          ref="menuTreeRef"
          @check="checkMenu"
          :treeData="menuTreeData"
          :fieldNames="{ title: 'label', key: 'id' }"
          checkable
          :checkStrictly="false"
          title=""
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref, nextTick } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicTree, TreeItem, TreeActionType } from '/@/components/Tree';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { formSchema } from './role.data';
  import { createRole, editRole } from '/@/api/system/role';
  import { selectMenu } from '/@/api/system/menu';
  import { listToTree } from '/@/utils/helper/treeHelper';

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);

  const menuTreeRef = ref<Nullable<TreeActionType>>(null);
  const menuTreeData = ref<TreeItem[]>([]);

  const getMenuTree = () => {
    const tree = unref(menuTreeRef);
    if (!tree) {
      throw new Error('tree is null!');
    }
    return tree;
  };

  const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { lg: 12, md: 24 },
  });

  const checkMenu = (checkedKeys, e) => {
    const strictly = getMenuTree().getStrictly();
    if (strictly) {
      setFieldsValue({
        allMenuIds: [...checkedKeys, ...e.halfCheckedKeys],
      });
    } else {
      setFieldsValue({
        allMenuIds: checkedKeys,
      });
    }
  };

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });

    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(menuTreeData).length === 0) {
      menuTreeData.value = listToTree(await selectMenu({})) as any as TreeItem[];
    }

    nextTick(async () => {
      await getMenuTree()?.filterByLevel(3);
    });

    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.info,
      });
      updateSchema([{ field: 'name', componentProps: { disabled: true } }]);
    }
  });
  const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

  const handleSubmit = async () => {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      if (values.siteId == null) values.siteId = '';
      // TODO custom api
      if (!unref(isUpdate)) {
        await createRole(values);
      } else {
        await editRole(values.id, values);
      }

      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  };
</script>
