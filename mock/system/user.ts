import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const userLoginInfo = {
  userId: '1',
  account: 'admin',
  nickName: '张三',
  avatar: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
  homePath: '/dashboard/analysis',
  // 机构id
  siteId: 1,
  // 机构类型
  siteType: 1,
  // 数据权限
  dataScopeType: 1,
  roles: [
    {
      label: '超级管理员',
      value: 'admin',
    },
  ],
};

const userList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      account: `test${index + 1}`,
      nickName: '测试昵称',
      phone: '13888888888',
      siteName: '测试机构',
      roleLabel: '测试角色',
      createTime: '@datetime',
    });
  }
  return result;
})();

const userInfo = {};

export default [
  // 登录接口
  {
    url: '/basic-api/system/user/info/login',
    method: 'get',
    response: () => {
      return resultSuccess(userLoginInfo);
    },
  },
  // 注销登录接口
  {
    url: '/basic-api/system/user/logout',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  // 权限接口
  {
    url: '/basic-api/system/user/perm',
    method: 'get',
    response: () => {
      return resultSuccess(['*:*:*']);
    },
  },
  {
    url: '/basic-api/system/user',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, userList);
    },
  },
  {
    url: '/basic-api/system/user',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/user/:id',
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/system/user/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/user/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
] as MockMethod[];
