import Contact from "../models/Contact";

const ContactController = {

  list: (request, response) => {
    Contact.find().exec()
      .then(data => {
        return response.json(data);
      })
      .catch(() => {
        return response.json("Error");
      });
  },

  show: (request, response, next) => {
    Contact.findById(request.params.id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },

  create: (request, response) => {
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
  }
};

export default ContactController;
