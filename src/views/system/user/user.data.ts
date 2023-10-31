import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { selectSite } from '/@/api/system/site';
import { selectRole } from '/@/api/system/role';
import { optionDict } from '/@/api/system/dict';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'siteId',
    label: '机构主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'account',
    label: '登录名',
    component: 'Input',
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
  },
  {
    field: 'phone',
    label: '手机号',
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
];

export const columns: BasicColumn[] = [
  {
    title: '管理账号主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '登录名',
    dataIndex: 'account',
    width: 160,
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    width: 160,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 160,
  },
  {
    title: '所属机构',
    dataIndex: 'siteName',
    width: 200,
  },
  {
    title: '所属角色',
    dataIndex: 'roleLabel',
    width: 200,
  },
  // {
  //   title: '数据权限类型',
  //   dataIndex: 'dataScopeType',
  //   width: 160,
  //   customRender: ({ record }) => {
  //     const flag = record.dataScopeType;
  //     const color =
  //       flag === 1
  //         ? 'green'
  //         : flag === 2
  //         ? 'red'
  //         : flag === 3
  //         ? 'blue'
  //         : flag === 4
  //         ? 'yellow'
  //         : 'orange';
  //     const text =
  //       flag === 1
  //         ? '全部'
  //         : flag === 2
  //         ? '本机构及子机构'
  //         : flag === 3
  //         ? '本机构'
  //         : flag === 4
  //         ? '仅自己'
  //         : '自定义';
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  {
    title: '状态',
    dataIndex: 'enabled',
    width: 140,
    customRender: ({ record }) => {
      const status = record.enabled;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '正常' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '管理账号主键',
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
    },
    required: true,
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'account',
    label: '登录账号',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入登录账号',
    },
    rules: [
      {
        required: true,
      },
      {
        validator: async (_rule, value) => {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            return Promise.reject('登录账号不能使用中文');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入昵称',
    },
    required: true,
  },
  {
    field: 'password',
    label: '登录密码',
    component: 'InputPassword',
    componentProps: {
      autocomplete: 'off',
      maxlength: 32,
      placeholder: '请输入密码 ',
    },
    required: true,
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    componentProps: {
      maxlength: 11,
      placeholder: '请输入手机号',
    },
    rules: [
      {
        required: true,
      },
      {
        pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        message: '请输入正确手机号',
        trigger: 'change',
      },
    ],
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    componentProps: {
      maxlength: 128,
      placeholder: '请输入邮箱',
    },
    show: false,
  },
  {
    field: 'roleId',
    label: '角色',
    component: 'ApiSelect',
    componentProps: {
      api: selectRole,
      numberToString: true,
      placeholder: '请选择角色',
    },
    required: true,
  },
  {
    field: 'dataScopeType',
    label: '数据权限类型',
    component: 'ApiSelect',
    defaultValue: '2',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'dataScopeType',
      },
      placeholder: '请选择数据权限类型',
      numberToString: true,
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
  },
  {
    label: '关联机构',
    field: 'checkedSiteIds',
    slot: 'siteSlot',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => {
      return values.dataScopeType === '5';
    },
  },
  {
    label: '关联机构',
    field: 'allSiteIds',
    component: 'Select',
    show: false,
  },
  {
    label: '是否级联',
    field: 'strictly',
    component: 'Input',
    defaultValue: '1',
    show: false,
  },
];
