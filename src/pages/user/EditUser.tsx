/**
 * Editform - 用户修改/新增
 * @date: 2021-2-23 20:21:33
 * @author: diewind
 * @version: 1.0.0
 */
import React from 'react';
import { Form, Input, Select, Modal } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';

import { FORM_ITEM_LAYOUT_ONE_IN_THREE } from '@utils/constants';

const { Option } = Select;
const FormItem = Form.Item;

interface Prop{
  roles: object[],
  user: object,
  editUserVisible: boolean,
  onOk: () => void,
  onCancel: () => void,
  onRef: (ref: FormInstance) => void,
}

const EditUser: React.FC<Prop> = (props) => {
  const { roles, user, editUserVisible, onOk, onCancel, onRef } = props;
  const [form] = Form.useForm();
  onRef(form);

  console.log('user',user);

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
          {...FORM_ITEM_LAYOUT_ONE_IN_THREE}
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
          {...FORM_ITEM_LAYOUT_ONE_IN_THREE}
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
          {...FORM_ITEM_LAYOUT_ONE_IN_THREE}
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
          {...FORM_ITEM_LAYOUT_ONE_IN_THREE}
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
          {...FORM_ITEM_LAYOUT_ONE_IN_THREE}
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

export default EditUser;
