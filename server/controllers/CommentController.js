app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

const comments = require("./comments");
let commentIdCount = comments.length; 
// .get comments
export function list(req, res) {
   return res.json(comments);
}
// .get comment by ID
export function show(req, res) {
   let comment = comments.find((comment) => comment._id == req.params.id);
   return res.json(comment);
}
// .post new comment
export function create(req, res) {
   commentIdCount++
   const newComment = {
      _id: commentIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new comment to comments array
   comments.push(newComment);
   // return array with added comment
   return res.json(comments);
}
// .put comment by ID
export function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete comment by ID
export function remove(req, res) {
   return res.json({});
}