import express from "express";
import contacts from "../contacts";
import {list, show, create} from "../controllers/ContactsController";

const router = express.Router();

router.get("/contacts", list);

router.get("/contacts/:id", show);

router.post("/contacts", create);

export default router;