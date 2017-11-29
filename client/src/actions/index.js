export function getContact(id){
  return function(dispatch){
    fetch('contacts/${id}')
    .then(response => response.json())
    .then(json => dispatch(getContactDone(json)))
    .catch(err => console.log(err))
  }
}

export function getContactDone(contact){
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  };
}

export function loadContacts() {
  console.log("called loadContacts")
  return function (dispatch) {
    fetch("/contacts")
    .then(response => response.json())
    .then(contacts => dispatch(contactsLoaded(contacts)))
    .catch(error => console.log(error))
  }
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function getVehicle(id){
  return function(dispatch){
    fetch("/vehicles/${id}")
    .then(response => response.json())
    .then(json => dispatch(getVehicleDone(json)))
    .catch(err => console.log(err))
  }
}

export function getVehicleDone(vehicle){
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then(response => response.json())
    .then(vehicles => dispatch(vehiclesLoaded(vehicles)))
    .catch(error => console.log(error))
  }
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function getComment(id){
  return function(dispatch){
    fetch('comments/${id}')
    .then(response => response.json())
    .then(json => dispatch(getCommentDone(json)))
    .catch(err => console.log(err))
  };
}

export function getCommentDone(comment){
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  }
}

export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then(response => response.json())
    .then(comments => dispatch(commentsLoaded(comments)))
    .catch(error => console.log(error))
  }
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}
export function getProduct(id){
  return function(dispatch){
    fetch('comments/${id}')
    .then(response => response.json())
    .then(json => dispatch(getProductDone(json)))
    .catch(err => console.log(err))
  }
}

export function getProductDone(product){
  return {
    type: "GET_PRODUCT_DONE",
    value: product
  };
}

export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then(response => response.json())
    .then(products => dispatch(productsLoaded(products)))
    .catch(error => console.log(error)) 
  }
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
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
