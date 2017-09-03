import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ContactsController";


router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);
router.put("/contact/:id", update);
router.delete("/contacts/:id", remove);

export default router;
