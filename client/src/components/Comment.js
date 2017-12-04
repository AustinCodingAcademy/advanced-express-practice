import React from "react";

class Comment extends React.Component {
  componentDidMount() {
    const commentId = this.props.match.params.id;
    this.props.getComment(commentId);
    console.log("comment props: ", this.props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.comment.body}</h1> 
      </div>
    );
  }
}

export default Comment;
