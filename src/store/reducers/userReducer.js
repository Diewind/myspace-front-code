import { message } from 'antd';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUser,
} from '../../services/userService'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [], // 用户列表
    roles: [], // 所有角色列表
    loading: true, // 加载状态
  },
  reducers: {
    // updateUser(state, action){
    //   switch (action.type) {
    //   case userType.UPDATE_USER_SUCCESS:
    //     return message.success(action.msg);
    //   case userType.UPDATE_USER_ERROR:
    //     return message.error(action.msg);
    //   default:
    //     return state;
    //   }
    // },
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    getUser: state => {
      const user = fetchUser();
      console.log(user);
      state.users.push({
        name: '1'
      });
      // console.log('action',action,userSaga);
      // switch (action.type) {
      //   case 'user/getUser':
      //     const data = userSaga();
      //     console.log('dddd',data);
      //     return {
      //       ...{
      //         users: action.data.users,
      //         roles: action.data.roles,
      //         loading: false
      //       }
      //     };
      // case userType.GET_USER_SUCCESS:
      //   message.success(action.msg);
      //   return {
      //     ...state, ...{
      //       users: action.data.users,
      //       roles: action.data.roles,
      //       loading: false
      //     }
      //   };
      // case userType.GET_USER_ERROR:
      //   message.error(action.msg);
      //   return {
      //     ...state, ...{
      //       users: [],
      //       roles: [],
      //       loading: false
      //     }
      //   };
      // default:
      //   return {
      //     ...state, ...{
      //       users: [],
      //       roles: [],
      //       loading: true
      //     }
      //   };
      // }
    },
    // delUser(state, action){
    //   switch (action.type) {
    //   case userType.DEL_USER_SUCCESS:
    //     return message.success(action.msg);
    //   case userType.DEL_USER_ERROR:
    //     return message.error(action.msg);
    //   default:
    //     return state;
    //   }
    // },
    // updateState(state, { payload }) {
    //   return {
    //     ...state,
    //     ...payload,
    //   };
    // },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, getUser, delUser, setUser } = userSlice.actions

export const selectUser = state => state.user;


export const getUserAsync = (state) => dispatch => {
  const res = fetchUser();
  // if(1){
    // dispatch(setUser({
    //   name:2
    // }));
  // }else{
  //   dispatch(setUser({
  //     name:22
  //   }));
  // }
};

export default userSlice.reducer;
