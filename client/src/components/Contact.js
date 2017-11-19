import React, { Component } from "react";

class Contact extends Component {
  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.getContact(contactId);
  }
  render() {
    return <div>{this.props.contact.name}</div>;
  }
}

export default Contact;
