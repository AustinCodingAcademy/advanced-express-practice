const {getDatabase} = require('../database');
let db = getDatabase;
const collection = db.collection('contacts');

let comments = require('../comments');

exports.list = function list(request, response) {
    let found = collection.find({});
    found.toArray(function(err, contacts) {
      response.json(contacts);
}

exports.create = function(request, response) {
    let newContact = request.body;
    collection.insertMany(newContact);
    response.json(newContact);
}

exports.show = function(request, response) {
    let findContact = request.params.contactId;
    let contact = collection.find({_id: findContact});
    response.json(contact);
}
