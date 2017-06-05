import { combineReducers } from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}
function comment(state = {}, action) {
  if (action.type === "GET_COMMENT_DONE") {
    console.log(action.value);
    return action.value;
  }
  return state;
}
function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}
function vehicle(state = {}, action) {
  if (action.type === "GET_VEHICLE_DONE") {
    console.log(action.value);
    return action.value;
  }
  return state;
}
