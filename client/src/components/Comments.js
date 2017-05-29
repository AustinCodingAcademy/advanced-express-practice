import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Comments(props) {
  return (
    <CollapsableMapper data={props.comments} path="comment" field="text" />
  );
}
export default Comments;
