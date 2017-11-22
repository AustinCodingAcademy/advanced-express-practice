import React, { Component } from "react";

class Comment extends Component {

  componentDidMount() {
    const CommentId = this.props.match.params.id;
    this.props.getComment(CommentId);
  }

  render() {
    return (
      <div>
        <h2>Comment: {this.props.comment.body}</h2>
        <h3>ID: {this.props.comment._id}</h3>

      </div>
    );
  }
}
export default Comment;
