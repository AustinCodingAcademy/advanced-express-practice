import React, { Component } from "react";

class Comment extends Component {
  componentDidMount() {
    const commentId = this.props.match.params.id;
    this.props.getComment(commentId);
  }
  render() {
    return (
      <div>
        <div>{this.props.comment.body}</div>
      </div>
    );
  }
}
export default Comment;
