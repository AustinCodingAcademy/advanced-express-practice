let ContactModel = require("../models/ContactModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    ContactModel.find(function (err, contacts) {
        if (err) return console.error(err);
        return response.json(contacts);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
   ContactsModel.findById(request.params.contactId, function (err, contact){
        if (err) return console.error(err);
        return response.json(contact);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newContact = new ContactModel(request.body);
    newContact.save((err,c) => {
        response.json(c);
    });
}
   
// // put
// exports.update =  function update(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.make = body.make;
//     response.json(vehicle);
// }

// // delete
// exports.remove =  function remove(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.isActive = false;
//     response.send("deleted");
//    }