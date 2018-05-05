const contacts = require("../contacts")

module.exports.list = ((req,res)=>res.json(contacts))

module.exports.show = ((req, res)=>res.json(contacts.find((item)=>item._id==req.params.id)))

module.exports.create = ((req, res)=>{
  const body = req.body
  contacts.push(body)
  res.json(body)
})