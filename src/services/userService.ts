import request from '@utils/request';
import { API_PREFIX } from '@utils/constants';
// const adminPrefix = '/admin/';


/**
 * fetchUser - 获取用户
 * @returns {object} res
 */
export const fetchUser = () => {
  const res = request({
    method: 'get',
    url: `${API_PREFIX}back/user/getListOfUser`,
    // params: { 
    //   pageNum: 1,
    //   pageSize: 10,
    // },
  });
  return res;
};

/**
 * addUser - 添加用户
 * @param {number} user - 用户信息
 * @returns {object} res
 */
export const addUser = ( user:object ) => {
  const res = request({
    method: 'post',
    url: `${API_PREFIX}add`,
    data: user,
  });
  return res;
  // return request(`${API_PREFIX}user/add`, user, 'POST');
}

/**
 * updateUser - 更新用户
 * @param {object} user - 用户信息
 * @returns {object} res
 */
export const updateUser = ( user:object ) => {
  const res = request({
    method: 'post',
    url: `${API_PREFIX}update`,
    data: user,
  });
  return res;
  // return request(`${API_PREFIX}user/update`, user, 'POST');
}

/**
 * deleteUser - 删除用户
 * @param {string} id - 要删除用户的id
 * @returns {object} res
 */
export const deleteUser = ( id:string ) => {
  const res = request({
    method: 'post',
    url: `${API_PREFIX}delete`,
    data: { id },
  });
  return res;
  // return request(`${API_PREFIX}user/delete`, { id }, 'POST');
}
