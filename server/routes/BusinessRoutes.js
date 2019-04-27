const express = require("express");
const router = express.Router();
const {list,show,create} =require("../controllers/BusinessController");


router.get("/business", list);
router.get("/business", show);
router.post("/business", create);

module.exports =  router;