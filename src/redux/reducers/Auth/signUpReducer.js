import * as actTypes from "../../constants/Auth";

let initialState = {
  loadingSignUp: false,
  errorSignUp: null,
  signUpData: {},
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.POST_SIGNUP_REQUEST:
      state.loadingSignUp = true;
      state.errorSignUp = null;
      state.signUpData = {};
      return { ...state };
    case actTypes.POST_SIGNUP_SUCCESS:
      state.loadingSignUp = false;
      state.errorSignUp = null;
      state.signUpData = action.data;
      return { ...state };
    case actTypes.POST_SIGNUP_FAILED:
      state.loadingSignUp = false;
      state.errorSignUp = action.err;
      state.signUpData = {};
      return { ...state };
    default:
      return { ...state };
  }
};

export default SignUpReducer;
