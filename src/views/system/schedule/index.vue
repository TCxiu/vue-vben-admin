<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增定时任务 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:fall-outlined',
                tooltip: '立即执行一次',
                onClick: executeOnce.bind(null, record),
                ifShow: record.enable == 1,
              },
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
    <ScheduleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { searchFormSchema, columns } from './schedule.data';
  import { useDrawer } from '/@/components/Drawer';
  import ScheduleDrawer from './ScheduleDrawer.vue';
  import {
    getScheduleList,
    getScheduleInfo,
    delSchedule,
    executeOnceSchedule,
  } from '/@/api/system/schedule';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload }] = useTable({
    title: '定时任务列表',
    api: getScheduleList,
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
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  //立即执行一次
  const executeOnce = async (record: Recordable) => {
    const { id } = record;
    await executeOnceSchedule(id);
    createMessage.success('执行成功!');
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
    const info = await getScheduleInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delSchedule(id);
    createMessage.success('删除成功!');
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    reload();
  }
</script>
