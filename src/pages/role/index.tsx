/**
 * Role - 角色
 * @date: 2021-2-23 20:21:33
 * @author: diewind
 * @version: 1.0.0
 */
import React, { useState, useEffect, useRef } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Button, Table, message, Popconfirm } from 'antd';
import { FormInstance } from 'antd/lib/form/Form' //获取form表单的interface
import { PAGE_SIZE } from '../../utils/constants';
import { reqRoles, reqAddRole, reqUpdateRole, reqDeleteRole } from '../../services/roleService';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

import EditRole from './EditRole';
import EditRoleAuth from './EditRoleAuth';

const Role: React.FC = () => {
  const [roleList,setRoleList] = useState([]);// 所有角色的列表
  const [selectedRole,setSelectedRole] = useState({
    id: '',
    name: '',
  });
  const [roleVisible, setRoleVisible] = useState(false);
  const [roleAuthVisible,setRoleAuthVisible] = useState(false);
  const column = [
    {
      title: '角色名称',
      dataIndex: 'name'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime'
    },
    {
      title: '授权时间',
      dataIndex: 'authTime'
    },
    {
      title: '授权人',
      dataIndex: 'authorizer'
    },
  ];
  const getRoles = async () => {
    const result = await reqRoles();
    if (result.status === 0) {
      const roles = result.data;
      setRoleList(roles);
    }
  };
  useEffect(() => {
    getRoles();
  },[]);
  let roleFormRef:FormInstance;
  // 删除角色
  const deleteRole = async () => {
    const { id = '' } = selectedRole;
    // 请求更新
    const result = await reqDeleteRole(id);
    if (result.status === 0) {
      message.success('删除角色成功!');
      getRoles();
    } else {
      message.error(result.msg);
    }
  }
  const onRow = (role:any) => ({
    onClick: (event:any) => { // 点击行
      setSelectedRole(role);
    }
  });
  const title =
    <span>
      <Button type='primary' onClick={() => {
        setRoleVisible(true);
      }}>创建角色</Button>
      <Popconfirm
        title='确定要删除吗？'
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        onConfirm={deleteRole}
        placement='bottomLeft'
        disabled={!selectedRole.id}
      >
        <Button danger style={{ marginLeft: 20 }} disabled={!selectedRole.id}>删除角色</Button>
      </Popconfirm>
      <Button type='primary' style={{ marginLeft: 20 }} disabled={!selectedRole.id} onClick={() => {
        setRoleAuthVisible(true);
      }}>设置角色权限</Button>
    </span>;
  const roleRef:any = (form: FormInstance) => {
    roleFormRef = form;
  }
  const handleRoleCancel = () => {
    roleFormRef.resetFields();
    setRoleVisible(false)
  };
  const handleRoleOk = () => {
    roleFormRef.validateFields()
    .then(async (values: any) => {
      const { roleName } = values;
      roleFormRef.resetFields();
      const result = await reqAddRole(roleName);
      const { msg, status } = result;
      if (status === 0) {
        message.success(msg);
        setRoleVisible(false);
        getRoles();
      } else {
        message.error(msg);
      }
    });
  }
  const roleAuthRef:any = useRef(null);
  const handleRoleAuthOk = async() => {
    const menus = roleAuthRef.current.getMenus();
    const params = {
      menus,
      authorizer: memoryUtils.user.username
    };
    // 请求更新
    const result = await reqUpdateRole(params);
    if (result.status === 0) {
      // 如果更新的是自己角色的权限，强制退出
      if (selectedRole.id === memoryUtils.user.role.id) {
        memoryUtils.user = {
          username: '',
          role: {
            id: ''
          }
        };
        storageUtils.removeUser();
        // this.props.history.replace('/login');
        message.info('当前用户角色权限修改了，重新登录!');
      } else {
        message.success('设置角色权限成功!');
        setRoleAuthVisible(false);
        getRoles();
      }
    } else {
      message.error(result.msg);
    }
  };
  const handleRoleAuthCancel = () => setRoleAuthVisible(false);
  const rowSelection:object = {
    type: 'radio',
    selectedRowKeys: [selectedRole.id],
    onSelect: (role: any) => {
      setSelectedRole(role);
    }
  };
  const tableProps = {
    bordered: true,
    columns: column,
    rowKey: 'id',
    dataSource: roleList,
    pagination:{
      defaultPageSize: PAGE_SIZE
    },
    rowSelection,
    onRow,
  };
  const editRoleProps = {
    roleVisible,
    onOk: handleRoleOk,
    onCancel: handleRoleCancel,
    onRef: roleRef,
  }
  const editRoleAuthProps = {
    roleAuthVisible: roleAuthVisible,
    onOk: handleRoleAuthOk,
    onCancel: handleRoleAuthCancel,
    selectedRole: selectedRole,
    ref: roleAuthRef,
  }
  return (
    <Card title={title}>
      <Table
        {...tableProps}
      />
      <EditRole
        {...editRoleProps}
      />
      <EditRoleAuth
        {...editRoleAuthProps}
      />
    </Card>
  );
}

export default Role;
