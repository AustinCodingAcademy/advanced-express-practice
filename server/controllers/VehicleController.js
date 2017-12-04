import vehicles from "./vehicles";
import Vehicle from "./models/Vehicle";

app.get("/vehicles", (request, response) => {
Vehicle.find({}).exec()
.then(vehicles => {
  return response.json(vehicles);
});
});

export function list(request, response) {
 return response.json(vehicles);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  vehicles.push(request.body);
 return response.json({});
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
