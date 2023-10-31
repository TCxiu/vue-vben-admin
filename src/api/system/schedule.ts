import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/schedule',
  ExecuteOnceSchedule = '/system/schedule/execution/once/',
}

/**
 * @description: 定时任务列表
 */
export function getScheduleList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加定时任务
 */
export function createSchedule(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 定时任务详情
 */
export function getScheduleInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改定时任务
 */
export function editSchedule(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除定时任务
 */
export function delSchedule(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 执行一次定时任务
 */
export function executeOnceSchedule(id) {
  return defHttp.put<any>({ url: Api.ExecuteOnceSchedule + id });
}
