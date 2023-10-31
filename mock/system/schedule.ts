import { resultPageSuccess, resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const scheduleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      createTime: '@datetime',
    });
  }
  return result;
})();

const scheduleInfo = {};

export default [
  {
    url: '/basic-api/system/schedule',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, scheduleList);
    },
  },
  {
    url: '/basic-api/system/schedule',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/schedule/:id',
    method: 'get',
    response: () => {
      return resultSuccess(scheduleInfo);
    },
  },
  {
    url: '/basic-api/system/schedule/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/schedule/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
] as MockMethod[];
