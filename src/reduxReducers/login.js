import {
	SET_LOGIN_ERROR,
	SET_LOGIN_SUCCESS,
	SET_LOGIN_PENDING,
} from '../actions/login/types';

const loginReducer = (
	state = {
		isLoginPending: false,
		isLoginSuccess: false,
		loginError: null,
	},
	action,
) => {
	switch (action.type) {
	case SET_LOGIN_PENDING:
		return {
			...state,
			isLoginPending: action.isLoginPending,
		};
	case SET_LOGIN_SUCCESS:
		return {
			...state,
			isLoginSuccess: action.isLoginSuccess,
		};
	case SET_LOGIN_ERROR:
		return {
			...state,
			loginError: action.message,
		};
	default:
		return state;
	}
};

export default loginReducer;
