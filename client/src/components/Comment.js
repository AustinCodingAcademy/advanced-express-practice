import React, { Component } from "react";

class Comment extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getComment(id);
  }

  render() {
    const body = this.props.comment.body;
    return (
      <h3>
        {body}
      </h3>
    );
  }
}

export default Comment;
