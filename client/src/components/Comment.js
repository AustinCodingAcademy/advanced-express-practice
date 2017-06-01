import React, {Component} from "react";



class Comment extends React.Component {
constructor(props){
  super();
}
  componentDidMount(){

    this.props.getComment(this.props.match.params.id);
  }
  render(){
    console.log(this.props.comment);
  const comment = this.props.comment;

    return(
      <div>
        <h3>Comment Information</h3>
        <br/>
        <p>{comment.body}
        </p>
      </div>
    );
  };
}
export default (Comment);
