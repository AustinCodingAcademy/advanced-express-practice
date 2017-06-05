import express from "express";
import contactsController from "../controllers/contactsController";

const contactsRouter = express.Router();

contactsRouter.get("/contacts", contactsController.list);

contactsRouter.post("/contacts", contactsController.create);

contactsRouter.get("/contacts/:id", contactsController.show);

contactsRouter.delete("/contacts/:id", contactsController.remove);

export default contactsRouter;
