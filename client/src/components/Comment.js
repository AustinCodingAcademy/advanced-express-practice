import React, { Component } from "react";

class Comment extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getComment(id);
  }

  render() {
    console.log(this.props.comment);
    console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.comment._id}</div>
        <div><b>Post ID:</b> {this.props.comment.postId}</div>
        <div><b>Body:</b> {this.props.comment.body}</div>
        {/* <div><b>imgUrl:</b> {this.props.comment.imgUrl}</div>
        <div><b>year:</b> {this.props.comment.year}</div>
        <div><b>make:</b> {this.props.comment.make}</div>
        <div><b>model:</b> {this.props.comment.model}</div>
        <div><b>price:</b> {this.props.comment.price}</div>
        <div><b>km:</b> {this.props.comment.km}</div>
        <div><b>miles:</b> {this.props.comment.miles}</div>
        <div><b>fuel:</b> {this.props.comment.fuel}</div>
        <div><b>city:</b> {this.props.comment.city}</div>
        <div><b>isNew:</b> {this.props.comment.isNew}</div> */}
      </div>
    );
  }
}
export default Comment;
