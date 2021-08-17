/**
 * Editform - 用户修改/新增
 * @date: 2021-2-23 20:21:33
 * @author: diewind
 * @version: 1.0.0
 */
import React, { PureComponent } from 'react';
import { Form, Input, Select, Modal } from 'antd';
const { Option } = Select;

const FormItem = Form.Item;
const formItemLayout: object = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 18
  }
};

interface Prop{
  roles: object[],
  user: object,
  editUserVisible: boolean,
  onOk: () => void,
  onCancel: () => void,
  onRef: (ref: object) => void,
}

const EditUser: React.FC<Prop> = (props) => {
  const { roles, user, editUserVisible, onOk, onCancel, onRef } = props;
  const [form] = Form.useForm();
  onRef(form);
  return (
    <Modal
      title='添加角色'
      visible={editUserVisible}
      forceRender
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        initialValues={user}
      >
        <FormItem
          {...formItemLayout}
          label="用户名"
          name="username"
          rules={[{
            required: true,
            message: '用户名不能为空!'
          }]}
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          name="password"
          rules={[{
            required: true,
            message: '密码不能为空!'
          }]}
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
          name="password"
          rules={[{
            required: true,
            message: '手机号不能为空!'
          }]}
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          name="password"
          rules={[{
            required: true,
            message: '邮箱不能为空!'
          }]}
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角色"
          name="password"
          rules={[{
            required: true,
            message: '角色不能为空!'
          }]}
        >
          <Select placeholder='请选择角色'>
            {
              roles.map((role:any) => <Option key={role.id} value={role.id}>{role.name}</Option>
              )
            }
          </Select>
        </FormItem>
      </Form>
    </Modal>
    )
}

// class EditForm extends PureComponent {
//   static propsTypes = {
//     setForm: PropsTypes.func.isRequired,
//     roles: PropsTypes.array.isRequired,
//     user: PropsTypes.object
//   }
//   componentWillMount() {
//     // 将form对象通过setForm()传递给父组件
//     this.props.setForm(this.props.form);
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { roles, user } = this.props;
//     // 指定Item布局的配置对象
//     const formItemLayout = {
//       labelCol: {
//         span: 4
//       },
//       wrapperCol: {
//         span: 18
//       }
//     };
//     return (
//       <Form {...formItemLayout}>
//         <Item label='用户名'>
//           {
//             getFieldDecorator('username', {
//               initialValue: user.username,
//               rules: [{
//                 required: true,
//                 message: '用户名不能为空!'
//               }]
//             })(
//               <Input placeholder='请输入用户名' />
//             )
//           }
//         </Item>
//         {
//           user.id ? null
//             : <Item label='密码'>
//               {
//                 getFieldDecorator('password', {
//                   initialValue: user.password,
//                   rules: [{
//                     required: true,
//                     message: '密码不能为空!'
//                   }]
//                 })(
//                   <Input type='password' placeholder='请输入密码' />
//                 )
//               }
//             </Item>

//         }
//         <Item label='手机号'>
//           {
//             getFieldDecorator('phone', {
//               initialValue: user.phone,
//               rules: [{
//                 required: true,
//                 message: '手机号不能为空!'
//               }]
//             })(
//               <Input placeholder='请输入手机号' />
//             )
//           }
//         </Item>
//         <Item label='邮箱'>
//           {
//             getFieldDecorator('email', {
//               initialValue: user.email
//             })(
//               <Input placeholder='请输入邮箱' />
//             )
//           }
//         </Item>
//         <Item label='角色'>
//           {
//             getFieldDecorator('roleId', {
//               initialValue: user.roleId
//             })(
//               <Select placeholder='请选择角色'>
//                 {
//                   roles.map((role) => <Option key={role.id} value={role.id}>{role.name}</Option>
//                   )
//                 }
//               </Select>
//             )
//           }
//         </Item>
//       </Form>
//     );
//   }
// }

export default EditUser;
