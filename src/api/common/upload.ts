import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { UploadResult } from './model/uploadModel';
import type { AxiosProgressEvent } from 'axios';
import { useGlobSetting } from '/@/hooks/setting';

const { apiUrl = '' } = useGlobSetting();

enum Api {
  UploadTestApi = '/common/upload/test',
  UploadImage = '/common/upload/image',
  UploadFile = '/common/upload/file',
}

/**
 * @description: 文件上传测试接口
 */
export const uploadTestApi = (
  params: UploadFileParams,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
) => {
  return defHttp.uploadFile<UploadResult>(
    {
      url: apiUrl + Api.UploadTestApi,
      onUploadProgress,
    },
    params,
  );
};

/**
 * @description: 上传图片
 */
export const uploadImage = (
  params: UploadFileParams,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
) => {
  return defHttp.uploadFile<UploadResult>(
    {
      url: apiUrl + Api.UploadImage,
      onUploadProgress,
    },
    params,
  );
};

/**
 * @description: 上传图片
 */
export const uploadFile = (
  params: UploadFileParams,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
) => {
  return defHttp.uploadFile<UploadResult>(
    {
      url: apiUrl + Api.UploadFile,
      onUploadProgress,
    },
    params,
  );
};
