import vehicles from "../vehicles";

export function list(request, response) {
  return response.json(vehicles);
}
export function show(request, response) {
  let vehicle = vehicles.find(function(item){
    return (item._id == request.params.id);
  });
  return response.json(vehicle);
}
export function create(request, response) {
  vehicles.push(request.body);
  return response.send("vehicle saved");
}