let Vehicle = require("../models/vehicleModel.js")

exports.list =  function list(req, res) {
   Vehicle.find((err,v)=>{
       if(err){
           console.log(err);
       }
       return res.json(v);
   });
}
exports.show = function show(req, res) {
   Vehicle.findById(req.params.id, (err,v)=>{
       return res.json(v);
   });
}
exports.create =  function create(req, res) {
    const newVehicle = new Vehicle({
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
    })
    newVehicle.save().then(savedVehicle=>{
        console.log(savedVehicle)
    })    
} 
