import express from "express";
import { list, show, create } from "../controllers/ContactController";
const router = express.Router();

//Getting the data... the entire list
router.get("/contacts", list);


//Getting the data... just one entity
router.get("/contacts/:id", show);


//posting new entries to the database
router.post("/contacts", create);

export default router;
