let contacts = require('../contacts');
//get request

exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   exports.show = function show(request, response) {
    return response.json(contacts[request.params.id - 1]);
   }
   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = contacts.length +1;
    contacts.push(temp);
    return response.json(temp);
   }
 
