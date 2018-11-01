let contacts = require("../contacts");

module.exports.list =  function list(request, response) {
    return response.send(contacts);
}

module.exports.show =  function show(request, response) {
    const contact = contacts.find(contacts => contacts._id == request.params.id);
    response.json(contact);
    return response.json({id: request.params.id});
}
   
module.exports.create =  function create(req,res,next){
    contacts.push(req.body);
    contacts[contacts.length-1]._id = contacts[contacts.length-2]._id + 1;
    return res.json(contacts[contacts.length-1]);
}
   
module.exports.update =  function update(req,res,next){
    const index = contacts.findIndex(contacts => contacts._id == req.params.id);
    contacts[index].name = "Zack"
    res.json(contacts);
    return res.json(contacts[index]);
}
   
module.exports.remove =  function remove(req,res,next){
    const index = contacts.findIndex(contacts => contacts._id == req.params.id);
    contacts[index].active = false;
    return res.json("deleted");
}