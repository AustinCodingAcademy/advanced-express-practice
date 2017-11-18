import React, { Component } from "react";

class Comment extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getComment(id);
  }

  render() {
    //console.log(this.props.comment);
    //console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.comment._id}</div>
        <div><b>Body:</b> {this.props.comment.body}</div>
        <div><b>postId:</b> {this.props.comment.postId}</div>
      </div>
    );
  }
}
export default Comment;