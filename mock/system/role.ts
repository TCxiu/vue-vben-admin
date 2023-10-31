import { resultPageSuccess, resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const roleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      name: '测试角色名',
      label: '测试标签名',
      siteName: '测试所属机构',
      createTime: '@datetime',
    });
  }
  return result;
})();

const roleInfo = {};

export default [
  {
    url: '/basic-api/system/role',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, roleList);
    },
  },
  {
    url: '/basic-api/system/role',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/role/:id',
    method: 'get',
    response: () => {
      return resultSuccess(roleInfo);
    },
  },
  {
    url: '/basic-api/system/role/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/role/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/role/select/option',
    method: 'get',
    response: () => {
      return resultSuccess([]);
    },
  },
] as MockMethod[];
