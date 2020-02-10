import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/property-sell";

export function saveProperty(property) {
    return fetch(baseUrl + (property.id || ""), {
      method: property.id ? "PUT" : "POST", // POST for create, PUT to update.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(property)
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function deleteProperty(propertyId) {
    return fetch(baseUrl + propertyId, { method: "DELETE" })
      .then(handleResponse)
      .catch(handleError);
  }