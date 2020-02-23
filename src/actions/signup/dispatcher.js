import { signUp } from '../../services/httpServise';
import storeAccessToken from '../../services/storeAccessToken';
import { setSignUpError, setSignUpPending, setSignUpSuccess } from './creators';

const signUpDispatcher = signUpData => dispatch => {
	dispatch(setSignUpPending(true));
	signUp(signUpData)
		.then(data => {
			dispatch(setSignUpPending(false));
			if (data.accessToken) {
				console.log(data);
				storeAccessToken(data.accessToken);
				dispatch(setSignUpSuccess(true));
			} else {
				dispatch(setSignUpError(data));
			}
		})
		.catch(error => {
			dispatch(setSignUpError(error));
			dispatch(setSignUpPending(false));
		});
};

export default signUpDispatcher;
