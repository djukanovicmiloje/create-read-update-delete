import { setLoginError, setLoginPending, setLoginSuccess } from "./creators";

import { login } from "../../services/httpServise";
import storeAccessToken from "../../services/storeAccessToken";

export const loginDispatcher = loginData => dispatch => {
  dispatch(setLoginPending(true));
  dispatch(setLoginSuccess(false));
  dispatch(setLoginError(null));

  login(loginData)
    .then(data => {
      dispatch(setLoginPending(false));
      dispatch(setLoginSuccess(true));
      if (data.accessToken) {
        storeAccessToken(data.accessToken);
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(data));
      }
    })
    .catch(error => {
      dispatch(setLoginPending(false));
      dispatch(setLoginError(error));
    });
};

export default loginDispatcher;
