import login from "../services/httpServise";

const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const setLoginSuccess = isLoginSuccess => ({
  type: SET_LOGIN_SUCCESS,
  isLoginSuccess
});

const setLoginPending = isLoginPending => ({
  type: SET_LOGIN_PENDING,
  isLoginPending
});

const setLoginError = error => ({
  type: SET_LOGIN_SUCCESS,
  message: error
});

export const loginHttp = loginData => dispatch => {
  dispatch(setLoginPending(true));
  dispatch(setLoginSuccess(false)); // 1
  dispatch(setLoginError(null)); // 2 i 1 su suvisni je ne menjaju state ovo treba proveriti

  login(loginData)
    .then(data => {
      console.log(data);
      dispatch(setLoginPending(false));
      dispatch(setLoginSuccess(true));
    })
    .catch(error => {
      dispatch(setLoginPending(false));
      dispatch(setLoginError(error));
    });
};

export const reducer = (
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
  },
  action
) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.message
      };
    default:
      return state;
  }
};
