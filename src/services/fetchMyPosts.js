import readAccessToken from './readAccessToken';

const accessToken = readAccessToken();
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	Authorization: 'Bearer ' + accessToken
};

//ovde treba dodati ono sto raspakuje jwt token

import jwtDecode from 'jwt-decode';

const userId = jwtDecode(accessToken).userId;

const URL = `https://crud-api.hypetech.xyz/v1/posts?userId=145`;

const fetchMyPosts = () =>
	fetch(URL, {
		method: 'GET',
		headers: headers
	}).then(res => res.json());

export default fetchMyPosts;
