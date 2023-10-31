import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetCommonSelect = '/system/dict/select/tree',
}

/**
 * @description: 获取数据字典值下拉菜单
 */

export const getCommonSelect = (params) => {
  return defHttp.get<any>({ url: Api.GetCommonSelect, params });
};
