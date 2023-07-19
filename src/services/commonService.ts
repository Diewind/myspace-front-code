import ajax from './ajax';
import cityobj from './city';

import axios from 'axios';

import request from '@utils/request';

const adminPrefix = '/admin/';

/**
 * fetchWeather - 请求天气
 * @param {string} city - 所在城市
 * @returns {object} res
 */
export const fetchWeather = (city:string) => {
  let citynum;
  let cityMaps:any = cityobj;
  if (city in cityobj) {
    citynum = cityMaps[city];
  }
  const url = `${adminPrefix}weather/query`;
  return ajax(url, {
    citynum
  }, 'GET');
};

/**
 * fetchLogin - 登录
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {object} res
 */
export const fetchLogin = (username:any, password:any) => {
  // return ajax(`${adminPrefix}user/login`, { username, password }, 'POST');
  const res = request({
    method: 'post',
    url: '/admin/sys/sys-user/login/namePwdLogin',
    data: { userName: username, password },
  });
  return res;
};
