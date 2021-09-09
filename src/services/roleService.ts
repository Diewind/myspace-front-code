import ajax from './ajax';

const adminPrefix = '/admin/';

/**
 * fetchRole - 获取角色
 * @returns {object} res
 */
export const fetchRole = () => {
  return ajax(`${adminPrefix}role/rolelist`);
};

/**
 * addRole - 添加角色
 * @param {object} roleName - 角色名
 * @returns {object} res
 */
export const addRole = (roleName: object) => {
  return ajax(`${adminPrefix}role/add`, { roleName }, 'POST');
}

/**
 * updateRole - 更新橘色
 * @param {object} role - 角色信息
 * @returns
 */
export const updateRole = (role: object) => {
  return ajax(`${adminPrefix}role/update`, role, 'POST');
}

/**
 * deleteRole - 删除角色
 * @param {string} id - 删除的角色id
 * @returns
 */
export const deleteRole = (id: string) => {
  return ajax(`${adminPrefix}role/delete`, { id }, 'POST');
}
