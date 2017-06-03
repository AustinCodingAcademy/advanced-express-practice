import contacts from "../contacts";
import express from "express";
import {list, show, create} from "../controllers/contactController";

const router = express.Router();

router.get("/contacts", list);

router.get("/contacts/:id", show);

router.post("/contacts", create);

export default router;