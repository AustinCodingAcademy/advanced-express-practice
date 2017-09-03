import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Comment(props) {
  return (
    <CollapsableMapper data={props.comment} path="contact" field="body" />
  );
}
export default Comment;
