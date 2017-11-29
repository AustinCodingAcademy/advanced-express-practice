import React from "react";

class CommentDetail extends React.Component {
  componentDidMount() {
    const commentId = this.props.match.params.id;
    this.props.getComment(commentId);
    console.log("comment ID: ", commentId);
  }

  render() {
    return (
      <div>
        <div>{this.props.comments}</div>
        <div>{this.props.comments}</div>
      </div>
    );
  }
}

export default CommentDetail;
