import { resultPageSuccess, resultSuccess } from '../../_util';
import { MockMethod } from 'vite-plugin-mock';

const loginList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      createTime: '@datetime',
    });
  }
  return result;
})();

const loginInfo = {};

export default [
  {
    url: '/basic-api/system/logs/login',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, loginList);
    },
  },
  {
    url: '/basic-api/system/logs/login',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/logs/login/:id',
    method: 'get',
    response: () => {
      return resultSuccess(loginInfo);
    },
  },
  {
    url: '/basic-api/system/logs/login/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/logs/login/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
] as MockMethod[];
