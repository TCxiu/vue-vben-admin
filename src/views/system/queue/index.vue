<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增系统队列 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '修改',
                onClick: handleEdit.bind(null, record),
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
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <QueueDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { searchFormSchema, columns } from './queue.data';
  import { useDrawer } from '/@/components/Drawer';
  import QueueDrawer from './QueueDrawer.vue';
  import { getQueueList, getQueueInfo, delQueue } from '/@/api/system/queue';

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload }] = useTable({
    title: '系统队列列表',
    api: getQueueList,
    columns,
    formConfig: {
      labelWidth: 140,
      schemas: searchFormSchema,
      baseColProps: { span: 6 },
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

  //新增
  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getQueueInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delQueue(id);
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    reload();
  }
</script>
