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
      <template #address="{ model, field }">
        <a-input
          v-model:value="model[field]"
          placeholder="点击右侧按钮选择详细地址"
          :disabled="model['isPosition'] === 1"
          maxLength="64"
        >
          <template #addonAfter>
            <div
              @click="
                handleShowMap(model['regionCode'], model['lat'], model['lng'], model['address'])
              "
            >
              <Icon icon="ant-design:environment-filled" />
            </div>
          </template>
        </a-input>
      </template>
    </BasicForm>
    <MapModal @register="registerModal" @success="handleSuccess" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import Icon from '@/components/Icon/Icon.vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useModal } from '/@/components/Modal';
  import MapModal from './MapModal.vue';
  import { formSchema } from './site.data';
  import { createSite, getSiteInfo, editSite } from '/@/api/system/site';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { optionDict } from '/@/api/system/dict';

  const { createMessage } = useMessage();
  //国际化
  const { t } = useI18n();

  // 注册 Modal
  const [registerModal, { openModal }] = useModal();

  const emit = defineEmits(['success', 'register']);

  const siteTypeSelect = ref<any>([]);

  const userStore = useUserStore();
  const siteId = ref<any>('');
  siteId.value = userStore.getUserInfo?.siteId;

  const isUpdate = ref(true);
  const hasParent = ref(false);

  const [registerForm, { resetFields, setFieldsValue, updateSchema, clearValidate, validate }] =
    useForm({
      labelWidth: 100,
      schemas: formSchema,
      showActionButtonGroup: false,
      baseColProps: { lg: 12, md: 24 },
    });
  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    hasParent.value = !!data?.hasParent;

    let type;

    if (unref(hasParent)) {
      const parentId = data.record.id;
      type = data.record.siteType;
      setFieldsValue({
        parentId,
      });
    } else {
      type = userStore.getUserInfo?.siteType;
    }

    if (unref(isUpdate)) {
      type = 4;
    }

    await commonSelectType(type);

    if (unref(isUpdate)) {
      const { id } = data?.record;
      const info = await getSiteInfo(id);
      setFieldsValue({
        ...info,
      });
      updateSchema({
        field: 'siteType',
        dynamicDisabled: true,
      });
      if (siteId.value == id) {
        updateSchema({
          field: 'parentId',
          show: false,
        });
      } else {
        updateSchema({
          field: 'parentId',
          show: true,
        });
      }
    }

    updateSchema({
      field: 'parentId',
      componentProps: {
        onSelect: (_value, node) => {
          setFieldsValue({
            siteType: null,
          });
          clearValidate('siteType');
          let type = node.siteType;
          commonSelectType(type);
          if (type == 3) {
            createMessage.warning('站点无法添加下级机构');
          }
        },
      },
    });
  });

  async function commonSelectType(type) {
    const selectList = await optionDict({
      dictType: 'siteType',
    });
    if (type == 0) {
      siteTypeSelect.value = selectList.filter((item) => item.value === '1');
    } else if (type == 1 || type == 2) {
      siteTypeSelect.value = selectList.filter((item) => item.value !== '1');
    } else if (type == 3) {
      siteTypeSelect.value = [];
    } else {
      siteTypeSelect.value = selectList;
    }
    updateSchema([
      {
        field: 'siteType',
        dynamicDisabled: false,
        componentProps: { options: siteTypeSelect.value },
      },
    ]);
  }

  const getTitle = computed(() =>
    !unref(isUpdate) ? t('system.site.action.add') : t('system.site.action.edit'),
  );

  function handleShowMap(regionCode, latitude, longitude, address) {
    if (!regionCode) {
      createMessage.warning('请选择所在区域');
      return;
    }
    openModal(true, {
      regionCode,
      latitude,
      longitude,
      address,
    });
  }

  function handleSuccess(locationInfo) {
    setFieldsValue({
      lat: locationInfo.latitude,
      lng: locationInfo.longitude,
      address: locationInfo.address,
    });
  }

  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      if (values.parentId == null) values.parentId = '';
      // TODO custom api
      if (!unref(isUpdate)) {
        await createSite(values);
      } else {
        await editSite(values.id, values);
      }

      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
