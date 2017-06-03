export const CONTACT_LOADED = "CONTACT_LOADED";
export const VEHICLE_LOADED = "VEHICLE_LOADED";

export function loadContacts() {
  return function (dispatch) {
    fetch("http://localhost:3101/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}

export function getContact(contactID) {
  return function (dispatch) {
    fetch("/contacts/" + contactID)
    .then( response => {
      return response.json();
    })
    .then( contact => {
      dispatch(contactLoaded(contact));
    })
    .catch(err => {
      // add next for error handling
      return console.log(err, "contact not loaded");
    });
  };
}

function contactLoaded(contact) {
  return {
    type: CONTACT_LOADED,
    value: contact
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
    fetch("http://localhost:3101/vehicles")
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

export function getVehicle(vehicleID) {
  return function (dispatch) {
    fetch("/vehicles/" + vehicleID)
    .then( response => {
      return response.json();
    })
    .then( vehicle => {
      dispatch(vehicleLoaded(vehicle));
    })
    .catch( err => {
      console.log(err, "vehicle not loaded");
    });
  };
}

function vehicleLoaded(vehicle) {
  return {
    type: "VEHICLE_LOADED",
    value: vehicle
  };
}

/*
export function getContact(contactID) {
  return function (dispatch) {
    fetch("/contacts" + contactID)
    .then( response => {
      return response.json();
    })
    .then( contact => {
      dispatch(contactLoaded(contact));
    })
    .catch(err => {
      // add next for error handling
      return console.log(err);
    });
  };
}

function contactLoaded(contact) {
  return {
    type: CONTACT_LOADED,
    value: contact
  };
}
*/

export function loadComments() {
  return function (dispatch) {
    fetch("http://localhost:3101/comments")
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
export function loadProducts() {
  return function (dispatch) {
    fetch("http://localhost:3101/products")
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
    fetch("http://localhost:3101/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  return function (dispatch) {
    fetch("http://localhost:3101/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("http://localhost:3101/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(v) {
  return function (dispatch) {
    fetch("http://localhost:3101/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadComments()));
  };
}
