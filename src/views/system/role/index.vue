<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="handleTableLoad">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '修改',
                onClick: handleEdit.bind(null, record),
                ifShow: record.isGlobal != 1 && userStore.getUserInfo?.roleId != record.id,
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                ifShow: record.isGlobal != 1 && userStore.getUserInfo?.roleId != record.id,
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { searchFormSchema, columns } from './role.data';
  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';
  import { getRoleList, getRoleInfo, delRole } from '/@/api/system/role';
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
    title: '角色列表',
    api: getRoleList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      baseColProps: { xs: 24, sm: 12, xxl: 6 },
    },
    isTreeTable: false,
    pagination: true,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  //表格数据获取完毕后
  const handleTableLoad = () => {
    console.log('表格加载完毕');
  };

  //新增
  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getRoleInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delRole(id);
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    createMessage.success(t('common.operateSuccess'));
    reload();
  }
</script>
