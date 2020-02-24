import { setLoginError, setLoginPending, setLoginSuccess } from './creators';

import { login } from '../../services/httpServise';
import storeAccessToken from '../../services/storeAccessToken';

export const loginDispatcher = loginData => dispatch => {
	dispatch(setLoginPending(true));
	dispatch(setLoginSuccess(false));
	dispatch(setLoginError(null));

	login(loginData)
		.then(data => {
			dispatch(setLoginPending(false));
			if (data.accessToken) {
				storeAccessToken(data.accessToken);
				dispatch(setLoginSuccess(true));
			} else {
				// ovde treba parsirati poruku server
				// u sustini mapirati na dve stvari wrong email i wrong passwordS
				let error;
				if (data.message === 'Passwords do not match.') {
					error = 'Wrong password!';
				} else if (data.message.split(' ')[0] === 'User') {
					error = 'No user with that email!';
				} else if (data.message.split(' ')[0] === 'child') {
					error = 'Invalid email!';
				}

				dispatch(setLoginError(error));
				console.log(data);

				///data.error = 'Unprocessable Entity';
				///data.message = 'User with blabla emainl does not exist';
				// opet entitiy
				// messsage: passwords do not match
			}
		})
		.catch(error => {
			dispatch(setLoginPending(false));

			dispatch(setLoginError('Server error!'));

			// ako ovo prokine onda je ili networkk ili server error
		});
};

export default loginDispatcher;

//setxkbmap -option ctrl:nocaps
