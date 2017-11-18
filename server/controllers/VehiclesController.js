const vehicles = require("../vehicles");

function list(request, response) {
    return response.json(vehicles);
}

function show(request, response) {
    let getVehicle = vehicles.find(v => {
            return String(v._id) === request.params.id;
        });
      
    return response.json(getVehicle);
}

function create(request, response) {
    vehicles.push(request.body);
    return response.json(vehicles);
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/