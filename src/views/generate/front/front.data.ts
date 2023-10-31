import { FormSchema } from '/@/components/Form';

export const formSchema: FormSchema[] = [
  {
    field: 'path',
    label: '页面路径',
    component: 'Input',
    defaultValue: 'template/test',
  },
  {
    field: 'page',
    label: '页面名称',
    component: 'Input',
    defaultValue: 'test',
  },
  {
    field: 'pageDesc',
    label: '页面描述',
    component: 'Input',
    defaultValue: '测试页',
  },
  {
    field: 'api',
    label: '接口路径',
    component: 'Input',
    defaultValue: 'template/test',
  },
  {
    field: 'mock',
    label: '模拟路径',
    component: 'Input',
    defaultValue: 'template/test',
  },
  {
    field: 'hasLeft',
    label: '是否左树右表',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
];
