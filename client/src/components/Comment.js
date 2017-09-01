import React from "react";

function Comment(props) {
  return (
    <CollapsableMapper data={props.comment} path="comment" field="body" />
  );
}
export default Comment;
