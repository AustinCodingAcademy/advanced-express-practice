let ContactModel = require('../models/ContactsModels')

module.exports.list = function list(request, response) {
    ContactModel.find({}).exec()
    .then(contact => {
        response.json(contact);
    })
};

module.exports.show = function list(request, response) {
    ContactModels.findbyID(request.params.id).exec()
    .then(contact => {
        response.json(contact);
    })
};

module.exports.create =  function create(request, response){
    const newContact = new ContactModel(request.body);
    newContact.save()
    .then(savedContact => {
        response.json(savedContact);
    })
};