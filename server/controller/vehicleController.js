const Vehicle = require('../Models/vehicleModel')

module.exports.list = ((req,res)=>{
  Vehicle.find({}).exec()
  .then(vehicles=>{
    res.json(vehicles)
  })
})

module.exports.show = ((req, res)=>{
  Vehicle.findById({"_id":req.params.id}).exec()
  .then(vehicle=>{
    res.json(vehicle)
  })
})

module.exports.create = ((req, res)=>{
  const newVehicle = new Vehicle({
    year:req.body.year,
    make:req.body.make,
    model:req.body.model
  })

  newVehicle.save()
  .then(savedVehicle=>{
    res.json(savedVehicle)
  })
})