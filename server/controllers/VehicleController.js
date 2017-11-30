import vehicles from "../vehicles.js";
import Vehicle from "../models/vehicles";

// function to get the list of vehicles from database
export const list = (request, response) => {
  Vehicle.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });

  // return response.json(vehicles);
}

// function to display the details of one vehicle
export const show = (request, response) => {

  Vehicle.findById(request.params.id).exec()
  .then(vehicle => {
    return response.json(vehicle);
  });

  // return response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
}

// function to add a vehicle to the database.
export const create = (request, response) => {

  const vehicle = new Vehicle(request.body);
  vehicle.save()
  .then(v => {
    return response.json(v);
  });

  // return response.json(vehicles.push(request.body));
}
