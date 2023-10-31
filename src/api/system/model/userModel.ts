export interface RoleInfo {
  label: string;
  value: string;
}

/**
 * @description: 用户登录信息响应体
 */
export interface UserLoginInfo {
  // 用户id
  userId: string | number;
  // 账号
  account: string;
  // 昵称
  nickName: string;
  // 头像
  avatar: string;
  // 机构id
  siteId: string | number;
  // 机构类型
  siteType: number;
  // 数据权限
  dataScopeType: number;
  // 角色列表
  roles: RoleInfo[];
  desc?: string;
  homePath?: string;
}
