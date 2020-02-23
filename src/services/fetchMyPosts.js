import readAccessToken from './readAccessToken';

const accessToken = readAccessToken();
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	Authorization: 'Bearer ' + accessToken
};

//ovde treba dodati ono sto raspakuje jwt token

import jwtDecode from 'jwt-decode';

//const tokenDecoded = jwtDecode(accessToken);
//const userId = tokenDecoded.id;

const URL = `https://crud-api.hypetech.xyz/v1/posts?userId=146`;

const fetchMyPosts = () =>
	fetch(URL, {
		method: 'GET',
		headers: headers
	}).then(res => res.json());

export default fetchMyPosts;
