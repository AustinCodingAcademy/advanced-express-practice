import React, {Component} from 'react';

class Comment extends Component {
  componentDidMount() {
    const CommentId = this.props.match.params.id;
    this.props.getComment(CommentId);
  }

  render() {
    return (
      <div>
        <h3>Comment: { this.props.comment.body }</h3>
        <h2>ID: { this.props.comment._id }</h2>
      </div>
    );
  }
}
export default Comment;
