let vehicles = require("../vehicles");
let idCount = 15;

module.exports.list = function list(req, res, next) {
    return res.json(vehicles)
}
module.exports.show = function show(req, res, next) {
    let vehID = vehicles.find((item) => { return item._id == req.params.id })
    return res.json(vehID)
}
module.exports.create = function create(req, res, next) {
    idCount++;
    let newV = {
        _id: idCount,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
    }
    vehicles.push(newV);
    return res.json(vehicles);
}
module.exports.update = function update(request, response, next) {
    return response.json({theId: request.params.id});
}
module.exports.remove = function remove(request, response, next) {
    return response.json({});
}
   