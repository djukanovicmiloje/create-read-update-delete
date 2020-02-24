const accessToken = sessionStorage.getItem('accessToken');
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	Authorization: 'Bearer ' + accessToken
};

const fetchComments = () => {
	const URL = 'https://crud-api.hypetech.xyz/v1/comments';
	return fetch(URL, {
		method: 'GET',
		headers: headers
	}).then(res => res.json());
};

export default fetchComments;
