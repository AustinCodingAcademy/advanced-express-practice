import React, { Component } from "react";

class Comment extends Component {
  componentDidMount() {
    this.props.getComment(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <p>Body: {this.props.comment.body}</p>
      </div>
    );
  }
}

export default Comment;
