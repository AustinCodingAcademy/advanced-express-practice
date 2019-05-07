let contacts = require('../contacts');

exports.list =(req, response)=> {
    return response.json(contacts);
}

exports.show =(request, response)=> {
    let id = Number(request.params.id);
    let contact = contacts.find( element => element._id === id );
    return response.json(contact);
}

exports.create =(request, response)=> {
    let newContact = request.body;
    newContact._id = contacts[contacts.length - 1]._id + 1;
    contacts.push(newContact);
    return response.json(contacts);
}

exports.update =(request, response)=> {
    return response.json({theId: request.params.id});
}

exports.remove =(response)=> {
    return response.json({});
}