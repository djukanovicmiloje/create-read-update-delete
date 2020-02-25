import User from "../entities/user";

const accessToken = sessionStorage.getItem("accessToken");
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V",
  Authorization: "Bearer " + accessToken
};

const fetchUsers = () => {
  const URL = "https://crud-api.hypetech.xyz/v1/users";
  return fetch(URL, {
    method: "GET",
    headers: headers
  })
    .then(res => res.json())
    .then(data =>
      data.map(
        userData =>
          new User(
            userData.name.first,
            userData.name.last,
            userData.id,
            userData.email,
            userData.createdAt
          )
      )
    );
};

export default fetchUsers;

//ovde je sve ok
