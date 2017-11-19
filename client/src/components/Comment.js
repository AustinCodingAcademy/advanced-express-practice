import React, { Component } from "react";

class Comment extends Component {
  componentDidMount() {
    const commentId = this.props.match.params.id;
    this.props.getComment(commentId);
  }
  render() {
    return <div>{this.props.comment.body}</div>;
  }
}

export default Comment;
