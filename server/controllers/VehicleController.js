const vehicles=require("../vehicles");
let vehicleCount=vehicles.length;

module.exports.list=(req,res)=>{
    return res.json(vehicles)
}

module.exports.show= (req, res)=>{
    let vehicle= vehicles.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(vehicle)
}

module.exports.create=(req,res)=>{
    let newVehicle=req.body;
    vehicles.push(newVehicle);
    vehicleCount++;
    newVehicle._id =vehicleCount;
    return res.json(newVehicle)
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}