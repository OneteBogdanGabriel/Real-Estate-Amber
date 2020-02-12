import { handleResponse, handleError } from "./apiUtils";
import { SERVER_URL } from "../http/http";
const baseUrl = SERVER_URL + "/property-sell";

export function saveProperty(property) {
  return console.log("HTTPPOST", property, JSON.stringify(property)) || fetch(baseUrl + (property.id || ""), {
    method: property.id ? "PUT" : "POST", // POST for create, PUT to update.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...property,
      sold_price: property.price
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProperty(propertyId) {
  return fetch(baseUrl + propertyId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
