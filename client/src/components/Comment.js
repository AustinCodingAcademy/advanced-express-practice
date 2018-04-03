import React, { Component } from "react";

class Comment extends Component {

  componentDidMount() {
    var commentId = this.props.match.params.id;
    this.props.getComment(commentId);
  }

  render() {

    return (
      <div>
        <h1>Comment</h1>
        <p><b>Text:</b> {this.props.comment.body}</p>
      </div>
    )
  }
}


export default Comment;
