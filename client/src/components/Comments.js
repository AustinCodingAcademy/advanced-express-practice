import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends React {


  componentDidMount(){

  }

  render() {
    return (
      <CollapsableMapper data={this.props.comments} path="comment" field="body" />
    );
  }
 
}
export default Comments;
