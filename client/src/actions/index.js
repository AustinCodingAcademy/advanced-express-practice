export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
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

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
    .then( (response) => {
      //console.log("hello loadvehicles");
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
export function loadComments() {
  return function (dispatch) {
    fetch("/comments",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
    .then( (response) => {
      //console.log("hello loadcomments");
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
export function loadProducts() {
  return function (dispatch) {
    fetch("/products",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
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
export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(v) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(v)
    }).then(() => dispatch(loadComments()));
  };
}
/////////////////////////////////////////////////////////////////////////

export function getProduct(id) {
  return function (dispatch) {
    fetch("/products/"+id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"}
    })
    .then( (response) => {
      return response.json();
    }).then((p) => dispatch(getProductDone(p)));
  };
}
function getProductDone(product) {
  return {
    type: "GET_PRODUCT_DONE",
    value: product
  };
}

export function getVehicle(id) {
  return function (dispatch) {
    fetch("/vehicles/"+id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"}
    })
    .then( (response) => {
      console.log("getVehicle (singular)");
      return response.json();
    }).then((v) => dispatch(getVehicleDone(v)));
  };
}
function getVehicleDone(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}

export function getContact(id) {
  return function (dispatch) {
    console.log("getContact working");
    fetch("/contacts/"+id, {
      headers: {
        "Content-Type": "application/json"}
    })
    .then( (response) => {
      console.log("getContact response", response);
      return response.json();
    }).then(function(c){
      console.log("getContact get c:",c);
      dispatch(getContactDone(c));
    });
  };
}
function getContactDone(contact) {
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  };
}

export function getComment(id) {
  return function (dispatch) {
    console.log("getComment working");
    fetch("/comments/"+id, {
      headers: {
        "Content-Type": "application/json"}
    })
    .then( (response) => {
      return response.json();
    }).then(function(c){
      console.log("getComment get c:",c);
      dispatch(getCommentDone(c));
    });
  };
}
function getCommentDone(comment) {
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  };
}
/*
export function getVehicle(id) {
  return function (dispatch) {
    fetch("/vehicles/"+id, {
      method: "GET", //unsure if this is the right method to have here
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(id)
    }).then(() => dispatch(getVehicleDone()));
  };
}
function getVehicleDone(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}

export function getComment(id) {
  return function (dispatch) {
    fetch("/comments/"+id, {
      method: "GET", //unsure if this is the right method to have here
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(id)
    }).then(() => dispatch(getCommentDone()));
  };
}
function getCommentDone(comment) {
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  };
}

export function getContact(id) {
  return function (dispatch) {
    fetch("/contacts/"+id, {
      method: "GET", //unsure if this is the right method to have here
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(id)
    }).then(() => dispatch(getContactDone()));
  };
}
function getContactDone(contact) {
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  };
}
*/
