import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/logs/login',
}

/**
 * @description: 登录日志列表
 */
export function getLoginList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加登录日志
 */
export function createLogin(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 登录日志详情
 */
export function getLoginInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改登录日志
 */
export function editLogin(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除登录日志
 */
export function delLogin(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}
