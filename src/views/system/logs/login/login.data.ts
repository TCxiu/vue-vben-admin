import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '登录人员',
    component: 'Input',
    colProps: { lg: 8, md: 12 },
  },
  {
    field: 'success',
    label: '执行结果',
    component: 'Select',
    componentProps: {
      options: [
        { label: '成功', value: '1' },
        { label: '失败', value: '0' },
      ],
    },
    colProps: { lg: 8, md: 12 },
  },
  {
    field: 'os',
    label: '登录终端',
    component: 'Select',
    componentProps: {
      options: [{ label: '电脑管理系统', value: '电脑管理系统' }],
    },
    colProps: { lg: 8, md: 12 },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '登录日志主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '登录人员',
    dataIndex: 'userName',
    width: 120,
  },
  {
    title: '登录终端',
    dataIndex: 'os',
    width: 120,
  },
  {
    title: '登录IP',
    dataIndex: 'ip',
    width: 120,
  },
  {
    title: '登录地点',
    width: 240,
    customRender: ({ record }) => {
      return record.country + record.province + record.city;
    },
  },
  {
    title: '运营商',
    dataIndex: 'isp',
    width: 100,
  },
  {
    title: '执行结果',
    width: 100,
    customRender: ({ record }) => {
      const status = record.success;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '成功' : '失败';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '错误信息',
    dataIndex: 'errorMsg',
    width: 100,
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
    width: 100,
  },
  {
    title: '浏览器类型',
    dataIndex: 'browserType',
    width: 120,
  },
  {
    title: '登录平台',
    dataIndex: 'platform',
    width: 100,
  },
  {
    title: '登录设备类型',
    dataIndex: 'deviceType',
    width: 120,
  },
  {
    title: '执行时长(毫秒)',
    dataIndex: 'executeMillisecond',
    width: 120,
  },
  {
    title: '请求地址',
    dataIndex: 'url',
  },
  {
    title: '请求参数',
    dataIndex: 'params',
  },
  {
    title: '访问凭证',
    dataIndex: 'token',
  },
  {
    title: '开始时间',
    dataIndex: 'beginTime',
    width: 200,
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    width: 200,
  },
];
