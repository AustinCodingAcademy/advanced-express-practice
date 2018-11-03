const comments = require("../comments");
let commentCount = comments.length

module.exports.list =  function list(req, res) {
    return res.json(comments);
   }
module.exports.show =  function show(req, res) {
    let comment = comments.find((c) => c._id == req.params._id);
    return res.json(comment);
   }
module.exports.create =  function create(req, res) {
    let newComment = req.body;
    comments.push(newComment);
    commentCount++;
    newComment._id = commentCount;
    return res.json(newComment);
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   