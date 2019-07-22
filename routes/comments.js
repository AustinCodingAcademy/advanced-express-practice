// COMMENTS
// GET
app.get('/comments', (req, res) => {
    res.json(comments);
  });
  app.get('/comments/:commentId', (req, res) => {
    let comment = comments.find(x => x._id == req.params.commentId);
    res.json(comment);
  });
  app.post('/contacts', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
  });