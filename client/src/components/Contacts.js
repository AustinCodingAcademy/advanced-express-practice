import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends React.Component {
  
  
  render() {
    return (
      <CollapsableMapper data={this.props.contacts} path="contact" field="name" />
    );
  }
}
export default Contacts;
