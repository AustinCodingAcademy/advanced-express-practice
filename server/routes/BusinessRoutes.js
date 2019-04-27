const express = require("express");
const router = express.Router();
const {list,show,create} =require("../controllers/BusinessController");


router.get("/businesss", list);
router.get("/business", show);
router.post("/business", create);

module.exports =  router;