import {SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from './types';

export const setLoginSuccess = (isLoginSuccess) => ({
	type: SET_LOGIN_SUCCESS,
	isLoginSuccess,
});

export const setLoginPending = (isLoginPending) => ({
	type: SET_LOGIN_PENDING,
	isLoginPending,
});

export const setLoginError = (error) => ({
	type: SET_LOGIN_ERROR,
	message: error,
});
