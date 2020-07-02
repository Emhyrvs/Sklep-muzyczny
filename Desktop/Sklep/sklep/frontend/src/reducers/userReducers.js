import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGIN_REQUEST, USER_SIGIN_SUCCESS, USER_SIGIN_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL,USER_LOGOUT} from "../constants/userConstants";
function userUpdateReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
        case USER_LOGOUT:
          return {};
        default: return state;
      }
     
  }
    function userSiginReducer(state = {}, action) {
      switch (action.type) {
        case USER_SIGIN_REQUEST:
          return { loading: true };
        case USER_SIGIN_SUCCESS:
          return { loading: false, userInfo: action.payload };
        case USER_SIGIN_FAIL:
          return { loading: false, error: action.payload };
       
        default: return state;
      }
      
  }
  
export { 
    userSigninReducer,userSiginReducer,userUpdateReducer
}