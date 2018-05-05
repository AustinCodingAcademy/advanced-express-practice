module.exports.list =  function list(req, res) {
    return res.json([contacts]);
}

module.exports.show =  function show(req, res) {
    return res.json(contacts.find(user => user._id == req.params.id));
}

module.exports.create =  function create(req, res) {
    const newContact = request.body;
    comments.push(newContact);
    return res.json(newContact);
}

module.exports.update =  function update(req, res) {
    const editContact = request.body
    return res.json(contact);
}

module.exports.remove =  function remove(req, res) {
    return res.josn(contacts.pop(user => user._id == req.params.id))
}   