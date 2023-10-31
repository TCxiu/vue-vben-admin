import { FormSchema } from '/@/components/Form';

export const formSchema: FormSchema[] = [
  {
    field: 'modelName',
    label: '实体类名称',
    component: 'Input',
    defaultValue: 'Test',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'modelDesc',
    label: '类作用描述',
    component: 'Input',
    defaultValue: '测试表',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'wrapper',
    label: 'wrapper包前缀',
    component: 'Input',
    defaultValue: 'com.x.admin.wrapper.test',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'module',
    label: 'module包前缀',
    component: 'Input',
    defaultValue: 'com.x.admin.module.test',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'url',
    label: 'url前缀',
    component: 'Input',
    defaultValue: 'test',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field[0].name',
    component: 'Input',
    label: '字段名',
    defaultValue: 'id',
  },
  {
    field: 'field[0].doc',
    component: 'Input',
    label: '字段注释',
    defaultValue: '主键',
    colProps: {
      span: 4,
    },
  },
  {
    field: 'field[0].type',
    component: 'Select',
    label: 'java类型',
    defaultValue: 'String',
    componentProps: {
      options: [
        { label: '字符串', value: 'String' },
        { label: 'Integer', value: 'Integer' },
        { label: 'Long', value: 'Long' },
        { label: '时间', value: 'Date' },
        { label: '高精度', value: 'BigDecimal' },
      ],
    },
  },
  {
    field: 'field[0].sql',
    component: 'Select',
    label: 'sql类型',
    defaultValue: 'varchar(255)',
    componentProps: {
      options: [
        { label: 'varchar', value: 'varchar(255)' },
        { label: 'text', value: 'text' },
        { label: 'int', value: 'int' },
        { label: 'bigint', value: 'bigint' },
        { label: 'datetime', value: 'datetime' },
        { label: 'decimal', value: 'decimal(65,5)' },
      ],
    },
  },
  {
    field: 'field[0].vo',
    label: '列表',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  {
    field: 'field[0].query',
    label: '查询',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  {
    field: 'field[0].edit',
    label: '修改',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  {
    field: '0',
    component: 'Input',
    label: ' ',
    colProps: {
      span: 1,
    },
    slot: 'add',
  },
];
