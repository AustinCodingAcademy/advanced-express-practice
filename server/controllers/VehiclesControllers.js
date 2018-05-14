let VehicleModel = require('../models/VehiclesModels')

module.exports.list = function list(request, response) {
    VehicleModels.find({}).exec()
    .then(vehicle => {
        response.json(vehicle);
    })
};

module.exports.show = function list(request, response) {
    vehicleModel.findbyID(request.params._id).exec()
    .then(vehicle => {
        response.json(vehicle);
    })
};

module.exports.create =  function create(request, response){
    const newVehicle= new vehicleModel(request.body);
    newVehicle.save()
    .then(savedVehicle => {
        response.json(savedVehicle);
    })
};