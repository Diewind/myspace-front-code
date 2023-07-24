/**
 * User - 用户管理
 * @date: 2021-2-23 20:21:33
 * @author: diewind
 * @version: 1.0.0
 */
import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Table,
  Popconfirm,
  message,
  notification,
} from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import { QuestionCircleOutlined } from '@ant-design/icons';
import memoize from "memoize-one";

import LinkButton from '@pages/components/LinkButton/index';
import { fetchUser, deleteUser, updateUser, saveUser } from '@services/userService';
import { PAGE_SIZE } from '@utils/constants';

import EditUser from './EditUser';

export interface editUserProps {
  roles: Array<[]>,
  user: Object,
  editUserVisible: boolean,
  saveLoading: boolean,
  onOk: () => void,
  onCancel: () => void,
  onRef: () => void,
}

const User: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [saveLoading, setSaveLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
  });
  const [ editUserVisible, setEditUserVisible ] = useState(false);
  

  const queryUser = () => {
    fetchUser().then((res : any) => {
      // setUsers(user);
      // setRoles(role);
      if(res.data){
        setUsers(res.data.data.user);
        // setRoles(res.data.roles);
      }
    });
  };

  useEffect(() => {
    queryUser();
  },[]);

  // 根据role的数组，生成包含所有角色名的对象(属性名用角色id值)
  const initRoleNames = memoize((roles) => {
    const roleNames = roles.length && roles.reduce((pre:any, role: any) => {
      pre[role.id] = role.name;
      return pre;
    }, {});
    // 保存
    return roleNames;
  });

  const handleEditUser = (user:any):void => {
    setSelectedUser(user);
    editUserFormRef.setFieldsValue(user);
    setEditUserVisible(true);
  };

  const handleDeleteUser = async (user:any):Promise<void> => {
    await deleteUser(user.id, user.name);
    await queryUser();
  };

  const roleNames = initRoleNames(roles);

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '电话',
      dataIndex: 'mobile'
    },
    {
      title: '注册时间',
      dataIndex: 'createTime'
    },
    {
      title: '所属角色',
      dataIndex: 'roleId',
      render: (roleId: string) => roleNames[roleId]
    },
    {
      title: '操作',
      render: (user: any) => (<span>
        <LinkButton onClick={() => handleEditUser(user)}>修改</LinkButton>
        <Popconfirm
          title="确定删除吗？"
          icon={
            <QuestionCircleOutlined
              style={{ color: 'red' }}
            />
          }
          onConfirm={() => handleDeleteUser(user)}
        >
          <LinkButton type='danger-button'>删除</LinkButton>
        </Popconfirm>
      </span>)
    }
  ];

  const title = <Button type='primary' onClick={ () => setEditUserVisible(true) }>创建用户</Button>;

  let editUserFormRef: FormInstance;

  const bindEditUserRef:any = (form: FormInstance):void => {
    editUserFormRef = form;
  };

  const handleEditUserOk = ():void => {
    editUserFormRef.validateFields()
    .then(async (values: any) => {
      let param: any = {
        id: '',
      };
      let result:any;
      setSaveLoading(true);
      // 如果是更新，需要user中有id
      if(Object.keys(selectedUser).length > 0){
        param.id = selectedUser.id;
        const params = {
          ...values,
          ...param,
        }
        result = await saveUser(params);
      }else{
        result = await saveUser(values);
      }
      const { code, message } = result.data;
      if (code === 200) {
        notification.success({
          message: code,
          description: message,
          placement: 'bottomRight',
        });
        editUserFormRef.resetFields();
        setSaveLoading(false);
        setEditUserVisible(false);
        queryUser();
      } else {
        notification.error({
          message: code,
          description: message,
          placement: 'bottomRight',
        });
        setSaveLoading(false);
      }

    });
  };

  const handleEditUserCancel = ():void => {
    editUserFormRef.resetFields();
    setEditUserVisible(false);
  };

  const tableProps: object = {
    rowKey: 'id',
    bordered: true,
    columns,
    dataSource: users,
    loading: false,
    pagination: {
      defaultPageSize: PAGE_SIZE
    },
    // size: 'small',
  };

  const editUserProps: editUserProps = {
    roles,
    user: selectedUser,
    editUserVisible,
    onOk: handleEditUserOk,
    onCancel: handleEditUserCancel,
    onRef: bindEditUserRef,
    saveLoading,
  };

  return (
    <Card title={title}>
      <Table
        {...tableProps}
      />
      <EditUser
        {...editUserProps}
      />
    </Card>
  );
}

export default User;
