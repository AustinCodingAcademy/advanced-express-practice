//const vehicles=require("../vehicles");
const VehicleModel=require("../models/VehicleModel");
//let vehicleCount=vehicles.length;

module.exports.list=(req, res)=>{
    VehicleModel.find().exec().then((vehicle)=>{
        return res.json(vehicle)
    })
}
// module.exports.list=(req,res)=>{
//     return res.json(vehicles)
// }

module.exports.show= (req, res)=>{
    VehicleModel.findById(req.params.id).exec().then((vehicle)=>{
        return res.json(vehicle)
    })
}

module.exports.create=(req,res)=>{
    const v=new VehicleModel({
        year:req.body.year,
        make:req.body.make,
        model:req.body.model
    });
    v.save().then(savedVehicle=>{
        return res.json(savedVehicle)
    })
    // let newVehicle=req.body;
    // vehicles.push(newVehicle);
    // vehicleCount++;
    // newVehicle._id =vehicleCount;
    // return res.json(newVehicle)
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}