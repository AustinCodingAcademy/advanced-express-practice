const Contact = require('../models/contact.model');


module.exports.contact_create = function (req, res) {
  let contact = new Contact(
      {
          name: req.body.name,
          occupation: req.body.occupation,
          avatar: req.body.avatar

      }
  );


  contact.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Contact created successfully')
  })
};

module.exports.contact_details = function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
      if (err) return next(err);
      res.send(contact);
  })
};

module.exports.contact_update = function (req, res) {
  Contact.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, contact) {
      if (err) return next(err);
      res.send('Contact udpated.');
  });
};

module.exports.contact_delete = function (req, res) {
  Contact.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
