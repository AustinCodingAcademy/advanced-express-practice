const vehicles = require("../vehicles")

module.exports.list = ((req,res)=>res.json(vehicles))

module.exports.show = ((req, res)=>res.json(vehicles.find((item)=>item._id==req.params.id)))

module.exports.create = ((req, res)=>{
  const body = req.body
  vehicles.push(body)
  res.json(body)
})