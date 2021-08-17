const config: object[] = [
  {
    path: '/home',
    key: '/home',
    component: () => import('../pages/home'),
  },
  {
    path: '/user',
    key: '/user',
    component: () => import('../pages/user'),
  },
  {
    path: '/role',
    key: '/role',
    component: () => import('../pages/role'),
  },
];
export default config;
