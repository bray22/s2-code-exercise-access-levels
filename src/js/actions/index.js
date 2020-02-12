import { SAVE_LEVEL } from "../constants/action-types";
import { LOAD_ACCESS_LEVELS } from "../constants/action-types";
import { GET_ID } from "../constants/action-types";
import { SET_ID } from "../constants/action-types";

export function saveLevel(payload) {
  return { type: "SAVE_LEVEL", payload }
};
export function setId(payload) {
  return { type: "SET_ID", payload }
};
export function getId(payload) {
  return { type: "GET_ID", payload }
};
export function loadAccessLevels(payload) {
  return { type: "LOAD_ACCESS_LEVELS", payload }
};

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}