import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

// 可视化路由
const dashboardRoute = [
  {
    id: '10',
    parentId: '',
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/analysis',
    meta: {
      title: 'routes.dashboard.dashboard',
      icon: 'ant-design:home-outlined',
    },
  },
  {
    id: '11',
    parentId: '10',
    path: 'analysis',
    name: 'Analysis',
    component: '/dashboard/analysis/index',
    meta: {
      title: 'routes.dashboard.analysis',
      icon: 'ant-design:fund-projection-screen-outlined',
    },
  },
  {
    id: '12',
    parentId: '10',
    path: 'workbench',
    name: 'Workbench',
    component: '/dashboard/workbench/index',
    meta: {
      title: 'routes.dashboard.workbench',
      icon: 'ant-design:bar-chart-outlined',
    },
  },
];

// 系统路由
const systemRoute = [
  {
    id: '20',
    parentId: '',
    path: '/system',
    name: 'System',
    component: 'LAYOUT',
    redirect: '/system/user',
    meta: {
      icon: 'ion:settings-outline',
      title: 'routes.system.module',
    },
  },
  {
    id: '21',
    parentId: '20',
    path: 'user',
    name: 'SystemUserManagement',
    meta: {
      title: 'routes.system.user',
      icon: 'bi:people-fill',
    },
    component: '/system/user/index',
  },
  {
    id: '22',
    parentId: '20',
    path: 'site',
    name: 'SystemSiteManagement',
    meta: {
      title: 'routes.system.site',
      icon: 'ant-design:apartment-outlined',
    },
    component: '/system/site/index',
  },
  {
    id: '23',
    parentId: '20',
    path: 'menu',
    name: 'SystemMenuManagement',
    meta: {
      title: 'routes.system.menu',
      icon: 'ep:menu',
    },
    component: '/system/menu/index',
  },
  {
    id: '24',
    parentId: '20',
    path: 'role',
    name: 'SystemRoleManagement',
    meta: {
      title: 'routes.system.role',
      icon: 'bi:person-circle',
    },
    component: '/system/role/index',
  },
  {
    id: '25',
    parentId: '20',
    path: 'dict',
    name: 'SystemDictManagement',
    meta: {
      title: 'routes.system.dict',
      icon: 'ep:collection',
    },
    component: '/system/dict/index',
  },
  {
    id: '26',
    parentId: '20',
    path: '/logs',
    name: 'SystemLogsManagement',
    meta: {
      title: 'routes.system.logs.module',
      icon: 'ant-design:reconciliation-filled',
    },
  },
  {
    id: '261',
    parentId: '26',
    path: 'option',
    name: 'SystemOptionLog',
    meta: {
      title: 'routes.system.logs.option',
      icon: 'ant-design:file-protect-outlined',
    },
    component: '/system/logs/option/index',
  },
  {
    id: '262',
    parentId: '26',
    path: 'login',
    name: 'SystemLoginLog',
    meta: {
      title: 'routes.system.logs.login',
      icon: 'ri:login-box-line',
    },
    component: '/system/logs/login/index',
  },
];

// 代码生成路由
const generateRoute = [
  {
    id: '40',
    parentId: '',
    path: '/generate',
    name: 'Generate',
    component: 'LAYOUT',
    redirect: '/generate/front',
    meta: {
      title: '代码生成',
      icon: 'codicon:gist',
    },
  },
  {
    id: '41',
    parentId: '40',
    path: 'front',
    name: 'GenerateFront',
    component: '/generate/front/index',
    meta: {
      title: '前端代码生成',
      icon: 'ant-design:safety-certificate-outlined',
    },
  },
  {
    id: '42',
    parentId: '40',
    path: 'back',
    name: 'GenerateBack',
    component: '/generate/back/index',
    meta: {
      title: '后台代码生成',
      icon: 'ant-design:safety-certificate-outlined',
    },
  },
];

