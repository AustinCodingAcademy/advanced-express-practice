import ContactModel from '../models/ContactModel';

export const list = (request, response) => {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
};
export const show = (request, response) => {
  ContactModel.findById(request.params.id).exec()
  .then(con => {
    return response.json(con);
  });
};
export const create = (request, response) => {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });
  contact.save()
  .then(user => {
    return response.json(user);
  });
};
export const update = (request, response) => {
  return response.json({theId: request.params.id});
};
export const remove = (request, response) => {
  return response.json({});
};
