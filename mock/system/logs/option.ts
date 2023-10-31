import { resultPageSuccess } from '../../_util';
import { MockMethod } from 'vite-plugin-mock';

const optionList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      createTime: '@datetime',
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/system/logs/option',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, optionList);
    },
  },
] as MockMethod[];