// 测试路由
const testRoute = [
  {
    id: '30',
    parentId: '',
    path: '/test',
    name: 'Test',
    component: 'LAYOUT',
    redirect: '/test/feat',
    meta: {
      title: '测试',
      icon: 'ant-design:bug-outlined',
    },
  },
  {
    id: '31',
    parentId: '30',
    path: 'feat',
    name: 'TestFeat',
    component: '/test/feat/index',
    meta: {
      title: '功能测试',
      icon: 'ant-design:safety-certificate-outlined',
    },
  },
  {
    id: '32',
    parentId: '30',
    path: 'component',
    name: 'TestComponent',
    component: '/test/component/index',
    meta: {
      title: '组件测试',
      icon: 'bi:boxes',
    },
  },
];

// 关于路由
const aboutRoute = [
  {
    id: '50',
    parentId: '',
    path: '/about',
    name: 'About',
    component: 'LAYOUT',
    redirect: '/about/index',
    meta: {
      title: 'routes.dashboard.about',
      icon: 'ant-design:link-outlined',
      hideChildrenInMenu: true,
    },
  },
  {
    id: '51',
    parentId: '50',
    path: 'index',
    name: 'AboutIndex',
    component: '/sys/about/index.vue',
    meta: {
      title: 'routes.dashboard.about',
      icon: 'ant-design:link-outlined',
      hideMenu: true,
    },
  },
];

