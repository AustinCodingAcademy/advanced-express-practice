module.exports.list =  function list(req, res) {
    return res.json([products]);
}

module.exports.show =  function show(req, res) {
    return res.json(products.find(user => user._id == request.params.id));
}

module.exports.create =  function create(req, res) {
    const newProduct = request.body;
    comments.push(newProduct);
    return res.json(newProduct);
}

module.exports.update =  function update(req, res) {
    return response.json({theId: request.params.id});
}

module.exports.remove =  function remove(req, res) {
    return response.json({});
}   