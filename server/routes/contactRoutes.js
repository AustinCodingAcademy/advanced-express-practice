import express from "express";
import { list, show, create, update, remove } from "../controllers/contactController";

const router = express.Router();

router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);
router.put("/contact/:id", update);
router.delete("/contact/:id", remove);

export default router;
