import React from "react";

class Comment extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getComment(id);
  }

  render(){
    return (
      <div>
        <h2>Number: {this.props.comment._id}</h2>
        <h3>Comment: {this.props.comment.body}</h3>
      </div>
    );
  }
}

export default Comment;
