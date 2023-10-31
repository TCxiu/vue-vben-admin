import { resultPageSuccess, resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const queueList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      createTime: '@datetime',
    });
  }
  return result;
})();

const queueInfo = {};

export default [
  {
    url: '/basic-api/system/queue',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, queueList);
    },
  },
  {
    url: '/basic-api/system/queue',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/queue/:id',
    method: 'get',
    response: () => {
      return resultSuccess(queueInfo);
    },
  },
  {
    url: '/basic-api/system/queue/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/queue/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
] as MockMethod[];
