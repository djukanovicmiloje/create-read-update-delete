const storeAccessToken = (accessToken) => {
	sessionStorage.setItem('accessToken', accessToken);
};

export default storeAccessToken;
