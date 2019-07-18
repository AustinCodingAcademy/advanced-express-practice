var express = require('express')
var router = express.Router();
let comments = require("../comments");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

router.get('/', function(req, res){
    res.json(comments);
  })

router.get('/:id', function(req, res){
    let id = req.params.id
    let comment = comments.filter(c => c["_id"] == id);
    res.json(comment);
})

router.post('/', function(req, res){
    let comment = req.body;
    comments.push(comment);
    res.json(comment);
})
  

module.exports = router