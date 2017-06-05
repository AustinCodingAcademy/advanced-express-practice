 // Contacts Actions

export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
      .then((response) => {
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


export function getContact(id) {
  return function (dispatch) {
    fetch("/contacts/" + id)
      .then((response) => {
        return response.json();
      })
      .then((contact) => {
        dispatch(getContactDone(contact));
      })
      .catch((err) => {
        return console.log(err);
      });
  };
}
function getContactDone(contact) {
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  };
}

// Vehicles actions

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
      .then((response) => {
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


export function getVehicle(id) {
  return function(dispatch) {
    fetch("/vehicles/" + id)
      .then((response => {
        return response.json();
      })
      .then((vehicle) => {
        dispatch(getVehicleDone(vehicle));
      })
      .catch((err) => {
        return console.log(err);
      });
  };
}
function getVehicleDone(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}
