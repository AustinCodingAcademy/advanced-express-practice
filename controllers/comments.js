let CommentModel = require("../models/CommentModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    CommentModel.find(function (err, comments) {
        if (err) return console.error(err);
        return response.json(comments);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    CommentModel.findById(request.params.id, function (err, comment){
        if (err) return console.error(err);
        return response.json(comment);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newComment = new CommentModel(request.body);
    newComment.save((err,com) => {
        response.json(com);
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