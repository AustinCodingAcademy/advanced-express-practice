let contacts = require("../contacts");

module.exports.list =  function list(request, response) {
  return response.json(contacts);
 }
 module.exports.show =  function show(request, response) {
    
  response.json(contacts.find(user => user._id == request.params.id));

 }

 module.exports.create =  function create(request, response) {
  const newContact = request.body;
  contacts.push(newContact);
  
  return response.json(newContact);
 }
 
 