import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const uploadResult = {
  url: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
};

export default [
  // 测试上传
  {
    url: '/basic-api/common/upload/test',
    method: 'post',
    response: () => {
      return resultSuccess(uploadResult);
    },
  },
  // 菜单PNG图标
  {
    url: '/basic-api/common/upload/image',
    method: 'post',
    response: () => {
      return resultSuccess(uploadResult);
    },
  },
] as MockMethod[];
