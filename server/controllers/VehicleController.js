import vehicles from "../vehicles.js"

export function list(request, response) {
 return response.json(vehicles);
}
export function show(request, response) {
 return response.json(vehicles.find((c)=>c._id==request.params.id));
}
export function create(request, response) {
    let newVehicle = request.body;
    vehicles.push(newVehicle);
    response.json(newVehicle);
}
// export function update(request, response) {
//  return response.json({theId: request.params.id});
// }
// export function remove(request, response) {
//  return response.json({});
// }
