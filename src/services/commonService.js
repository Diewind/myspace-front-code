import ajax from './ajax';
import cityobj from './city';
const adminUrl = '/admin/';

// 请求天气
export const reqWeather = (city) => {
  let citynum = null;
  if (city in cityobj) {
    citynum = cityobj[city];
  }

  const url = `${adminUrl}weather/query`;
  return ajax(url, {
    citynum
  }, 'GET');
};
