import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Modal } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import LinkButton from '../LinkButton/index';
import memoryUtils from '@utils/memoryUtils';
import storageUtils from '@utils/storageUtils';
import { fetchWeather } from '@services/commonService';
import router from '@config/router';
import { removeToken } from '@utils/authorize';
import { sysLogin } from '@services/sysService';

import './index.less';

type HeaderProps = React.PropsWithChildren<{
  collapsed: boolean,
  toggle: () => void,
}>;
const Header:React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({
    city: '', // 所在城市
    highOf: '', // 最高温
    lowOf: '', // 最低温
    info: '', // 天气信息
    notice: '', // 天气提示
  });
  let timerId:any = null;
  const tick = () => setCurrentTime(new Date());
  const clearTimerId = () => clearInterval(timerId);
  useEffect(() => {
    // queryWeather();
    // getTitle();
    timerId = setInterval(
      tick,
      1000
    );
    return clearTimerId;
  }, []);
  /**
   * logout - 退出登录
   */
  const logout = () => {
    // 显示确认框
    Modal.confirm({
      title: '确认退出吗?',
      onOk: async () => {
        const { username } = memoryUtils.user;
        // const res = await sysLogin(username);
        // if(res){
          // 删除保存的user数据
          storageUtils.removeUser();
          // memoryUtils.user = {};
          removeToken();
          // 跳转到login
          history.replace('/login');
        // }
      }
    });
  }
  const queryWeather = async () => {
    // 调用接口请求异步获取天气
    const result:any = await fetchWeather('上海');
    const city = result.data && result.data.cityInfo && result.data.cityInfo.city;
    let { low = '', high = '', type, notice } = result.data && result.data.data && result.data.data.forecast[0];
    const templow = low.split(' ');
    const temphigh = high.split(' ');
    low = templow[templow.length - 1];
    high = temphigh[temphigh.length - 1];
    // 更新状态
    setWeather({
      city, //所在区域
      highOf: high, //天气的最高温
      lowOf: low, //天气的最低温
      notice, //天气的提示
      info: type, //天气的信息
    });

  }
  const getTitle = () => {
    const location = useLocation();
    // 得到当前请求路径
    const path = location.pathname;
    let title = '';
    router.forEach((item:any) => {
      if (item.key === path) { // 如果当前item对象的key与path一样，item的title就是要显示的title
        title = item.title;
      } else if (item.children) {
        // 在所有子item中查找匹配的
        const cItem = item.children.find((v:any) => path.indexOf(v.key) === 0);
        // 如果有值才说明有匹配的
        if (cItem) {
          // 取出它的title
          title = cItem.title;
        }
      }
    });
    return title;
  }
  const { city, lowOf, highOf, info, notice } = weather;
  const {
    collapsed,
    toggle,
  } = props;
  const { username } = memoryUtils.user;
  const title = getTitle();
  return (
    <div className='header'>
      <div className='header-top'>
        <span className='collapse' onClick={toggle}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
        <span>欢迎，{username || '游客'}</span>
        <LinkButton onClick={logout}>退出</LinkButton>
      </div>
      <div className='header-bottom'>
        <div className='header-bottom-left'>{title}</div>
        <div className='header-bottom-right'>
          <span>{currentTime.toLocaleString()}</span>
          <span style={{ margin: '0 10px' }}>{info}</span>
          <span style={{ color: 'green' }}>{lowOf}</span>~<span style={{ color: 'red' }}>{highOf}</span>
          <span style={{ marginLeft: '10px' }}>{city}</span>
          <span style={{ color: '#F44336', marginLeft: '10px' }}>{notice}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
