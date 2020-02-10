import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/user/";

export function getUser() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
