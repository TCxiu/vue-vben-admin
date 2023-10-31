<template>
  <div>
    <BasicTable @register="registerTable">
      <!-- <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:eye-outlined',
                tooltip: '预览详情',
                onClick: handlePreview.bind(record),
              },
            ]"
          />
        </template>
      </template> -->
    </BasicTable>
  </div>
</template>

<script lang="ts" setup>
  // import { onMounted, nextTick } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { searchFormSchema, columns } from './option.data';
  import { getOptionList } from '/@/api/system/logs/option';
  // import dayjs from 'dayjs';
  // import { parseTime } from '/@/utils/time';

  // onMounted(() => {
  //   nextTick(() => {
  //     getForm().setFieldsValue({
  //       beginTime: dayjs(`${parseTime(new Date(), '{y}-{m}-{d}')} 00:00:00`),
  //       endTime: dayjs(`${parseTime(new Date(), '{y}-{m}-{d}')} 23:59:59`),
  //     });
  //   });
  // });

  // 表格
  const [registerTable] = useTable({
    title: '操作日志列表',
    api: getOptionList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    isTreeTable: false,
    pagination: true,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
  });

  // //预览详情
  // const handlePreview = (record: Recordable) => {
  //   console.log('预览详情', record);
  // };
</script>
