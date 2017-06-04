import React from "react";

class Comment extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getComment(id);
  }

  render() {
    const { text } = this.props.comment;
    return (
      <div>
        <h2>Comment Details</h2>
        <p>{text}</p>
      </div>

    );
  }
}
export default Comment;
