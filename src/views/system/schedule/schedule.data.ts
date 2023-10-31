import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '定时任务主键',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'title',
    label: '定时任务名称',
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '定时任务主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '定时任务名称(中文)',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '定时任务名称',
    dataIndex: 'scheduleName',
    width: 200,
  },
  {
    title: 'Cron表达式',
    dataIndex: 'cronExpression',
    width: 200,
  },
  {
    title: '执行任务对象类路径',
    dataIndex: 'executeBean',
    width: 400,
  },
  {
    title: '是否启用',
    dataIndex: 'enable',
    customRender: ({ record }) => {
      const status = record.enable;
      const color = status == 1 ? 'green' : 'yellow';
      const text = status == 1 ? '启用' : '停止';
      return h(Tag, { color: color }, () => text);
    },
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '定时任务主键',
    component: 'Input',
    show: false,
  },

  {
    field: 'title',
    label: '任务名称(中文)',
    component: 'Input',
    required: true,
  },
  {
    field: 'scheduleName',
    label: '任务名称(英文)',
    component: 'Input',
    required: true,
  },
  {
    field: 'cronExpression',
    label: 'Cron表达式',
    component: 'Input',
    required: true,
  },
  {
    field: 'executeBean',
    label: '执行任务对象类路径',
    component: 'Input',
    required: true,
  },
  {
    field: 'enable',
    label: '是否启用',
    component: 'RadioGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
      numberToString: true,
    },
    required: true,
  },
];
