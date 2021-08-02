import React from 'react'
import { HomeOutlined, AppstoreOutlined, BarsOutlined, CreditCardOutlined, UserOutlined, SolutionOutlined, AreaChartOutlined, BarChartOutlined, LineChartOutlined, PieChartOutlined, PlusOutlined, RetweetOutlined } from '@ant-design/icons';

const menuList = [
  {
    title: '首页',//菜单标题名称
    key: '/home',//对应的path
    icon: <HomeOutlined />,//图标名称
    isPublic: true
  },
  {
    title: '商品',
    key: '/products',
    icon: <AppstoreOutlined />,
    children: [//子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: <BarsOutlined />
      },
      {
        title: '商品管理',
        key: '/product',
        icon: <CreditCardOutlined />
      }
    ]
  },
  {
    title: '用户管理',//菜单标题名称
    key: '/user',//对应的path
    icon: <UserOutlined />
  },
  {
    title: '角色管理',//菜单标题名称
    key: '/role',//对应的path
    icon: <SolutionOutlined />
  },
  {
    title: '图形图表',
    key: '/charts',
    icon: <AreaChartOutlined />,
    children: [//子菜单列表
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: <BarChartOutlined />
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: <LineChartOutlined />
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: <PieChartOutlined />
      }
    ]
  },
  {
    title: '学习工具',
    key: '/learnTools',
    icon: <PlusOutlined />,
    children: [//子菜单列表
      {
        title: '思维导图',
        key: '/learnTools/mind',
        icon: <RetweetOutlined />
      },
      {
        title: '流程图',
        key: '/learnTools/flow',
        icon: <RetweetOutlined />
      },
      {
        title: '拓扑图',
        key: '/learnTools/koni',
        icon: <RetweetOutlined />
      }
    ]
  },
];

export default menuList;