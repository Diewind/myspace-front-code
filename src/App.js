/*
 * @Description: App 应用根组件
 * @Date: 2021-03-30
 * @Author: harry <sh_fight@163.com>
 * @Version: 0.0.1
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Login from './pages/Login/login';
import Admin from './pages/Admin/admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>{/* 只匹配其中一个 */}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
