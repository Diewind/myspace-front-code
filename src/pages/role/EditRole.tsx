/**
 * EditRole - 角色编辑
 * @date: 2021-8-9 11:16:52
 * @author: harry
 * @version: 1.0.0
 */
import React from 'react';
import { Form, Input, Modal } from 'antd';

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
  roleVisible: boolean,
  onOk: () => void,
  onCancel: () => void,
  onRef: (ref: object) => void,
}

const EditRole: React.FC<Prop> = (props) => {
  const { roleVisible, onOk, onCancel, onRef } = props;
  const [form] = Form.useForm();
  onRef(form);
  return (
    <Modal
      title='添加角色'
      visible={roleVisible}
      forceRender
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
      >
        <FormItem
          {...formItemLayout}
          label="角色名称"
          name="roleName"
          rules={[{
            required: true,
            message: '角色名不能为空!'
          }]}
        >
          <Input />
        </FormItem>
      </Form>
    </Modal>
  );
}

export default EditRole;
