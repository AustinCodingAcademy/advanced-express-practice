const contacts = require("../contacts");

module.exports.list = function (request, response) {
  return response.json(contacts);
};
module.exports.show = function (request, response) {
  const contact = findContact(request.params.id);
  return response.json(contact);
};
module.exports.create = function (request, response) {
  const newContact = request.body;
  contacts.push(newContact);
  return response.json(contacts[contacts.length - 1]);
};
module.exports.update = function (request, response) {
  const contact = findContact(request.params.id);
  contact.name += " TEST";
  return response.json(contact);
};
module.exports.remove = function (request, response) {
  const contact = findContact(request.params.id);
  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);
  return response.send("deleted");
};

function findContact(id) {
  const contact = contacts.find((u) => {
    return u._id === Number(id);
  });
  return contact;
}
