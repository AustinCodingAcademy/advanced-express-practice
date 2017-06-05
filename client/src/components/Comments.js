import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

function Comments(props) {
  return (
    <CollapsableMapper data={props.comments} path="comment" field="body" />
  );
}

Comments.propTypes = {
  comments: PropTypes.array
};
export default Comments;
