import { handleResponse, handleError } from "./apiUtils";
import { SERVER_URL } from '../http/http'
const baseUrl = SERVER_URL + "/settings";

// export function getUser() {
//   return fetch(baseUrl)
//     .then(handleResponse)
//     .catch(handleError);
// }

export function saveUser(user) {
  return console.log("HTTPPOST", user, JSON.stringify(user)) || fetch(baseUrl + (user.id || ""), {
    method: user.id ? "PUT" : "POST", // POST for create, PUT to update.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({user})
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(userId) {
  return fetch(baseUrl + userId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

