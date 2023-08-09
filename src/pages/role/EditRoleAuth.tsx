/**
 * Authform - 权限表单
 * @date: 2021-2-23 20:21:33
 * @author: harry
 * @version: 1.0.0
 */
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Form, Input, Modal, Tree } from 'antd';

import routers from '@config/router';
import { FORM_ITEM_LAYOUT_ONE_IN_FIVE } from '@utils/constants';

const FormItem = Form.Item;
const { TreeNode } = Tree;

interface Prop{
  selectedRole: {
    name: string,
  },
  onOk: () => void,
  roleAuthVisible: boolean,
  onCancel: () => void,
  ref: (ref: object) => void,
}

const EditRoleAuth: React.FC<Prop> = forwardRef((props: any, ref) => {
  const {
    selectedRole,
    roleAuthVisible,
    onCancel,
    onOk,
  } = props;
  const [checkedKeys,setCheckedKeys] = useState();
  const getTreeNode = (menuList:any) => menuList.reduce((pre: any, item: any) => {
    pre.push(
      <TreeNode title={item.title} key={item.key}>
        {item.children ? getTreeNode(item.children) : null}
      </TreeNode>
    );
    return pre;
  }, []);
  const handleSelected = (checked:any) => {
    setCheckedKeys(checked);
  };
  // 为父组件提交获取menus最新数据的方法
  const getMenus = () => checkedKeys;
  useImperativeHandle(ref, () => {
    return {
      getMenus,
    };
  });
  return (
    <Modal
      title='设置角色权限'
      open={roleAuthVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <FormItem label='角色名称' {...FORM_ITEM_LAYOUT_ONE_IN_FIVE}>
        {
          <Input disabled value={selectedRole.name} />
        }
      </FormItem>
      <Tree
        checkable
        defaultExpandAll
        checkedKeys={checkedKeys}
        onCheck={handleSelected}
      >
        <TreeNode title='平台权限' key='all'>
          {getTreeNode(routers)}
        </TreeNode>
      </Tree>
    </Modal>
  );
});

export default EditRoleAuth;
