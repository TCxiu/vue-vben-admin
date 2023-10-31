import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import Icon from '@/components/Icon/Icon.vue';
import { Tag } from 'ant-design-vue';
import { optionDict } from '/@/api/system/dict';
import { selectMenu } from '/@/api/system/menu';
import { uploadImage } from '/@/api/common/upload';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'terminal',
    label: '所属终端',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'terminal',
      },
      numberToString: true,
    },
    colProps: { span: 6 },
  },
  {
    field: 'menuType',
    label: '菜单类型',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'menuType',
      },
      numberToString: true,
    },
    colProps: { span: 6 },
  },
  {
    field: 'title',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'hideMenu',
    label: '隐藏菜单',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'hide',
      },
      numberToString: true,
    },
    colProps: { span: 6 },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'title',
    width: 200,
    align: 'left',
  },
  // {
  //   title: '数据权限',
  //   dataIndex: '',
  //   width: 200,
  // },
  {
    title: '所属终端',
    dataIndex: 'terminalName',
    width: 200,
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType',
    width: 200,
  },
  {
    title: '是否隐藏',
    dataIndex: 'hideMenu',
    width: 120,
    customRender: ({ record }) => {
      const status = record.hideMenu;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? '显示' : '隐藏';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '路由路径',
    dataIndex: 'path',
    width: 200,
    align: 'left',
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    width: 240,
    align: 'left',
  },
  {
    title: '排序值',
    dataIndex: 'orderNo',
    width: 80,
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 80,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: '快捷入口图标',
    dataIndex: 'linkIcon',
    width: 120,
  },
  {
    title: 'PNG图标',
    dataIndex: 'wapIcon',
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
    label: '菜单主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'terminal',
    label: '所属终端',
    component: 'ApiRadioGroup',
    defaultValue: '1',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'terminal',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
  },
  {
    field: 'menuType',
    label: '菜单类型',
    component: 'ApiRadioGroup',
    defaultValue: '1',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'menuType',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
  },
  {
    field: 'parentId',
    label: '父级菜单',
    component: 'ApiTreeSelect',
    componentProps: {
      api: selectMenu,
      valueField: 'id',
      placeholder: '请选择父级菜单',
    },
  },
  {
    field: 'title',
    label: '菜单名称',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入菜单名称',
    },
    required: true,
  },
  {
    field: 'icon',
    label: '菜单图标',
    component: 'IconPicker',
    componentProps: {
      placeholder: '请选择菜单图标',
    },
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 1;
    },
  },
  {
    field: 'path',
    label: '路由路径',
    component: 'Input',
    componentProps: {
      maxlength: 128,
      placeholder: '请输入路由路径',
    },
    required: true,
    ifShow: ({ values }) => {
      return values.menuType !== '2';
    },
  },
  {
    field: 'redirect',
    label: '重定向地址',
    component: 'Input',
    componentProps: {
      maxlength: 128,
      placeholder: '请输入重定向地址',
    },
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 1;
    },
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
    componentProps: {
      maxlength: 128,
      placeholder: '请输入组件路径',
    },
    required: true,
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 1;
    },
  },
  {
    field: 'dataScope',
    label: '权限标识',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入权限标识',
    },
    required: true,
    ifShow: ({ values }) => {
      return values.menuType === '2';
    },
  },
  {
    field: 'orderNo',
    label: '排序值',
    component: 'InputNumber',
    defaultValue: '1',
    componentProps: {
      min: 0,
      max: 9999999,
      step: 1,
      placeholder: '请输入排序值',
    },
    required: true,
  },
  {
    field: 'wapIcons',
    label: 'PNG图标',
    component: 'Upload',
    componentProps: {
      emptyHidePreview: true,
      maxNumber: 1,
      maxSize: 5,
      accept: ['image/*'],
      api: uploadImage,
      uploadParams: {
        module: 'menu/icon/wap',
      },
    },
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 2;
    },
  },
  {
    field: 'linkIcons',
    label: '快捷入口图标',
    component: 'Upload',
    componentProps: {
      emptyHidePreview: true,
      maxNumber: 1,
      maxSize: 5,
      accept: ['image/*'],
      api: uploadImage,
      uploadParams: {
        module: 'menu/icon/wap',
      },
    },
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 1;
    },
  },
  {
    field: 'hideMenu',
    label: '是否隐藏',
    component: 'ApiRadioGroup',
    defaultValue: '0',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'hide',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
    ifShow: ({ values }) => {
      return values.menuType !== '2';
    },
  },
  {
    field: 'isLink',
    label: '是否快捷菜单',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
    required: true,
    ifShow: ({ values }) => {
      return values.menuType !== '2' && values.terminal == 1;
    },
  },
];
