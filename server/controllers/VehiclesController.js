import vehicles from "../vehicles";

export function list(request, response) {
  return response.json(vehicles);
}

export function show(request, response) {
  let vehicleId = request.params.id;

  function findVehicle(vehicle) {
    return vehicle.id == vehicleId || {};
  }

  return response.json(vehicles.find(findVehicle));
}

export function create(request, response) {
  vehicles.push(request.body);
  return response.json(vehicles);
}
