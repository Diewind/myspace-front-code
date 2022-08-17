import ajax from './ajax';
import { API_PREFIX } from '@utils/constants';
// const adminPrefix = '/admin/';


/**
 * fetchUser - 获取用户
 * @returns {object} res
 */
export const fetchUser = () => {
  return ajax(`${API_PREFIX}user/list`, {}, 'POST');
};

/**
 * addUser - 添加用户
 * @param {number} user - 用户信息
 * @returns {object} res
 */
export const addUser = ( user:object ) => {
  return ajax(`${API_PREFIX}user/add`, user, 'POST');
}

/**
 * updateUser - 更新用户
 * @param {object} user - 用户信息
 * @returns {object} res
 */
export const updateUser = ( user:object ) => {
  return ajax(`${API_PREFIX}user/update`, user, 'POST');
}

/**
 * deleteUser - 删除用户
 * @param {string} id - 要删除用户的id
 * @returns {object} res
 */
export const deleteUser = ( id:string ) => {
  return ajax(`${API_PREFIX}user/delete`, { id }, 'POST');
}
