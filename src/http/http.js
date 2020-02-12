//toate endpoints

export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001";
const SIGN_UP = `${SERVER_URL}/signup`;
const PROPERTIES_URL = `${SERVER_URL}/properties`;

// toate metodele http : get, post, put, delete => toate pe baza de fetch
export const get = (url, config = {}) =>
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    ...config
  })
    .then(resp => {
      return resp.json();
    })
    .catch(err => console.log(err));

export const post = (url, data, config = {}) =>
  console.log("HTTPPOST", JSON.stringify(data)) ||
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    ...config
  }).then(resp => {
    return resp.json();
  });

export const put = (url, data, config = {}) =>
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    ...config
  }).then(resp => {
    return resp.json();
  });
