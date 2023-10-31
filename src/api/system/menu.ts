import { defHttp } from '/@/utils/http/axios';
import { MenuRoutes } from './model/menuModel';

enum Api {
  GetRoutes = '/system/menu/routes',
  BaseUrl = '/system/menu',
  SelectMenu = '/system/menu/select/option',
}

/**
 * @description: 路由菜单
 */
export function getMenuRoutes() {
  return defHttp.get<MenuRoutes>({ url: Api.GetRoutes });
}

/**
 * @description: 菜单列表
 */
export function getMenuList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加菜单
 */
export function createMenu(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 菜单详情
 */
export function getMenuInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改菜单
 */
export function editMenu(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除菜单
 */
export function delMenu(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 菜单下拉框
 */
export function selectMenu(params) {
  return defHttp.get<any>({ url: Api.SelectMenu, params });
}
