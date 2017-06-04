export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}
function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function getContact(id){
  return function (dispatch){
    fetch("/contacts/" + id)
    .then((response)=>{
       return response.json();
    }).then((contact)=>{
      dispatch(getContactDone(contact));
    });
  };
}
function getContactDone(contact){
  return{
    type:"GET_CONTACT_DONE",
    value: contact
  };
}

export function loadVehicles() {
  return function (dispatch) {
  dispatch({
     type: "GET_VEHICLE"
    });
    fetch("/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function getVehicle(id){
  return function (dispatch){
    fetch("/vehicles/"+id)
    .then((response)=>{
      console.log(id);
      return response.json()
    }).then((vehicle)=>{
      dispatch(getVehicleDone(vehicle));
    });
  };
}
function getVehicleDone(vehicle){
  console.log("vehicle");
  return{

    type:"GET_VEHICLE_DONE",
    value: vehicle
  };
}

export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

export function getComment(id){
  return function (dispatch){
    fetch("/comments/" + id)
    .then((response)=>{
      return response.json();
    }).then((comment)=>{
      dispatch(getCommentDone(comment));
    });
  };
}
function getCommentDone(comment){
  return{
    type:"GET_COMMENT_DONE",
    value: comment
  };
}

export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}
function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function getProduct(id){
  return function (dispatch){
    fetch("/products/" + id)
    .then((response)=>{
      return response.json();
    }).then((product)=>{
      dispatch(getProductDone(product));
    });
  };
}
function getProductDone(product){
  return{
    type:"GET_PRODUCT_DONE",
    value: product
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(v) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadComments()));
  };
}
