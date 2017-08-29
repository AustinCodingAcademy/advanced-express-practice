import express from "express";
import comments from "../comments";

const router = express.Router();

router.get("/comments", (request, response) => {
  return response.json(comments);
});

router.get("/comments/:id", (request, response) => {
  const oneComment = comments.find(comment => {
    return comment.id === request.params.id;
  });
  return response.json(oneComment);
});

router.post("/comments", (request, response) => {
  comments.push(request.body);
  return response.json(comments);
});

export default router;
