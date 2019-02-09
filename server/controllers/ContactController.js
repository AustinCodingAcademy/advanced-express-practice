var Contact = require("../models/ContactModel");
var numberOfContacts = 0;


function getContacts(done) {
    Contact.find(function(err, contacts) {
        if (err)
            return console.log(err);
        numberOfContacts = contacts.length;
        done(contacts);    
    });
}

function getContactById(id, done) {
    Contact.findById(id, function(err, contact) {
        if (err)
            return err;
        console.log("Here: " + contact);
        done(contact);
    });
}


exports.list = function list(request, response) {
    getContacts((result) => {
        return response.json(result);
    });
}

exports.show = function show(request, response) {
    getContactById(parseInt(request.params.id), (result) =>  {
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = numberOfContacts + 1;
  let tempRecord = new Contact(tempBody);
  tempRecord.save();
  list();
  return response.json(tempRecord);
}
