import vehicles from "../vehicles";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function list(request, response) {
  return response.json(vehicles);
}

export function show(request, response) {
  const vehicleId = request.params.id;
  const thisVehicle = vehicles.find(veh => veh.id == vehicleId) || {};
  return response.json(thisVehicle);
}

export function create(request, response) {
  vehicles.push(request.body);
  return response.json(vehicles);
}

// FUNCTIONS BELOW NOT UPDATED
export function update(request, response) {
  return response.json({theId: request.params.id});
}

export function remove(request, response) {
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
