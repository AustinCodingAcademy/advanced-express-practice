let ContactModel = require("../models/ContactModel");

module.exports.list =  function list(request, response) {
    ContactModel.find({}).exec().then(contacts => {
        return response.send(contacts);
    }); 
}

module.exports.show =  function show(request, response) {
    ContactModel.findById(request.params.id).exec().then(contact => {
        return response.json(contact);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newcontact= new ContactModel(req.body);
    newcontact.save();
    return response.send(contacts);
}
   
module.exports.update =  function update(req,res,next){
    ContactModel.findById(request.params.id).exec().then(contact => {
        contact.make = "Tom" ;
        contact.model = "Sawyer";
        contact.year = "Painter";
        return contact.save();
    })
    .then(contact => {
        return res.json(contact[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    ContactModel.findById(request.params.id).exec().then(contact => {
        contact[index].active = false;
        return contact.save();
    })
    .then(contact => {
        return res.json(contact[index]);
    });
}