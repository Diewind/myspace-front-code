import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
// Import memoryUtils from '@utils/memoryUtils'
import { asyncComponent } from '@utils/asyncComponent';

import Left from '@pages/components/left';
import Header from '@pages/components/header';

import { Layout } from 'antd';

import routerConfig from '@config/router';
const { Content, Footer, Sider } = Layout;

// 管理的路由组件
export default class Admin extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    // Const user = memoryUtils.user;
    // 如果内存中没有存储user,表示当前没有登录
    const user = Cookies.get('user');
    if (!!user) {
      // 自动跳转到登录
      return <Redirect to='/login/' />;
    }
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Left collapsed={this.state.collapsed} />
        </Sider>
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            toggle={this.toggle}
          />
          <Content style={{ margin: 20, backgroundColor: '#fff' }}>
            <Switch>
              {
                routerConfig.map((v) => {
                  if (v.components){
                    return v.components.map((n) => <Route key={n.path} path={n.path} component={asyncComponent(v.component)} />);
                  }
                  return <Route key={v.path} path={v.path} component={asyncComponent(v.component)} />;
                })
              }
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>本系统由pilot开发，版权所有，盗版必究！</Footer>
        </Layout>
      </Layout>
    );
  }
}
