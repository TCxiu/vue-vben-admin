import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'operatorTitle',
    label: '标题',
    component: 'Input',
    colProps: { lg: 8, md: 8 },
  },
  {
    field: 'operator',
    label: '操作人',
    component: 'Input',
    colProps: { lg: 8, md: 8 },
  },
  {
    field: 'operateType',
    label: '操作类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '新增', value: '新增' },
        { label: '修改', value: '修改' },
        { label: '删除', value: '删除' },
        { label: '主板请求', value: '主板请求' },
        { label: '主板响应', value: '主板响应' },
        { label: '服务器请求', value: '服务器请求' },
        { label: '服务器响应', value: '服务器响应' },
        { label: '其他', value: '其他' },
      ],
    },
    colProps: { lg: 8, md: 8 },
  },
  {
    field: 'beginTime',
    label: '开始时间',
    component: 'DatePicker',
    colProps: { lg: 8, md: 8 },
  },
  {
    field: 'endTime',
    label: '结束时间',
    component: 'DatePicker',
    colProps: { lg: 8, md: 8 },
  },
];

export const columns: BasicColumn[] = [
  // {
  //   title: '功能模块',
  //   dataIndex: 'module',
  //   width: 120,
  // },
  {
    title: '功能标题',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '操作类型',
    dataIndex: 'operateType',
    width: 100,
  },
  {
    title: '模块',
    dataIndex: 'module',
    width: 100,
    customRender: ({ record }) => {
      const flag = record.module;
      const color =
        flag === 'System'
          ? 'green'
          : flag === 'WxMp'
          ? 'red'
          : flag === 'DEVICE'
          ? 'blue'
          : flag === 'Gate'
          ? 'yellow'
          : flag === 'Third'
          ? 'skyBlue'
          : flag === 'ICCard'
          ? 'orange'
          : 'gray';
      const text =
        flag === 'System'
          ? '系统管理'
          : flag === 'WxMp'
          ? '微信公众号'
          : flag === 'DEVICE'
          ? '设备'
          : flag === 'Gate'
          ? '闸机监控'
          : flag === 'Third'
          ? '第三方'
          : flag === 'ICCard'
          ? 'IC卡'
          : '其他';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否人为',
    dataIndex: 'artificial',
    width: 100,
    customRender: ({ record }) => {
      const status = record.artificial;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '执行状态',
    dataIndex: 'success',
    width: 100,
    customRender: ({ record }) => {
      const status = record.success;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '成功' : '失败';
      return h(Tag, { color: color }, () => text);
    },
  },
  // {
  //   title: '执行时长',
  //   dataIndex: 'executeMillisecond',
  //   width: 100,
  // },
  {
    title: '操作人',
    dataIndex: 'operator',
    width: 120,
  },
  {
    title: '操作人所属机构',
    dataIndex: 'site',
    width: 240,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 300,
  },
  // {
  //   title: '操作地点',
  //   dataIndex: 'address',
  //   width: 240,
  // },
  {
    title: '浏览器',
    dataIndex: 'browser',
    width: 140,
  },
  {
    title: '设备类型',
    dataIndex: 'deviceType',
    width: 140,
  },
  {
    title: '错误信息',
    dataIndex: 'errorMsg',
    width: 200,
  },
  {
    title: '开始时间',
    dataIndex: 'beginTime',
    width: 160,
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    width: 160,
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '操作日志主键',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'type',
    label: '操作日志类型',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '目录', value: '0' },
        { label: '菜单', value: '1' },
        { label: '按钮', value: '2' },
      ],
    },
  },
  {
    field: 'title',
    label: '操作日志名称',
    component: 'Input',
    required: true,
  },
];
