import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/dict',
  TreeDict = '/system/dict/select/tree',
  OptionDict = '/system/dict/select/option',
  RefreshDict = '/system/dict/refresh',
}

/**
 * @description: 数据字典列表
 */
export function getDictList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加数据字典
 */
export function createDict(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 数据字典详情
 */
export function getDictInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改数据字典
 */
export function editDict(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除数据字典
 */
export function delDict(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 字典选择框
 */
export function optionDict(params) {
  return defHttp.get<any>({ url: Api.OptionDict, params });
}

/**
 * @description: 刷新缓存
 */
export function refreshDict() {
  return defHttp.put<any>({ url: Api.RefreshDict });
}
