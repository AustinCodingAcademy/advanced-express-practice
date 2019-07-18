let contacts = require("../contacts");

//Display all comments
exports.list = function(req,res){
    res.json(contacts)
}

//Display one comment
exports.show = function(req,res){
    let contactId = Number(req.params.id);
    let contact = contacts.find(c  => c._id === contactId);
    res.json(contact)
}

//handle comment post
exports.create = function(req,res){
    let contact = req.body;
    contact._id = contacts.length + 1;
    contacts.push(contact);
    res.json(contact); 
};