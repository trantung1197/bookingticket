import * as actTypes from "../../constants/Auth";

let initialState = {
  loadingLogin: false,
  errorLogin: null,
  userLogin: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.POST_LOGIN_REQUEST:
      state.loadingLogin = true;
      state.errorLogin = null;
      state.userLogin = {};
      return { ...state };
    case actTypes.POST_LOGIN_SUCCESS:
      state.loadingLogin = false;
      state.errorLogin = null;
      state.userLogin = action.data;
      return { ...state };
    case actTypes.POST_LOGIN_FAILED:
      state.loadingLogin = false;
      state.errorLogin = action.err;
      state.userLogin = {};
      return { ...state };
    default:
      return { ...state };
  }
};

export default LoginReducer;
