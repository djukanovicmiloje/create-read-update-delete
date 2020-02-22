import {
	SET_SIGNUP_ERROR,
	SET_SIGNUP_PENDING,
	SET_SIGNUP_SUCCESS,
} from './types';

export const setSignUpPending = (isSignUpPending) => ({
	type: SET_SIGNUP_PENDING,
	isSignUpPending,
});

export const setSignUpSuccess = (isSignUpSuccess) => ({
	type: SET_SIGNUP_SUCCESS,
	isSignUpSuccess,
});

export const setSignUpError = (error) => ({
	type: SET_SIGNUP_ERROR,
	error,
});
