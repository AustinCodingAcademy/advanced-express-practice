import express from "express";
import ContactController from "../controllers/ContactsController";

const router = express.Router();
const contactsPath = "/contacts";

router.post(contactsPath, ContactController.create);

router.get(contactsPath, ContactController.list);

router.get(contactsPath + "/:id", ContactController.listOne);

router.put(contactsPath + "/:id", ContactController.update);

router.delete(contactsPath + "/:id", ContactController.delete);

export default router;
