let vehicles = require("./vehicles");

export function list(request, response) {
    return res.json(vehicles)
}
export function show(request, response) {
    let vehID = vehicles.find((item) => { return item._id == req.params.id })
    return res.json(vehID)
}
export function create(request, response) {
    ids.veh++;
    let newV = {
        _id: ids.veh,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
    }
    vehicles.push(newV);
    return res.json(vehicles);
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}
   