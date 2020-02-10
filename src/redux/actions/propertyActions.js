import * as types from "./actionTypes";
import * as propertyAPI from "../../api/propertyApi";

export function createProperty(property) {
    return { type: types.CREATE_PROPERTY, property};
}
