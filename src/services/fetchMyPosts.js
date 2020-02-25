import readAccessToken from "./readAccessToken";
import jwtDecode from "jwt-decode";

const accessToken = readAccessToken();
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V",
  Authorization: "Bearer " + accessToken
};

//ovde treba dodati ono sto raspakuje jwt token

//const tokenDecoded = jwtDecode(accessToken);

const userId = 125; //tokenDecoded.id;

const URL = `https://crud-api.hypetech.xyz/v1/posts?userId=${userId}`;

const fetchMyPosts = () =>
  fetch(URL, {
    method: "GET",
    headers: headers
  }).then(res => res.json());

export default fetchMyPosts;
