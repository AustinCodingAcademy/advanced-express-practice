import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends React {


  componentDidMount(){

  }

  render() {
    return (
      <div>
        <div>{this.props.comments.id}</div>
        <CollapsableMapper data={this.props.comments} path="comment" field="body" />
      </div>
    );
  }
 
}
export default Comments;
