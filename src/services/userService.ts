import ajax from './ajax';

const adminUrl = '/admin/';

// 获取所有用户的列表
export const reqUsers = () => ajax(`${adminUrl}user/userlist`);
// // 添加
export const reqAddUser = (user:object) => ajax(`${adminUrl}user/add`, user, 'POST');
// // 更新
export const reqUpdateUser = (user:object) => ajax(`${adminUrl}user/update`, user, 'POST');
// // 删除
export const reqDeleteUser = (id:string) => ajax(`${adminUrl}user/delete`, { id }, 'POST');

