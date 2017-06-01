import React, { Component } from "react";

class Contact extends Component {
  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <p>Name: {this.props.contact.name}</p>
        <p>Occupation: {this.props.contact.occupation}</p>
        <p>Avatar: {this.props.contact.avatar}</p>
      </div>
    );
  }
}

export default Contact;
