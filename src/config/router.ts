/**
 * router.ts - 路由配置文件
 * @returns {array} config - 路由配置
 */
const config: object[] = [
  {
    path: '/home',
    key: '/home',
    icon: 'HomeOutlined',
    title: '首页',
    isPublic: true,
    component: () => import('../pages/Home'),
  },
  {
    path: '/product',
    key: '/product',
    icon: 'AppstoreOutlined',
    title: '商品',
    children: [
      {
        path: '/product/category-manage',
        key: '/product/category-manage',
        icon: 'BarsOutlined',
        title: '品类管理',
        component: () => import('../pages/Category'),
      },
      {
        path: '/product/product-manage',
        key: '/product/product-manage',
        icon: 'CreditCardOutlined',
        title: '商品管理',
        component: () => import('../pages/Product'),
      }
    ]
  },
  {
    path: '/user',
    key: '/user',
    icon: 'UserOutlined',
    title: '用户管理',
    component: () => import('../pages/User'),
  },
  {
    path: '/role',
    key: '/role',
    icon: 'SolutionOutlined',
    title: '角色管理',
    component: () => import('../pages/Role'),
  },
  {
    path: '/chart',
    key: '/chart',
    icon: 'AreaChartOutlined',
    title: '图形图表',
    children: [
      {
        path: '/chart/bar',
        key: '/chart/bar',
        icon: 'BarChartOutlined',
        title: '柱形图',
        component: () => import('../pages/Chart/Bar'),
      },
      {
        path: '/chart/line',
        key: '/chart/line',
        icon: 'LineChartOutlined',
        title: '折线图',
        component: () => import('../pages/Chart/Line'),
      },
      {
        path: '/chart/pie',
        key: '/chart/pie',
        icon: 'PieChartOutlined',
        title: '饼图',
        component: () => import('../pages/Chart/Pie'),
      }
    ]
  },
  {
    path: '/learn',
    key: '/learn',
    icon: 'PlusOutlined',
    title: '学习工具',
    children: [
      {
        path: '/learn/mind',
        key: '/learn/mind',
        icon: 'RetweetOutlined',
        title: '思维导图',
        component: () => import('../pages/Learn/Mind'),
      },
      {
        path: '/learn/flow',
        key: '/learn/flow',
        icon: 'RetweetOutlined',
        title: '流程图',
        component: () => import('../pages/Learn/Flow'),
      },
      {
        path: '/learn/koni',
        key: '/learn/koni',
        icon: 'RetweetOutlined',
        title: '拓扑图',
        component: () => import('../pages/Learn/Koni'),
      }
    ]
  },
];
export default config;
