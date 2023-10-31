import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetOptionList = '/system/logs/option',
}

/**
 * @description: 操作日志列表
 */
export function getOptionList(params) {
  return defHttp.get<any>({ url: Api.GetOptionList, params });
}
