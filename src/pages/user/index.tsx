/**
 * User - 用户管理
 * @date: 2021-2-23 20:21:33
 * @author: diewind
 * @version: 1.0.0
 */
import React, { useState, useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormInstance } from 'antd/lib/form/Form' //获取form表单的interface

import memoize from "memoize-one";
import {
  Card,
  Button,
  Table,
} from 'antd';

import LinkButton from '@pages/components/link-button/index';

import { reqUsers } from '@services/userService';
import { PAGE_SIZE } from '../../utils/constants';

import EditUser from './EditUser';

const User:React.FC = (props:any) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [ editUserVisible, setEditUserVisible ] = useState(false);
  useEffect(() => {
    reqUsers();
  },[]);
  // 根据role的数组，生成包含所有角色名的对象(属性名用角色id值)
  // const initRoleNames = memoize((roles) => {
  //   const roleNames = roles.length && roles.reduce((pre:any, role: any) => {
  //     pre[role.id] = role.name;
  //     return pre;
  //   }, {});
  //   // 保存
  //   return roleNames;
  // })
  const handleEditUser = (user:any) => {};
  const handleDeleteUser = (user:any) => {};

  // const roleNames = initRoleNames(roles);
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '电话',
      dataIndex: 'phone'
    },
    {
      title: '注册时间',
      dataIndex: 'createTime'
    },
    {
      title: '所属角色',
      dataIndex: 'roleId',
      // render: (roleId) => roleNames[roleId]
    },
    {
      title: '操作',
      render: (user: any) => (<span>
        <LinkButton onClick={() => handleEditUser(user)}>修改</LinkButton>
        <LinkButton type='danger-button' onClick={() => handleDeleteUser(user)}>删除</LinkButton>
      </span>)

    }
  ];

  const title = <Button type='primary' onClick={ () => setEditUserVisible(true) }>创建用户</Button>;

  let editUserFormRef = null;
  const editUserRef:any = (form: FormInstance) => {
    editUserFormRef = form;
  }

  const handleEditUserOk = () => {

  }

  const handleEditUserCancel = () => {
    setEditUserVisible(false);
  }

  const tableProps:object = {
    bordered: true,
    columns,
    // rowKey: 'id',
    dataSource: [],
    loading: false,
    pagination: {
      defaultPageSize: PAGE_SIZE
    },
    size: 'small',
  };

  const editUserProps = {
    roles: [],
    user: {},
    editUserVisible,
    onOk: handleEditUserOk,
    onCancel: handleEditUserCancel,
    onRef: editUserRef,
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

// class User extends Component {

//   state = {
//     isShow: false // 修改/新增用户弹出flag
//   }

//   componentDidMount() {
//     const { getUser } = this.props;
//     getUser();
//   }

//   // 根据role的数组，生成包含所有角色名的对象(属性名用角色id值)
//   initRoleNames = memoize((roles) => {
//     const roleNames = roles.reduce((pre, role) => {
//       pre[role.id] = role.name;
//       return pre;
//     }, {});
//     // 保存
//     return roleNames;
//   })

//   // 显示修改界面
//   showUpdate = (user) => {
//     this.user = user;// 保存user
//     this.setState({
//       isShow: true
//     });
//   }

//   // 添加/更新用户
//   updateUser = () => {
//     const { updateUser } = this.props;
//     // 表单验证
//     this.form.validateFields(async (error, values) => {
//       if (!error) {
//         // Let param = {};
//         this.setState({
//           isShow: false
//         });
//         // 如果是更新，需要user中有id
//         if (this.user) {
//           values.id = this.user.id;
//         }
//         this.form.resetFields();
//         // 判断是否是新增
//         const hasUserId = Boolean(this.user);
//         updateUser({
//           ...values,
//           hasUserId,
//         });
//       }
//     });
//   }

//   // 删除用户
//   deleteUser = (user) => {
//     const { delUser } = this.props;
//     Modal.confirm({
//       title: `确认删除${user.username}吗？`,
//       onOk: () => {
//         delUser(user.id);
//       }
//     });
//   }

//   // 显示添加界面
//   showAdd = () => {
//     this.user = null;// 去除保存的user
//     this.setState({
//       isShow: true
//     });
//   }

//   render() {
//     const { isShow } = this.state;
//     const { users, roles, loading } = this.props;
//     const user = this.user || {};

//     const roleNames = this.initRoleNames(roles);
//     const columns = [
//       {
//         title: '用户名',
//         dataIndex: 'username'
//       },
//       {
//         title: '邮箱',
//         dataIndex: 'email'
//       },
//       {
//         title: '电话',
//         dataIndex: 'phone'
//       },
//       {
//         title: '注册时间',
//         dataIndex: 'createTime'
//       },
//       {
//         title: '所属角色',
//         dataIndex: 'roleId',
//         render: (roleId) => roleNames[roleId]
//       },
//       {
//         title: '操作',
//         render: (user) => <span>
//           <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
//           <LinkButton type='danger-button' onClick={() => this.deleteUser(user)}>删除</LinkButton>
//         </span>

//       }
//     ];

//     const title = <Button type='primary' onClick={this.showAdd}>创建用户</Button>;
//     return (
//       <Card title={title}>
//         <Table
//           bordered
//           columns={columns}
//           rowKey={'id'}
//           dataSource={users}
//           loading={loading}
//           pagination={{
//             defaultPageSize: PAGE_SIZE
//           }}
//           size='small'
//         />
//         <Modal
//           title={user.id ? '修改用户' : '添加用户'}
//           visible={isShow}
//           onOk={this.updateUser}
//           onCancel={() => {
//             this.setState({
//               isShow: false
//             });
//             this.form.resetFields();
//           }}
//         >
//           <EditForm
//             setForm={(form) => {
//               this.form = form;
//             }}
//             roles={roles}
//             user={user}
//           />
//         </Modal>
//       </Card>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     users: state.getUser.users,
//     roles: state.getUser.roles,
//     loading: state.getUser.loading
//   }),
//   (dispatch) => ({
//     getUser: () => {
//       const getUserAction = userAction.getUser();
//       dispatch(getUserAction);
//     },
//     delUser: async (userid) => {
//       const delUserAction = userAction.delUser(userid);
//       const getUserAction = userAction.getUser();
//       await dispatch(delUserAction);
//       await dispatch(getUserAction);
//     },
//     updateUser: async (userInfo) => {
//       const updateUserAction = userAction.updateUser(userInfo);
//       const getUserAction = userAction.getUser();
//       await dispatch(updateUserAction);
//       await dispatch(getUserAction);
//     }
//   })
// )(
//   User
// );
