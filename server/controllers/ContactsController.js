import contacts from "../contacts";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function listContact(request, response) {
  return response.json(contacts);
}

/*
export function showContact(request, response) {
  const contactId = request.params.id;
  const thisContact = contacts.find(con => con.id == contactId) || {};
  return response.json(thisContact);
}
*/

export function showContact(request, response) {
  const contactId = contacts.find(c => {
    return String(c._id) === request.params.id;
  });

  return response.json(contactId);
}

export function createContact(request, response) {
  contacts.push(request.body);
  // alert("Success! Your new contact was saved.")
  return response.json(contacts);
}

// FUNCTIONS BELOW NOT UPDATED
export function updateContact(request, response) {
  return response.json({theId: request.params.id});
}

export function removeContact(request, response) {
  return response.json({});
}

// Alternate 'show' functions

/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const contactId = request.params.id;
 // use this id to get from a database
  contacts.findById(contactId);
}

export function show(request, response) {
  const contactId = request.params.id;
 // use this id to get from a database
  const thisContact = contacts.findById(contactId);
  response.json(thisContact);
}
*/
