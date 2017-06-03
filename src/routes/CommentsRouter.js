import express from "express";
import Comment from "../models/Comment";

const router = express.Router();

router.get("/comments", (request, response) => {
  Comment.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

router.get("/comments/:id", (request, response, next) => {
  Comment.findById(request.params.id).exec()
    .then((comment) => {
      return response.json(comment);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/comments", (request, response) => {
  const comment = new Comment(request.body);

  comment.save()
    .then(storedComment => {
      console.log("Comment was saved");
      return response.json(storedComment);
    })
    .catch(() => {
      console.log("Comment was NOT saved");
      return response.json("Error");
    });
});

export default router;
