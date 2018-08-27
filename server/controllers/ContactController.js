const ContactModel = require("../models/Contact");

module.exports.list = function list(req, res, next) {
    ContactModel.find({}).exec()
    .then(c => {
        // do whatever you want here
      return res.json(c);
    });
}
module.exports.show = function show(req, res, next) {
    ContactModel.find({ _id:{ $eq: req.params.id }}).exec()
    .then(c => {
        return res.json(c);
      });
}
module.exports.create = function create(req, res, next) {
    const newContact = new ContactModel(req.body);
    newContact.save()
    .then(message => {
      res.json(message);
    });
}