const contacts = require("../contacts");

let contactsIdCount = contacts.length;

function list(req, res) {
  res.json(contacts);
}

function show(req, res) {
  const contact = contacts.find(c => {
    return c._id === Number(req.params.id);
  });
  res.json(contact);
}

function create(req, res) {
  contactsIdCount++;
  contacts.push({ ...req.body, _id: contactsIdCount });
  res.json(contacts[contacts.length - 1]);
}

function update(req, res) {
  const id = contacts.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  const current = contacts[id];

  contacts[id] = { current, ...req.body };
  res.json(contacts[id]);
}

function remove(req, res) {
  const id = contacts.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  contacts.slice(id, 1);
  res.send("deleted");
}

module.exports = {
  list,
  show,
  create,
  update,
  remove
};
