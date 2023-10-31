import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/site',
  SelectSite = '/system/site/select/option',
}

/**
 * @description: 组织机构列表
 */
export function getSiteList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加组织机构
 */
export function createSite(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 组织机构详情
 */
export function getSiteInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改组织机构
 */
export function editSite(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除组织机构
 */
export function delSite(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 组织机构选择
 */
export function selectSite() {
  return defHttp.get<any>({ url: Api.SelectSite });
}
