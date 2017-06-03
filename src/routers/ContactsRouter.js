import express from "express";
import ContactModel from "../models/ContactModel";

const router = express.Router();
const contactsPath = "/contacts";

/*
import express from "express";
import CommentModel from "../models/CommentModel";

const router = express.Router();
const commentsPath = "/comments";
*/

router.get(contactsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ContactModel.findById(query)
    .then((data) => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

router.get(contactsPath, (request, response, next) => {
  ContactModel.find({}).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

router.post(contactsPath, (request, response, next) => {
  const addedContact = new ContactModel(request.body);

  addedContact.save()
    .then(() => {
      return response.json(addedContact);
    })
    .catch((err) => {
      return next(err);
    });
});

router.delete(contactsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ContactModel.findByIdAndRemove(query).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

router.put(contactsPath + "/:id", (request, response, next) => {
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
});

export default router;
