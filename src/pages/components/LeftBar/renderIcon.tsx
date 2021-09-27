import React from 'react';
import {
  HomeOutlined,
  AppstoreOutlined,
  BarsOutlined,
  CreditCardOutlined,
  UserOutlined,
  SolutionOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  PlusOutlined,
  RetweetOutlined
} from '@ant-design/icons';

const renderIcon = (name:string) => {
  const iconMap:any = {
    HomeOutlined: <HomeOutlined />,
    AppstoreOutlined: <AppstoreOutlined />,
    BarsOutlined: <BarsOutlined />,
    CreditCardOutlined: <CreditCardOutlined />,
    UserOutlined: <UserOutlined />,
    SolutionOutlined: <SolutionOutlined />,
    AreaChartOutlined: <AreaChartOutlined />,
    BarChartOutlined: <BarChartOutlined />,
    LineChartOutlined: <LineChartOutlined />,
    PieChartOutlined: <PieChartOutlined />,
    PlusOutlined: <PlusOutlined />,
    RetweetOutlined: <RetweetOutlined />,
  };
  return iconMap[name];
}

export default renderIcon;
