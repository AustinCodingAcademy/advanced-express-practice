import {
  CONTACT_LOADED_DONE,
  VEHICLE_LOADED_DONE,
  COMMENT_LOAD_DONE,
  PRODUCT_LOAD_DONE
} from "../actions";

import {combineReducers} from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

function comment(state = {}, action) {
  if (action.type === COMMENT_LOAD_DONE) {
    console.log("comment reducers is working", action.value);
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

function product(state = {}, action) {
  if (action.type === PRODUCT_LOAD_DONE) {
    console.log("product reducers is working", action.value);
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
  if (action.type === VEHICLE_LOADED_DONE) {
    console.log("vehicle reducers is working", action.value);
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
  if (action.type === CONTACT_LOADED_DONE) {
    console.log("contact reducers is working", action.value);
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,products,vehicles,contacts, comment, product, vehicle, contact
});
export default rootReducer;
