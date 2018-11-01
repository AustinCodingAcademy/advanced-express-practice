const comments = require("../comments");

let commentsIdCount = comments.length;

function list(req, res) {
  res.json(comments);
}

function show(req, res) {
  const comment = comments.find(c => {
    return c._id === Number(req.params.id);
  });
  res.json(comment);
}

function create(req, res) {
  commentsIdCount++;
  comments.push({ ...req.body, _id: commentsIdCount });
  res.json(comments[comments.length - 1]);
}

function update(req, res) {
  const id = comments.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  const current = comments[id];

  comments[id] = { current, ...req.body };
  res.json(comments[id]);
}

function remove(req, res) {
  const id = comments.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  comments.slice(id, 1);
  res.send("deleted");
}

module.exports = {
  list,
  show,
  create,
  update,
  remove
};
