let contacts = require('../models/ContactModel');
//get request

exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   exports.show = function show(request, response) {
    let contact = contacts.find(c=> c._id == request.params.id);
    return response.json(contact);
   }

   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = contacts.length +1;
    contacts.push(temp);
    return response.json(temp);
   }
 
