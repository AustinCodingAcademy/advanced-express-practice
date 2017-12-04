import vehicles from "../vehicles";


export function list(request, response) {
    response.json(vehicles);
  }
export function show(request, response) {
  let id = request.params.id;
  console.log(id);
  let vehicle = vehicles.find(vehicle => vehicle._id == id) || {};
  return response.json(vehicle);
}

  export function create(request, response) {
    comments.push(request.body);
}

export function update(request, response) {
  return response.json(vehicles[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(vehicles.pop());
}