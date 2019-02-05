let contacts = require("../contacts");



exports.list =  function list(request, response) {
       
  return response.json(contacts);
}
exports.show = function show(request, response) {
  return response.json(contacts.find(contact =>{
    return request.params.id == contact[`_id`];
   }));
}
exports.create =  function create(request, response) {
  const contact = request.body;
  contacts.push(contact);
  return response.json(contact);   
}
exports.update =  function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
  return response.json({});
}
