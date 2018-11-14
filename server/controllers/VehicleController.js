const VehicleModel = require("../models/VehicleModel");
// .get vehicles
module.exports.list = (req, res) => {
   VehicleModel.find({}).exec().then(vehicles => {
      return res.json(vehicles);
   }) 
   .catch(err => {
      console.log("Error listing vehicles", err);
      return res.json(err);
   })
}

// .get vehicle by ID
module.exports.show = (req, res) => {
   let vehicle = VehicleModel.findById(req.params.id).exec()
   .then(vehicle => {
      return res.json(vehicle);
   });
}

// .post new vehicle
module.exports.create = (req, res) => {
   // instantiating new instance of VehicleModel class
   // using req.body data to fill in values for vehcile schema
   const vehicle = new VehicleModel(req.body);
   // add new vehicle to vehicles array
   vehicle.save();
   // return array with added vehicle
   return res.json(vehicle);
}

// .put vehicle by ID
module.exports.update = (req, res) => {
   VehicleModel.findById(req.params.id).exec().then(vehicle => {
      vehicle.year = "2006",
      vehicle.make = "Toyota",
      vehicle.model = "Camry";
      vehicle.save();
      return res.json(vehicle);
   })
}
// .delete contact by ID
module.exports.remove = (req, res) => {
   VehicleModel.findById(req.params.id).exec().then(vehicle => {
       vehicle.active = false;
       vehicle.save();
       return res.json(vehicle);
   });
}
  