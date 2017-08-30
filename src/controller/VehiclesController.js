import vehicles from "../vehicles";

export function list(request, response) {
  return response.json(vehicles);
}

export function show(request, response) {
  const oneVehicle = vehicles.find(vehicle => {
    return vehicle.id === request.params.id;
  });
  return response.json(oneVehicle);
}

export function create(request, response) {
  vehicles.push(request.body);
  return response.json(vehicles);
}
