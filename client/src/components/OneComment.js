import React from "react";
import PropTypes from "prop-types";

function OneComment(props) {
  const comment = props.resultData;
  if (!comment) {
    return (
      <div>
        <h4>Comment not found</h4>
      </div>
    );
  }
  return (
    <div>
      <p>{comment.body}</p>
      <h6>{comment.postId}</h6>
    </div>
  );
}

OneComment.propTypes = {
  resultData: PropTypes.object
};

export default OneComment;
