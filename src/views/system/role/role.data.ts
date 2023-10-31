import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { selectSite } from '/@/api/system/site';
import { optionDict } from '/@/api/system/dict';
import { useUserStore } from '/@/store/modules/user';

const userStore = useUserStore();

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
  },
  {
    field: 'label',
    label: '标签名',
    component: 'Input',
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'enabled',
      },
      numberToString: true,
    },
  },
  {
    field: 'isGlobal',
    label: '是否全局',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'isGlobal',
      },
      numberToString: true,
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '角色名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '标签名',
    dataIndex: 'label',
    width: 200,
  },
  {
    title: '是否启用',
    dataIndex: 'enabled',
    width: 160,
    customRender: ({ record }) => {
      const status = record.enabled;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '正常' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否全局',
    dataIndex: 'isGlobal',
    width: 160,
    customRender: ({ record }) => {
      const status = record.isGlobal;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '全局' : '自定义';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '所属机构',
    dataIndex: 'siteName',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '角色主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'siteId',
    label: '所属机构',
    component: 'ApiTreeSelect',
    componentProps: {
      api: selectSite,
      valueField: 'id',
      placeholder: '请选择所属机构',
      params: {
        dictType: 'all',
      },
    },
    required: true,
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'name',
    label: '角色名',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入角色名称',
    },
    rules: [
      {
        required: true,
      },
      {
        validator: async (_rule, value) => {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            return Promise.reject('角色名称不能使用中文');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'label',
    label: '角色标签',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入角色标签',
    },
    required: true,
  },
  {
    field: 'isRoot',
    label: '是否超管',
    component: 'ApiRadioGroup',
    defaultValue: '0',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'isRoot',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
    show: false,
  },
  {
    field: 'isGlobal',
    label: '是否全局',
    component: 'ApiRadioGroup',
    defaultValue: '0',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'isGlobal',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
    show: userStore.getUserInfo?.dataScopeType == 1,
  },
  {
    field: 'orderNo',
    label: '排序值',
    component: 'InputNumber',
    defaultValue: '1',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入角色标签排序值',
    },
    required: true,
    show: false,
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'ApiRadioGroup',
    defaultValue: '1',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'enabled',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
  },
  {
    label: '关联菜单',
    field: 'checkedMenuIds',
    slot: 'menu',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => {
      return values.isRoot !== '1';
    },
  },
  {
    label: '关联菜单',
    field: 'allMenuIds',
    component: 'Select',
    show: false,
  },
];
