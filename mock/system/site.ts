import { resultPageSuccess, resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const siteList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@guid',
      name: '测试机构',
      siteLogo: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
      region: '测试区域',
      address: '测试详细的地址',
      level: '99+',
      createTime: '@datetime',
    });
  }
  return result;
})();

const siteInfo = {};

export default [
  {
    url: '/basic-api/system/site',
    method: 'get',
    response: ({ query }) => {
      const { pageNo = 1, pageSize = 10 } = query;
      return resultPageSuccess(pageNo, pageSize, siteList);
    },
  },
  {
    url: '/basic-api/system/site',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/site/:id',
    method: 'get',
    response: () => {
      return resultSuccess(siteInfo);
    },
  },
  {
    url: '/basic-api/system/site/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/site/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/site/select/option',
    method: 'get',
    response: () => {
      return resultSuccess([]);
    },
  },
] as MockMethod[];
