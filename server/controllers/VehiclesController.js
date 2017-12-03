import vehicles from "../vehicles";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function listVehicle(request, response) {
  return response.json(vehicles);
}

/*
export function showVehicle(request, response) {
  const vehicleId = request.params.id;
  const thisVehicle = vehicles.find(veh => veh.id == vehicleId) || {};
  return response.json(thisVehicle);
}
*/

export function showVehicle(request, response) {
  const vehicleId = vehicles.find(v => {
    return String(v._id) === request.params.id;
  });

  return response.json(vehicleId);
}

export function createVehicle(request, response) {
  vehicles.push(request.body);
  // alert("Success! Your new vehicle was saved.")
  return response.json(vehicles);
}

// FUNCTIONS BELOW NOT UPDATED
export function updateVehicle(request, response) {
  return response.json({theId: request.params.id});
}

export function removeVehicle(request, response) {
  return response.json(vehicles);
}

// Alternate 'show' functions

/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const vehicleId = request.params.id;
 // use this id to get from a database
  vehicles.findById(vehicleId);
}

export function show(request, response) {
  const vehicleId = request.params.id;
 // use this id to get from a database
  const thisVehicle = vehicles.findById(vehicleId);
  response.json(thisVehicle);
}
*/
