import React, { Component } from "react";


class Comment extends Component {
  
  componentDidMount() {
    let myId = this.props.match.params.id;
    this.props.getComment(myId);

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
