import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const list = (() => {
  const result: any[] = [
    {
      id: '10',
      parentId: '',
      label: '状态',
      value: 'status',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '11',
      parentId: '10',
      label: '正常',
      value: '1',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '12',
      parentId: '10',
      label: '禁用',
      value: '0',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },

    {
      id: '20',
      parentId: '',
      label: '是否完善',
      value: 'complete',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '21',
      parentId: '20',
      label: '完善',
      value: '1',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '22',
      parentId: '20',
      label: '待完善',
      value: '0',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },

    {
      id: '30',
      parentId: '',
      label: '菜单类型',
      value: 'menuType',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '31',
      parentId: '30',
      label: '目录',
      value: '1',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '32',
      parentId: '30',
      label: '菜单',
      value: '2',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '33',
      parentId: '30',
      label: '按钮',
      value: '3',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },

    {
      id: '40',
      parentId: '',
      label: '所属终端',
      value: 'terminal',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },

    {
      id: '41',
      parentId: '40',
      label: '电脑后台管理',
      value: '1',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '42',
      parentId: '40',
      label: '公众号管理',
      value: '2',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
    {
      id: '50',
      parentId: '',
      label: '授权类型',
      value: 'grantType',
      orderNo: 1,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },

    {
      id: '51',
      parentId: '50',
      label: '授权码模式',
      value: 'authorization_code',
      orderNo: 0,
      enabled: '@integer(0,1)',
      level: '@integer(1,10)',
      isSystem: '@integer(0,1)',
      createTime: '@datetime',
    },
  ];

  return result;
})();

const statusOption = [
  {
    id: '11',
    parentId: '10',
    label: '正常',
    value: '1',
    orderNo: 0,
  },
  {
    id: '12',
    parentId: '10',
    label: '禁用',
    value: '0',
    orderNo: 1,
  },
];

const completeOption = [
  {
    id: '21',
    parentId: '20',
    label: '完善',
    value: '1',
    orderNo: 1,
  },
  {
    id: '20',
    parentId: '20',
    label: '待完善',
    value: '0',
    orderNo: 1,
  },
];

const menuTypeOption = [
  {
    id: '31',
    parentId: '30',
    label: '目录',
    value: '1',
    orderNo: 1,
  },
  {
    id: '32',
    parentId: '30',
    label: '菜单',
    value: '2',
    orderNo: 1,
  },
  {
    id: '33',
    parentId: '30',
    label: '按钮',
    value: '3',
    orderNo: 1,
  },
];

const terminalOption = [
  {
    id: '41',
    parentId: '40',
    label: '电脑后台管理',
    value: '1',
    orderNo: 1,
  },
  {
    id: '42',
    parentId: '40',
    label: '公众号管理',
    value: '2',
    orderNo: 1,
  },
];

const grantTypeOption = [
  {
    id: '51',
    parentId: '50',
    label: '授权码模式',
    value: 'authorization_code',
    orderNo: 1,
  },
];

const allOption = [
  {
    id: '10',
    parentId: '',
    label: '状态',
    value: 'status',
    orderNo: 0,
  },
  {
    id: '11',
    parentId: '10',
    label: '正常',
    value: '1',
    orderNo: 0,
  },
  {
    id: '12',
    parentId: '10',
    label: '禁用',
    value: '0',
    orderNo: 1,
  },

  {
    id: '20',
    parentId: '',
    label: '是否完善',
    value: 'complete',
    orderNo: 0,
  },
  {
    id: '21',
    parentId: '20',
    label: '完善',
    value: '1',
    orderNo: 1,
  },
  {
    id: '22',
    parentId: '20',
    label: '待完善',
    value: '0',
    orderNo: 1,
  },
  {
    id: '30',
    parentId: '',
    label: '菜单类型',
    value: 'menuType',
    orderNo: 1,
  },
  {
    id: '31',
    parentId: '30',
    label: '目录',
    value: '1',
    orderNo: 1,
  },
  {
    id: '32',
    parentId: '30',
    label: '菜单',
    value: '2',
    orderNo: 1,
  },
  {
    id: '33',
    parentId: '30',
    label: '按钮',
    value: '3',
    orderNo: 1,
  },

  {
    id: '40',
    parentId: '',
    label: '所属终端',
    value: 'terminal',
    orderNo: 1,
  },
  {
    id: '41',
    parentId: '40',
    label: '电脑后台管理',
    value: '1',
    orderNo: 0,
  },
  {
    id: '42',
    parentId: '40',
    label: '公众号管理',
    value: '2',
    orderNo: 0,
  },
  {
    id: '50',
    parentId: '',
    label: '授权类型',
    value: 'grantType',
    orderNo: 1,
  },
  {
    id: '51',
    parentId: '50',
    label: '授权码模式',
    value: 'authorization_code',
    orderNo: 0,
  },
];

const dictInfo = {};

export default [
  {
    url: '/basic-api/system/dict',
    method: 'get',
    response: () => {
      return resultSuccess(list);
    },
  },
  {
    url: '/basic-api/system/dict',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/dict/:id',
    method: 'get',
    response: () => {
      return resultSuccess(dictInfo);
    },
  },
  {
    url: '/basic-api/system/dict/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/dict/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/dict/select/option',
    method: 'get',
    response: ({ query }) => {
      const { dictType } = query;

      let result: any[] = [];
      if (dictType) {
        switch (dictType) {
          case 'status':
            result = statusOption;
            break;
          case 'menuType':
            result = menuTypeOption;
            break;
          case 'complete':
            result = completeOption;
            break;
          case 'terminal':
            result = terminalOption;
            break;
          case 'grantType':
            result = grantTypeOption;
            break;
          case 'all':
            result = allOption;
            break;
          default:
            break;
        }
      }
      return resultSuccess(result);
    },
  },
] as MockMethod[];
