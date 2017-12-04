import React, {Component} from "react";

class CommentSingle extends Component {

  componentDidMount() {
    const thisCommentId = this.props.match.params.id;
    this.props.getComment(thisCommentId);
  }

  render(){
    return (
      <div>
        <h3>Comment Id: {this.props.comment._id || "n/a"}</h3>
        <h3>Comment: {this.props.comment.body}</h3>
      </div>
    );
  }
}

export default CommentSingle;
