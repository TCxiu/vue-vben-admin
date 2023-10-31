<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增数据字典 </a-button>
        <a-button color="warning" @click="reFreshCache"> 刷新缓存 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:plus-circle-outlined',
                tooltip: '新增字典',
                onClick: handleCreate.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '修改字典',
                disabled: userStore.userInfo?.dataScopeType !== 1 && record.isSystem === 1,
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除字典',
                disabled: userStore.userInfo?.dataScopeType !== 1 && record.isSystem === 1,
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { searchFormSchema, columns } from './dict.data';
  import { useDrawer } from '/@/components/Drawer';
  import DictDrawer from './DictDrawer.vue';
  import { getDictList, getDictInfo, delDict, refreshDict } from '/@/api/system/dict';
  import { listToTree } from '/@/utils/helper/treeHelper';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { createMessage } = useMessage();
  //国际化
  const { t } = useI18n();

  const userStore = useUserStore();

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload }] = useTable({
    title: '数据字典列表',
    api: getDictList,
    afterFetch: (data) => {
      return listToTree(data);
    },
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      baseColProps: { xs: 24, sm: 12, xxl: 6 },
    },
    isTreeTable: false,
    pagination: false,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  const reFreshCache = async () => {
    await refreshDict();
    createMessage.success('刷新缓存成功!');
    reload();
  };

  //新增
  function handleCreate(record: Recordable) {
    openDrawer(true, {
      parentId: record?.id,
      isSystem: record?.isSystem,
      isUpdate: false,
    });
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getDictInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delDict(id);
    createMessage.success('删除成功!');
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    createMessage.success(t('common.operateSuccess'));
    reload();
  }
</script>
