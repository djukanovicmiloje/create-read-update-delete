const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQzLCJlbWFpbCI6ImlkZUBnYXMucnMiLCJpYXQiOjE1ODIzMjQ0NjksImV4cCI6MTU4MjM0MjQ2OX0.dCPnegNXbfwtMMzUkp3Hm3SQoknVAvSclJ7VzC1YhpM'; // sessionStorage.getItem("accessToken")[2];
const headers = {
	'Content-Type': 'application/json',
	'x-api-key': 'B1tD3V',
	'Authorization': 'Bearer ' + accessToken,
};

const URL = 'https://crud-api.hypetech.xyz/v1/posts';

const createPost = (postData) =>
	fetch(URL, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(postData),
	}).then((res) => res.json());

export default createPost;
