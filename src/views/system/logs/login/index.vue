<template>
  <div>
    <BasicTable @register="registerTable">
      <!-- <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
      </template> -->
    </BasicTable>
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable } from '/@/components/Table';
  import { searchFormSchema, columns } from './login.data';
  import { getLoginList } from '/@/api/system/logs/login';

  // 表格
  const [registerTable] = useTable({
    title: '登录日志列表',
    api: getLoginList,
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
    // actionColumn: {
    //   width: 80,
    //   title: '操作',
    //   dataIndex: 'action',
    //   fixed: 'right',
    // },
  });

  //删除操作
  // const handleDelete = async (record: Recordable) => {
  //   const { id } = record;
  //   await delLogin(id);
  //   reload();
  // };
</script>
