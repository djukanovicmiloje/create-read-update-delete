const accessToken = sessionStorage.getItem('accessToken');
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	'Authorization': 'Bearer ' + accessToken,
};

const URL = 'https://crud-api.hypetech.xyz/v1/posts';

const fetchPosts = () =>
	fetch(URL, {
		method: 'GET',
		headers: headers,
	}).then((res) => res.json());

export default fetchPosts;
