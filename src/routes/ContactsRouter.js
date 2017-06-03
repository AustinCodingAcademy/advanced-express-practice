import express from "express";
import Contact from "../models/Contact";

const router = express.Router();

router.get("/contacts", (request, response) => {
  Contact.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

router.get("/contacts/:id", (request, response, next) => {
  Contact.findById(request.params.id).exec()
    .then((user) => {
      console.log(response.json(user));
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/contacts", (request, response) => {
  const contact = new Contact(request.body);

  contact.save()
    .then(storedContact => {
      console.log("Contact was saved");
      return response.json(storedContact);
    })
    .catch(() => {
      console.log("Contact was NOT saved");
      return response.json("Error");
    });
});

export default router;
