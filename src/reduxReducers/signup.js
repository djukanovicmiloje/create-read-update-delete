import {
  SET_SIGNUP_ERROR,
  SET_SIGNUP_PENDING,
  SET_SIGNUP_SUCCESS
} from "../actions/signup/types";

const signUpReducer = (
  state = {
    isSignUpSuccess: false,
    isSignUpPending: false,
    signUpError: null
  },
  action
) => {
  switch (action.type) {
    case SET_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: action.isSignUpSuccess
      };
    case SET_SIGNUP_PENDING:
      return {
        ...state,
        isSignUpPending: action.isSignUpPending
      };
    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signUpError: action.message
      };
    default:
      return state;
  }
};

export default signUpReducer;
