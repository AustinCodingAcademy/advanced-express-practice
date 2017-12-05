//import contacts from "../contacts";
import ContactModel from "../models/Contact";

export function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    ContactModel.find({}).exec()
    .then(contacts => {
        return response.json(contacts);
    });
}
export function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ContactModel.findById(request.params.id).exec()
    .then(contact => {
      return response.json(contact);
    });
}
export function create(request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newContact = new ContactModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    });
    newContact.save()
    .then(contact => {
        return response.json(contact);
    });
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}