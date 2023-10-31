import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/system/queue',
}

/**
 * @description: 系统队列列表
 */
export function getQueueList(params) {
  return defHttp.get<any>({ url: Api.BaseUrl, params });
}

/**
 * @description: 添加系统队列
 */
export function createQueue(data) {
  return defHttp.post<any>({ url: Api.BaseUrl, data });
}

/**
 * @description: 系统队列详情
 */
export function getQueueInfo(id) {
  return defHttp.get<any>({ url: Api.BaseUrl + '/' + id });
}

/**
 * @description: 修改系统队列
 */
export function editQueue(id, data) {
  return defHttp.put<any>({ url: Api.BaseUrl + '/' + id, data });
}

/**
 * @description: 删除系统队列
 */
export function delQueue(id) {
  return defHttp.delete<any>({ url: Api.BaseUrl + '/' + id });
}
