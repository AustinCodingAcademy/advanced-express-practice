import {combineReducers} from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}
function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
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
function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

function contact(state = {}, action) {
  if (action.type === "GET_CONTACT_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  products,
  vehicles,
  contacts,
  contact
});
export default rootReducer;
