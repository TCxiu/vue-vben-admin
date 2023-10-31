/**
 * @description: 登录请求体
 */
export interface LoginOption {
  account: string;
  password: string;
  codeKey: string;
  code: string;
}

/**
 * @description: 登录响应体
 */
export interface LoginResult {
  userId: string | number;
  token: string;
}
