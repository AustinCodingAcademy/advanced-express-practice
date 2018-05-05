const comments = require("../comments");

module.exports.list = function (request, response) {
  return response.json(comments);
};
module.exports.show = function (request, response) {
  const comment = findComment(request.params.id);
  return response.json(comment);
};
module.exports.create = function (request, response) {
  const newComment = request.body;
  comments.push(newComment);
  return response.json(comments[comments.length - 1]);
};
module.exports.update = function (request, response) {
  const comment = findComment(request.params.id);
  comment.name += " TEST"; // testing PUT
  return response.json(comment);
};
module.exports.remove = function (request, response) {
  const comment = findComment(request.params.id);
  const i = comments.indexOf(comment);
  comments.splice(i, 1);
  return response.send("deleted");
};

function findComment(id) {
  const comment = comments.find((u) => {
    return u._id === Number(id);
  });
  return comment;
}
