import React, { Component } from "react";

class Contact extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getContact(id);
  }

  render() {
    //console.log(this.props.contact);
    //console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.contact._id}</div>
        <div><b>Name:</b> {this.props.contact.name}</div>
        <div><b>Occupation:</b> {this.props.contact.occupation}</div>
        <div><b>Avatar:</b> {this.props.contact.avatar}</div>
      </div>
    );
  }
}
export default Contact;
