import Contacts from "../models/contactsModel";

const contactsController = {};

contactsController.list = (request, response, next) => {
  Contacts.find({}).exec()
  .then(Contact => {
    return response.json(Contact);
  })
  .catch(err => {
    return next(err);
  });
};

contactsController.remove = (request, response, next) => {
  Contacts.findByIdAndRemove(request.params.id).exec()
  .then(Contact => {
    return response.json(Contact);
  })
  .catch(err => {
    return next(err);
  });
};

contactsController.create = (request, response, next) => {
  const contacts = new Contacts(request.body);

  contacts.save()
  .then(storedContact => {
    return response.json(storedContact);
  })
  .catch((err) => {
    return next(err);
  });
  return response.json(contacts);
};

contactsController.show = (request, response, next) => {
  Contacts.findById(request.params.id).exec()
  .then(Contact => {
    return response.json(Contact);
  })
  .catch(err => {
    return next(err);
  });
};


export default contactsController;
