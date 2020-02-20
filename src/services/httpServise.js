const headers = {
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V"
};

const url = "https://crud-api.hypetech.xyz/v1/auth/login";

const login = loginData =>
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(loginData)
  }).then(res => res.json());

const signUpUrl = "https://crud-api.hypetech.xyz/v1/auth/register";

export const signUp = signUpData =>
  fetch(signUpUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(signUpData)
  }).then(res => res.json());

export default login;
