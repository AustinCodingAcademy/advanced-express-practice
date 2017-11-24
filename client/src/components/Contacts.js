import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contact extends React.Component {
  componentDidMount() {
    var contactid = this.props.match.params.id
    this.props.getContac(contactid);
  }
  render() {
    return (
      <div>
        <div>this.props.contact.name</div>
        <div>this.props.contact.occupation</div>
      </div>
    );
  }
}

export default Contacts;
