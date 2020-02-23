import readAccessToken from './readAccessToken';

const accessToken = readAccessToken();
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	Authorization: 'Bearer ' + accessToken
};

const URL = 'https://crud-api.hypetech.xyz/v1/posts';

const createPost = postData =>
	fetch(URL, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(postData)
	}).then(res => res.json());

export default createPost;
