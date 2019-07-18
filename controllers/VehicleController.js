let vehicles = require("../vehicles");

//Display all comments
exports.list = function(req,res){
    res.json(vehicles)
}

//Display one comment
exports.show = function(req,res){
    let vehiclesId = Number(req.params.id);
    let vehicle = vehicles.find(v  => v._id === vehiclesId);
    res.json(vehicle)
}

//handle comment post
exports.create = function(req,res){
    let vehicles = req.body;
    vehicles._id = vehicles.length + 1;
    vehicles.push(vehicles);
    res.json(vehicles); 
};