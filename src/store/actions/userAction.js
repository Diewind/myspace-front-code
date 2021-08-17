import {
  userType
} from '../actionTypes/index';
import { reqUsers, reqAddUser, reqDeleteUser, reqUpdateUser } from '../../services/index';

class UserAction {

  // 添加/修改用户
  updateUser = (userInfo) => (dispatch) => {
    if (userInfo.hasUserId) {
      return reqUpdateUser(userInfo).then(
        (res) => {
          if (res.status === 0) {
            dispatch({
              type: userType['UPDATE_USER_SUCCESS'],
              msg: res.msg
            });
          } else {
            dispatch({
              type: userType['UPDATE_USER_ERROR'],
              msg: res.msg
            });
          }
        },
        (err) => dispatch({
          type: userType['UPDATE_USER_ERROR'],
          msg: err.msg
        })
      );
    }
    return reqAddUser(userInfo).then(
      (res) => {
        if (res.status === 0) {
          dispatch({
            type: userType['UPDATE_USER_SUCCESS'],
            msg: res.msg
          });
        } else {
          dispatch({
            type: userType['UPDATE_USER_ERROR'],
            msg: res.msg
          });
        }
      },
      (err) => dispatch({
        type: userType['UPDATE_USER_ERROR'],
        msg: err.msg
      })
    );


  }

  // 获取用户列表
  getUser = () => (dispatch) => reqUsers().then(
    (res) => {
      if (res.status === 0) {
        dispatch({
          type: userType['GET_USER_SUCCESS'],
          data: res.data,
          msg: res.msg
        });
      } else {
        dispatch({
          type: userType['GET_USER_ERROR'],
          msg: res.msg
        });
      }
    },
    (err) => dispatch({
      type: userType['GET_USER_ERROR'],
      msg: err.msg
    })
  )

  // 删除用户
  delUser = (userid) => (dispatch) => reqDeleteUser(userid).then(
    (res) => {
      if (res.status === 0) {
        dispatch({
          type: userType['DEL_USER_SUCCESS'],
          msg: res.msg
        });
      } else {
        dispatch({
          type: userType['DEL_USER_ERROR'],
          msg: res.msg
        });
      }
    },
    (err) => dispatch({
      type: userType['DEL_USER_ERROR'],
      msg: err.msg
    })
  )

}

export default new UserAction();
