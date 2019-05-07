let vehicles = require("../vehicles.js")

exports.list =  function list(request, response) {
    return response.json(vehicles);
}
exports.show = function show(request, response) {
    let vehicleId =  Number(request.params.id)
    vehicles.find((aVehicle) => {
        if (aVehicle._id === vehicleId) {
            return response.json(aVehicle)
        }
    })
}
exports.create =  function create(request, response) {
    oldId = vehicles[vehicles.length - 1]._id
    let body  = request.body
    body._id = oldId + 1
    vehicles.push(body)
    return response.json(body);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
