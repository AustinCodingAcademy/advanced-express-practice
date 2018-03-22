import express from "express";
const router = express.Router(); 
import {listAll, show, create, update, remove} from "../controllers/ContactController";

router.get("/contacts", listAll);
router.get("/contacts/:id", show);
router.post("/contacts", create);
router.post("/contacts/:id", update);
router.delete("/contacts", remove);

export default router;
