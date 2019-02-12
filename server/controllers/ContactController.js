const Contact = require("../models/ContactModel");

exports.list = function list(request, response) {
  Contact.find(function (err, contacts) {
    if (err) return console.error(err)        
    return response.json(contacts)
  })}
exports.show = function show(request, response) {
  Contact.findById(request.params.id,function (err, contacts) {
    if (err) return console.error(err)        
    return response.json(contacts)
  })}
exports.create = function create(request, response) {
  const tempBody = request.body
  const newContact = new Contact({
    name: tempBody.name,
    occupation: tempBody.occupation,
    avatar: tempBody.avatar
  });
  newContact.save(function (err, contacts) {
    if (err) return console.error(err)        
    return response.json(contacts)
  })
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}