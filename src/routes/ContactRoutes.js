import express from "express";
import { list, show, create } from "../controller/ContactsController";

const router = express.Router();

router.get("/contacts", list);

router.get("/contacts/:id", show);

router.post("/contacts", create);

export default router;
