module.exports.list =  function list(req, res) {
    return res.json([comments]);
}

module.exports.show =  function show(req, res) {
    return res.json(comments.find(user => user._id == request.params.id));
}

module.exports.create =  function create(req, res) {
    const newComment = request.body;
    comments.push(newComment);
    return res.json(newComment);
}

module.exports.update =  function update(req, res) {
    return res.json({theId: request.params.id});
}

module.exports.remove =  function remove(req, res) {
    return res.json({});
}   