const express = require("express")
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require (
   '../controller/contactController')

// Use whatever method you need (get, post, etc)
router.get('/contacts', list)
router.get('/contact/:id',show)
router.post('/contacts',create)

module.exports = router