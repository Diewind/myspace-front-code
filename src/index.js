/*
 * @Description:index 入口文件
 * @Date: 2021-03-30
 * @Author: harry <sh_fight@163.com>
 * @Version: 0.0.1
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';
import { Provider } from 'react-redux';
import store from './store/stores/index';
import '@assets/css/reset.css';

// 读取local中保存user，保存到内存中
const user = storageUtils.getUser();

memoryUtils.user = user;
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  );
}
render();
store.subscribe(render);
