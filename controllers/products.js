let ProductModel = require("../models/ProductModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    ProductModel.find(function (err, products) {
        if (err) return console.error(err);
        return response.json(products);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    ProductModel.findById(request.params.id, function (err, product){
        if (err) return console.error(err);
        return response.json(product);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newProduct= new ProductModel(request.body);
    newProduct.save((err,p) => {
        response.json(p);
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
   