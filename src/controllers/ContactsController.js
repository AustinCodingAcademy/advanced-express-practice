import ContactModel from "../models/ContactModel";

const ContactController = {
  create: (request, response, next) => {
    const addedContact = new ContactModel(request.body);

    addedContact.save()
      .then(() => {
        return response.json(addedContact);
      })
      .catch((err) => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    ContactModel.find({}).exec()
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    ContactModel.findById(query)
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    ContactModel.findById(request.params.id).exec()
      .then(data => {
        data.name = request.body.name || data.name;
        data.occupation = request.body.occupation || data.occupation;
        data.avatar = request.body.avatar || data.avatar;
        return data.save();
      })
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  delete: (request, response, next) => {
    const query = request.params.id;

    ContactModel.findByIdAndRemove(query).exec()
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  }
};

export default ContactController;
