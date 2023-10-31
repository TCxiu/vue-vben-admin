import { defHttp } from '/@/utils/http/axios';
import { LoginOption, LoginResult } from './model/systemModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  GetCaptcha = '/constant/system/captcha',
  Login = '/constant/system/login',
}

/**
 * @description: 获取图形验证码
 */
export function getCaptcha(params?) {
  return defHttp.get<any>({ url: Api.GetCaptcha, params });
}

/**
 * @description: 用户登录
 */
export function loginApi(data: LoginOption, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResult>(
    {
      url: Api.Login,
      data,
    },
    {
      errorMessageMode: mode,
    },
  );
}