// 可视化菜单
const dashboardMenu = [
  {
    id: '10',
    parentId: '',
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/analysis',
    title: 'routes.dashboard.dashboard',
    icon: 'ant-design:home-outlined',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '11',
    parentId: '10',
    path: 'analysis',
    name: 'Analysis',
    component: '/dashboard/analysis/index',
    title: 'routes.dashboard.analysis',
    icon: 'ant-design:fund-projection-screen-outlined',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '12',
    parentId: '10',
    path: 'workbench',
    name: 'Workbench',
    component: '/dashboard/workbench/index',
    title: 'routes.dashboard.workbench',
    icon: 'ant-design:bar-chart-outlined',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
];

// 系统菜单
const systemMenu = [
  {
    id: '20',
    parentId: '',
    path: '/system',
    name: 'System',
    component: 'LAYOUT',
    redirect: '/system/user',
    icon: 'ion:settings-outline',
    title: 'routes.system.module',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '21',
    parentId: '20',
    path: 'user',
    name: 'SystemUserManagement',
    title: 'routes.system.user',
    icon: 'bi:people-fill',
    component: '/system/user/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '22',
    parentId: '20',
    path: 'site',
    name: 'SystemSiteManagement',
    title: 'routes.system.site',
    icon: 'ant-design:apartment-outlined',
    component: '/system/site/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '23',
    parentId: '20',
    path: 'menu',
    name: 'SystemMenuManagement',
    title: 'routes.system.menu',
    icon: 'ep:menu',
    component: '/system/menu/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '24',
    parentId: '20',
    path: 'role',
    name: 'SystemRoleManagement',
    title: 'routes.system.role',
    icon: 'bi:person-circle',
    component: '/system/role/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '25',
    parentId: '20',
    path: 'dict',
    name: 'SystemDictManagement',
    title: 'routes.system.dict',
    icon: 'ep:collection',
    component: '/system/dict/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '26',
    parentId: '20',
    path: '/logs',
    name: 'SystemLogsManagement',
    title: 'routes.system.logs.module',
    icon: 'ant-design:reconciliation-filled',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '261',
    parentId: '26',
    path: 'option',
    name: 'SystemOptionLog',
    title: 'routes.system.logs.option',
    icon: 'ant-design:file-protect-outlined',
    component: '/system/logs/option/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '262',
    parentId: '26',
    path: 'login',
    name: 'SystemLoginLog',
    title: 'routes.system.logs.login',
    icon: 'ri:login-box-line',
    component: '/system/logs/login/index',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
];

// 测试菜单
const testMenu = [
  {
    id: '30',
    parentId: '',
    path: '/test',
    name: 'Test',
    component: 'LAYOUT',
    redirect: '/test/feat',
    title: '测试',
    icon: 'ant-design:bug-outlined',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '31',
    parentId: '30',
    path: 'feat',
    name: 'TestFeat',
    component: '/test/feat/index',
    title: '功能测试',
    icon: 'ant-design:safety-certificate-outlined',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
  {
    id: '32',
    parentId: '30',
    path: 'component',
    name: 'TestComponent',
    component: '/test/component/index',
    title: '组件测试',
    icon: 'bi:boxes',
    orderNo: 0,
    wapIcon: 'https://img.likepeng.cn/ui/web/admin/avatar/default/avatar.png',
    terminalName: '测试电脑端',
    menuType: '测试菜单',
  },
];

const menuInfo = {
  id: '1002',
  parentId: '1000',
  path: 'https://vvbin.cn/doc-next/',
  name: 'DocExternal',
  component: 'LAYOUT',
  title: '外链接',
  orderNo: 0,
};

const menuOption = [
  {
    id: '10',
    parentId: '',
    label: 'routes.dashboard.dashboard',
    icon: 'ant-design:home-outlined',
    orderNo: 0,
  },
  {
    id: '11',
    parentId: '10',
    label: 'routes.dashboard.analysis',
    icon: 'ant-design:fund-projection-screen-outlined',
    orderNo: 0,
  },
  {
    id: '12',
    parentId: '10',
    label: 'routes.dashboard.workbench',
    icon: 'ant-design:bar-chart-outlined',
    orderNo: 0,
  },
  {
    id: '20',
    parentId: '',
    label: 'routes.system.module',
    icon: 'ion:settings-outline',
    orderNo: 0,
  },
  {
    id: '21',
    parentId: '20',
    label: 'routes.system.user',
    icon: 'bi:people-fill',
    orderNo: 0,
  },
  {
    id: '22',
    parentId: '20',
    label: 'routes.system.site',
    icon: 'ant-design:apartment-outlined',
    orderNo: 0,
  },
  {
    id: '23',
    parentId: '20',
    label: 'routes.system.menu',
    icon: 'ep:menu',
    orderNo: 0,
  },
  {
    id: '24',
    parentId: '20',
    label: 'routes.system.role',
    icon: 'bi:person-circle',
    orderNo: 0,
  },
  {
    id: '25',
    parentId: '20',
    label: 'routes.system.dict',
    icon: 'ep:collection',
    orderNo: 0,
  },
  {
    id: '26',
    parentId: '20',
    label: 'routes.system.logs.module',
    icon: 'ant-design:reconciliation-filled',
    orderNo: 0,
  },
  {
    id: '261',
    parentId: '26',
    label: 'routes.system.logs.option',
    icon: 'ant-design:file-protect-outlined',
    orderNo: 0,
  },
  {
    id: '262',
    parentId: '26',
    label: 'routes.system.logs.login',
    icon: 'bi:save-fill',
    orderNo: 0,
  },
  {
    id: '30',
    parentId: '',
    label: '测试',
    icon: 'ant-design:bug-outlined',
    orderNo: 0,
  },
  {
    id: '31',
    parentId: '30',
    label: '功能测试',
    icon: 'ant-design:safety-certificate-outlined',
    orderNo: 0,
  },
  {
    id: '32',
    parentId: '30',
    label: '组件测试',
    icon: 'bi:boxes',
    orderNo: 0,
  },
];

export default [
  {
    url: '/basic-api/system/menu/routes',
    method: 'get',
    response: () => {
      return resultSuccess([
        ...dashboardRoute,
        ...systemRoute,
        ...generateRoute,
        ...testRoute,
        ...aboutRoute,
      ]);
    },
  },
  {
    url: '/basic-api/system/menu',
    method: 'get',
    response: () => {
      return resultSuccess([...dashboardMenu, ...systemMenu, ...testMenu]);
    },
  },
  {
    url: '/basic-api/system/menu',
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/menu/:id',
    method: 'get',
    response: () => {
      return resultSuccess(menuInfo);
    },
  },
  {
    url: '/basic-api/system/menu/:id',
    method: 'put',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/menu/:id',
    method: 'delete',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/system/menu/select/option',
    method: 'get',
    response: () => {
      return resultSuccess(menuOption);
    },
  },
] as MockMethod[];
