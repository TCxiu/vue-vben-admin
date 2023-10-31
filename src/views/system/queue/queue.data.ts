import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
  },
  {
    field: 'queueName',
    label: '队列名称(英文)',
    component: 'Input',
  },
  {
    field: 'exchangeName',
    label: '交换机名称(英文)',
    component: 'Input',
  },
  {
    field: 'routeKey',
    label: '路由键',
    component: 'Input',
  },
  {
    field: 'exclusive',
    label: '是否排它',
    component: 'Select',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
  },
  {
    field: 'durable',
    label: '是否持久化',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  {
    field: 'autoDelete',
    label: '自动删除',
    component: 'Select',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
  },
  {
    field: 'isCluster',
    label: '集群模式',
    component: 'Select',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
  },
  {
    field: 'exchangeDurable',
    label: '交换机持久化',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  {
    field: 'exchangeAutoDelete',
    label: '交换机自动删除',
    component: 'Select',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
  },

  {
    field: 'lazy',
    label: '惰性队列',
    component: 'Select',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
  },
  {
    field: 'exchangeType',
    label: '交换机类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '直连模式', value: '1' },
        { label: 'Topic模式', value: '2' },
        { label: '延迟队列', value: '3' },
      ],
    },
  },
  {
    field: 'stateFlag',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '正常', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '队列名称',
    dataIndex: 'queueName',
    width: 200,
    align: 'left',
  },
  {
    title: '交换机名称',
    dataIndex: 'exchangeName',
    width: 240,
    align: 'left',
  },
  {
    title: '路由键',
    dataIndex: 'routeKey',
  },
  {
    title: '是否排它',
    dataIndex: 'exclusive',
    customRender: ({ record }) => {
      const flag = record.exclusive;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '排它' : '共享';
      return h(Tag, { color: color }, () => text);
    },
    width: 140,
  },
  {
    title: '持久化',
    dataIndex: 'durable',
    customRender: ({ record }) => {
      const flag = record.durable;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '持久' : '临时';
      return h(Tag, { color: color }, () => text);
    },
    width: 140,
  },
  {
    title: '自动删除',
    dataIndex: 'autoDelete',
    customRender: ({ record }) => {
      const flag = record.autoDelete;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
    width: 100,
  },
  {
    title: '交换机类型',
    dataIndex: 'exchangeType',
    customRender: ({ record }) => {
      const flag = record.exchangeType;
      const sigle = ~~flag === 1;
      const topic = ~~flag === 2;
      const color = sigle ? 'green' : topic ? 'blue' : 'orange';
      const text = sigle ? '直连模式' : topic ? 'Topic模式' : '延迟队列';
      return h(Tag, { color: color }, () => text);
    },
    width: 140,
  },
  {
    title: '交换机持久化',
    dataIndex: 'exchangeDurable',
    customRender: ({ record }) => {
      const flag = record.exchangeDurable;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '持久' : '临时';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '交换机自动删除',
    dataIndex: 'exchangeAutoDelete',
    customRender: ({ record }) => {
      const flag = record.exchangeAutoDelete;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否集群',
    dataIndex: 'isCluster',
    customRender: ({ record }) => {
      const flag = record.isCluster;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '惰性队列',
    dataIndex: 'lazy',
    customRender: ({ record }) => {
      const flag = record.lazy;
      const enable = ~~flag === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '状态',
    dataIndex: 'stateFlag',
    customRender: ({ record }) => {
      const status = record.stateFlag;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '正常' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'queueName',
    label: '队列名称(英文)',
    component: 'Input',
    required: true,
  },
  {
    field: 'exchangeName',
    label: '交换机名称(英文)',
    component: 'Input',
    required: true,
  },
  {
    field: 'routeKey',
    label: '路由键',
    component: 'Input',
    required: true,
  },
  {
    field: 'exclusive',
    label: '是否排它',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'durable',
    label: '是否持久化',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'autoDelete',
    label: '自动删除',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'isCluster',
    label: '集群模式',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'exchangeDurable',
    label: '交换机持久化',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'exchangeAutoDelete',
    label: '交换机自动删除',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    colProps: { span: 8 },
    required: true,
  },

  {
    field: 'lazy',
    label: '惰性队列',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    required: true,
  },
  {
    field: 'exchangeType',
    label: '交换机类型',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '直连模式', value: '1' },
        { label: 'Topic模式', value: '2' },
        { label: '延迟队列', value: '3' },
      ],
    },
    required: true,
  },
  {
    field: 'stateFlag',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '正常', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
    required: true,
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
    defaultValue: '备注',
    required: true,
  },
];
