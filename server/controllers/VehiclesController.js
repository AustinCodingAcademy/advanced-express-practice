//import vehicles from "../vehicles";
import VehicleModel from "../models/Vehicle";

export function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    VehicleModel.find({}).exec()
    .then(vehicles => {
        return response.json(vehicles);
    });
}
export function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    VehicleModel.findById(request.params.id).exec()
    .then(vehicle => {
      return response.json(vehicle);
    });
}
export function create(request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newVehicle = new VehicleModel({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model
    });
    newVehicle.save()
    .then(vehicle => {
        return response.json(vehicle);
    });
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}