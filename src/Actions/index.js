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
