const Vehicle = require("../Server/models/Vehicle_model");

//get all vehicles
exports.list =  function list(req, res) {
   Vehicle.find((e,v)=>{
    return res.json(v);
   });
   }
//get one comment by id   
   exports.show = function show(req, res) {
      Vehicle.findById(req.params.id, (err,v)=>{
         return res.json(v);
     });
   }
   //make a new vehicle
   exports.create =  function create(req, res) {
    let newVehicle = new Vehicle(req.body);
    newVehicle.save(()=>{
       return res.json(newVehicle);
    });
   }