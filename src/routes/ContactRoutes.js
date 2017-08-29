import express from "express";
import contacts from "../contacts";

const router = express.Router();

router.get("/contacts", (request, response) => {
  return response.json(contacts);
});

router.get("/contacts/:id", (request, response) => {
  const oneContact = contacts.find(contact => {
    return contact.id === request.params.id;
  });
  return response.json(oneContact);
});

router.post("/contacts", (request, response) => {
  contacts.push(request.body);
  return response.json(contacts);
});

export default router;
