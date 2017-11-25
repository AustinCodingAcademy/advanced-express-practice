import React from "react";


class Comments extends React.Component {
  componentDidMount() {
    var commentid = this.props.match.params.id
    this.props.getContact(commentid);
  }
  render() {
    return (
      <div>
        <div>{this.props.comment.body}</div>
      </div>
    );
  }
}

export default Comments;
