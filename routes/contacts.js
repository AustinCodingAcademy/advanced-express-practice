var express = require('express')
var router = express.Router();
let contacts  = require("../contacts");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


router.get('/', function(req, res){
    res.json(contacts);
  })

router.get('/:id', function(req, res){
    let id = req.params.id
    let contact = contacts.filter(c => c["_id"] == id);
    res.json(contact);
})

router.post('/', function(req, res){
    let contact = req.body;
    contacts.push(contact);
    res.json(contact);
  })


module.exports = router