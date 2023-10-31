import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/analysis',
  meta: {
    title: 'routes.dashboard.dashboard',
    icon: 'bx:bx-home',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        title: 'routes.dashboard.analysis',
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 200,
    method: 'get',
    response: () => {
      const menu = [dashboardRoute];
      return resultSuccess(menu);
    },
  },
] as MockMethod[];
