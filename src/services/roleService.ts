import ajax from './ajax';
import cityobj from './city';
const adminUrl = '/admin/';

// 获取所有角色的列表
const reqRoles = <Promise>() => ajax(`${adminUrl}role/rolelist`);
// 添加
const reqAddRole = <Promise>(roleName: object) => ajax(`${adminUrl}role/add`, { roleName }, 'POST');
// 更新
const reqUpdateRole = <Promise>(role: object) => ajax(`${adminUrl}role/update`, role, 'POST');
// 删除
const reqDeleteRole = <Promise>(id: string) => ajax(`${adminUrl}role/delete`, { id }, 'POST');

// 获取所有用户的列表
const reqUsers = <Promise>() => ajax(`${adminUrl}user/userlist`);
// 添加
const reqAddUser = <Promise>(user: object) => ajax(`${adminUrl}user/add`, user, 'POST');
// 更新
const reqUpdateUser = <Promise>(user: object) => ajax(`${adminUrl}user/update`, user, 'POST');
// 删除
const reqDeleteUser = <Promise>(id: object) => ajax(`${adminUrl}user/delete`, { id }, 'POST');

export {
  reqRoles,
  reqAddRole,
  reqUpdateRole,
  reqDeleteRole,
  reqUsers,
  reqAddUser,
  reqUpdateUser,
  reqDeleteUser,
}
