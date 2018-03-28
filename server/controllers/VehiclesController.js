import VehicleModel from "../models/VehicleModel";

export function list(request, response) {
  VehicleModel.find({}).exec()
 .then(vehicles => {
   return response.json(vehicles);
 });
}

export function create(request, response) {
  const vehicle = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });
  vehicle.save()
  .then(veh => {
    return response.json(veh);
  });
}

export function show(request, response) {
  VehicleModel.findById(request.params.id).exec()
  .then(vehicle => {
    return response.json(vehicle);
  });
}

export function update(request, response) {
  VehicleModel.findById(request.params.vehicleID).exec()
    .then(vehicle => {
      vehicle.year = request.body.year || vehicle.year;
      vehicle.make = request.body.make || vehicle.make;
      vehicle.model = request.body.model || vehicle.model;
      return user.save();
    })
    .then(vehicle => {
      return response.json(vehicle);
    });
}

export function remove(request, response) {
 return response.json({});
}

/*export function show(request, response) {
  let id = request.params.vehicleID; //set id equal to the request in the url
  let vehicle = vehicles.find((v)=>{
    if (v._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(vehicle);
}*/
