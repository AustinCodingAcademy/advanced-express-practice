import express from "express";
import ContactController from "../controllers/ContactController";

const router = express.Router();

router.get("/contacts", ContactController.list);

router.get("/contacts/:id", ContactController.show);

router.post("/contacts", ContactController.create);

export default router;
