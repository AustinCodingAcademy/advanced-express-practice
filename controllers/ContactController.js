let contacts = require("../contacts.js")

exports.list =  function list(request, response) {
    return response.json(contacts);
}
exports.show = function show(request, response) {
    let contactId =  Number(request.params.id)
    contacts.find((aContact) => {
        if (aContact._id === contactId) {
            return response.json(aContact)
        }
    })
}
exports.create =  function create(request, response) {
    oldId = contacts[contacts.length - 1]._id
    let body  = request.body
    body._id = oldId + 1
    contacts.push(body)
    return response.json(body);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
