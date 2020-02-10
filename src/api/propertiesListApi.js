import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/";

export function getProperties() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
