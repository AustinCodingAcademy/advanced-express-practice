const products = require("../products")

module.exports.list = ((req,res)=>res.json(products))

module.exports.show = ((req, res)=>res.json(products.find((item)=>item._id==req.params.id)))

module.exports.create = ((req, res)=>{
  const body = req.body
  products.push(body)
  res.json(body)
})