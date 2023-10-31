<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="handleTableLoad">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="dataScopeType == 1">
          {{ t('system.site.action.add') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:plus-circle-outlined',
                tooltip: t('system.site.action.add'),
                ifShow: () => record.siteType != 3,
                onClick: handleCreate.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: t('system.site.action.edit'),
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: t('system.site.action.del'),
                ifShow: record.id !== '0' && record.id != siteId,
                popConfirm: {
                  title: t('system.site.action.del'),
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <template v-else-if="column.key === 'siteLogo'">
          <TableImg :size="24" :simpleShow="true" :imgList="[text]" />
        </template>
      </template>
    </BasicTable>
    <SiteDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue';
  import { BasicTable, useTable, TableAction, TableImg } from '/@/components/Table';
  import { searchFormSchema, columns } from './site.data';
  import { useDrawer } from '/@/components/Drawer';
  import SiteDrawer from './SiteDrawer.vue';
  import { getSiteList, delSite } from '/@/api/system/site';
  import { listToTree } from '/@/utils/helper/treeHelper';
  import { join } from 'lodash-es';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { createMessage } = useMessage();
  //国际化
  const { t } = useI18n();

  const userStore = useUserStore();

  const siteId = ref<any>('');
  const dataScopeType = ref<any>('');
  siteId.value = userStore.getUserInfo?.siteId;
  dataScopeType.value = userStore.getUserInfo?.dataScopeType; // 1超管

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload, expandAll }] = useTable({
    title: t('system.site.table.title'),
    api: getSiteList,
    beforeFetch: (data) => {
      if (data?.regionCode) {
        data.regionCode = join(data.regionCode, ',');
      }
      return data;
    },
    afterFetch: (data) => {
      return listToTree(data, { label: 'name' });
    },
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      baseColProps: { xs: 24, sm: 12, xxl: 8 },
    },
    isTreeTable: true,
    pagination: false,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 120,
      title: t('system.site.action.title'),
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  //表格数据获取完毕后
  const handleTableLoad = () => {
    nextTick(() => {
      expandAll();
    });
  };

  //新增
  function handleCreate(record: Recordable) {
    // openDrawer(true, {
    //   parentId: record?.id,
    //   isUpdate: false,
    // });
    if (record === undefined) {
      openDrawer(true, {
        hasParent: false,
        isUpdate: false,
      });
    } else {
      openDrawer(true, {
        record,
        hasParent: true,
        isUpdate: false,
      });
    }
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delSite(id);
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    createMessage.success(t('common.operateSuccess'));
    reload();
  }
</script>
