module.exports.list =  function list(req, res) {
    return res.json([vehilces]);
}

module.exports.show =  function show(req, res) {
    return res.json(vehicles.find(user => user._id == request.params.id));
}

module.exports.create =  function create(req, res) {
    const newVehicle = request.body;
    comments.push(newVehicle);
    return res.json(newVehicle);
}

module.exports.update =  function update(req, res) {
    return response.json({theId: request.params.id});
}

module.exports.remove =  function remove(req, res) {
    return response.json({});
}   