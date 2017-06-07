import React, {Component} from "react";

class Comment extends Component{
  constructor(){
    super();
  }
  
  componentDidMount() {
    this.props.getComment(this.props.match.params.id);
  }
  
  render(){
  
  return(
    <div>
      <p>"Comment:" {this.props.comment.body}</p>
    </div>
  );
}
}

export default Comment;