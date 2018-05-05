const comments = require("../comments")

module.exports.list = ((req,res)=>res.json(comments))

module.exports.show = ((req, res)=>res.json(comments.find((item)=>item._id==req.params.id)))

module.exports.create = ((req, res)=>{
  const body = req.body
  comments.push(body)
  res.json(body)
})

