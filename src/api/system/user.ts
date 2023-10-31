import { defHttp } from '/@/utils/http/axios';
import { UserLoginInfo } from './model/userModel';

enum Api {
  GetUserLoginInfo = '/system/user/info/login',
  UserLogout = '/system/user/logout',
  GetPermCode = '/system/user/perm',

  BaseUrl = '/system/user',
}

/**
 * @description: 获取用户登录信息
 */
export function getUserLoginInfo() {
  return defHttp.get<UserLoginInfo>({ url: Api.GetUserLoginInfo }, { errorMessageMode: 'none' });
}

/**
 * @description: 注销登录
 */
export function doLogout() {
  return defHttp.post<any>({ url: Api.UserLogout });
}

/**
 * @description: 获取权限
 */
export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

/**
 * @description: 管理账号列表
 */
export function getUserList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加管理账号
 */
export function createUser(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 管理账号详情
 */
export function getUserInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改管理账号
 */
export function editUser(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除管理账号
 */
export function delUser(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}
