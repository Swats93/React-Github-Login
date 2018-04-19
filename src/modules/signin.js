import {login} from '../api/signin';

const initialState = {
  err: null,
  user: null,
  isLoggedIn: false
}

export const loginUser = (data) => {
  return dispatch => {
    login(data).then((user) => {
      console.log("success login print user", user);
      dispatch({
        type: 'login_success',
        payload: user
      })
    }).catch(({err})=>{
      dispatch({
        type: 'login_failed',
        payload: err
      })
    })
  }
}

export default (state=initialState, action) => {
  console.log("action.payload", action.payload);
  switch(action.type) {
    case 'login_success':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
      
    case 'login_failed':
      return {
        ...state,
        isLoggedIn: false,
        err: action.payload
      }

    default: 
      return state;
  }
}