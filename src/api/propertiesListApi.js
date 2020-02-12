import { handleResponse, handleError } from "./apiUtils";
import { SERVER_URL } from '../http/http'
const baseUrl = SERVER_URL + "/properties";

export function getProperties() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
