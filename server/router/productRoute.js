const express = require("express")
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require (
   '../controller/productController')

// Use whatever method you need (get, post, etc)
router.get('/products', list)
router.get('/product/:id',show)
router.post('/products',create)

module.exports = router