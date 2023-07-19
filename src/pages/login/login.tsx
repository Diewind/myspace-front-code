import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';
import Cookies from 'js-cookie';
import './login.less';
import logo from '@assets/images/logo.png';
import { getToken, fetchLogin } from '@services/commonService';
import memoryUtils from '@utils/memoryUtils';
import storageUtils from '@utils/storageUtils';
import { setToken } from '@utils/authorize';

/**
 * 登录组件
 */
const Login:React.FC = (props: any) => {
  const history = useHistory();
  const handleSubmit = async (values:any) => {
    // 对所有的表单字段进行校验
    const { username, password } = values;
    const result:any = await fetchLogin(username, password);
    const { data } = result;
    if (data.code === 200) { // 登录成功
      // 提示登录成功
      // message.success('登录成功');
      // 保存 token
      setToken(data.data.token);
      // 保存user
      // const user = result.data || {};
      // // 保存在cookie中
      // const inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 设置过期时间
      // Cookies.set('user', user, { expires: inFifteenMinutes });
      // memoryUtils.user = user;// 保存在内存中
      // storageUtils.saveUser(user);// 保存在local中
      // 跳转到管理界面（不需要再回退到登录界面，所以用replace）
      history.replace('/home');
    } else { // 登录失败
      // 提示错误信息
      // message.error(result.msg);
    }
  };
  const validatorPwd = (_:any, value:any) => {
    if (!value) {
      return Promise.reject('密码必须输入');
    } else if (value.length < 4) {
      return Promise.reject('密码长度不能小于4位');
    } else if (value.length > 12) {
      return Promise.reject('密码长度不能大于12位');
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject('密码必须是英文、数字或下划线组成');
    }
    return Promise.resolve();//验证通过

  };
  // 如果用户已经登录，自动跳转到管理界面
  // Const user = memoryUtils.user;
  const user = Cookies.get('user');
  if (user) {
    return <Redirect to='/' />;
  }
  return (
    <div className='login'>
      <header className='login-header'>
        <img src={logo} alt='logo' />
        <h1>MySpace后台管理系统</h1>
      </header>
      <section className='login-content'>
        <h2>登录</h2>
        <Form
          onFinish={handleSubmit}
          className='login-form'
        >
          <Form.Item
            name='username'
            rules={[
              { required: true, whitespace: true, message: '请输入用户名!' },
              { min: 4, message: '用户名至少4位!' },
              { max: 12, message: '用户名最多12位!' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
            ]}
            initialValue='admin'
          >
            {
              /*
              用户名/密码的合法性要求
              1.必须输入
              2.必须大于等于4位
              3.必须小于等于12位
              4.必须是英文、数字或下划线组成
              */
            }
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { validator: validatorPwd }
            ]}
          >
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='默认密码admin'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Login;
