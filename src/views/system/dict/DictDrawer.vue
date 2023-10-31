<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    destroyOnClose
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { formSchema } from './dict.data';
  import { createDict, editDict } from '/@/api/system/dict';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();
  const dataScopeType = ref<any>('');

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { lg: 12, md: 24 },
  });
  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    dataScopeType.value = userStore.getUserInfo?.dataScopeType;
    if (dataScopeType.value != 1) {
      updateSchema({
        field: 'isSystem',
        show: false,
        defaultValue: '0',
      });
    } else {
      updateSchema({
        field: 'isSystem',
        show: true,
        defaultValue: '1',
      });
    }

    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.info,
      });
    } else {
      setFieldsValue({
        parentId: data?.parentId,
      });
    }
    if (data?.isSystem) {
      setFieldsValue({
        isSystem: data?.isSystem + '',
      });
    }
  });
  const getTitle = computed(() => (!unref(isUpdate) ? '新增数据字典' : '编辑数据字典'));
  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      // TODO custom api
      if (!unref(isUpdate)) {
        await createDict(values);
      } else {
        await editDict(values.id, values);
      }

      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
