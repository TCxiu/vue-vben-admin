import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/role',
  SelectRole = '/system/role/select/option',
}

/**
 * @description: 角色列表
 */
export function getRoleList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加角色
 */
export function createRole(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 角色详情
 */
export function getRoleInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改角色
 */
export function editRole(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除角色
 */
export function delRole(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 角色选择
 */
export function selectRole() {
  return defHttp.get<any>({ url: Api.SelectRole });
}
