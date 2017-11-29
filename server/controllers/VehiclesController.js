import vehicles from "../vehicles";


export function list(request, response) {
    return response.json(vehicles);
}

export function show(request, response) {
    return response.json(vehicles.find(u => u._id == request.params.id) || {});
}

export function create(request, response) {
    vehicles.push(request.body);
    return response.send("vehicle saved");
}

export function update(request, response) {
    return response.json(vehicles[0].name = request.params.id);
}
export function remove(request, response) {
    return response.json(vehicles.pop());
}