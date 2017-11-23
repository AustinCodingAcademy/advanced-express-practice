import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends React {

  componentDidMount(){

  }

  render() {
    return (
      <CollapsableMapper data={this.props.contacts} path="contact" field="name" />
    );
  }
}
export default Contacts;
