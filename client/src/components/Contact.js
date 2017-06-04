import React, { Component } from "react";

class Contact extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getContact(id);
  }

  render() {
    const name = this.props.contact.name;
    const occupation = this.props.contact.occupation;
    const avatar = this.props.contact.avatar;
    return (
      <div>
        <h2>Contact</h2>
        <ul>
          <li>Name: {name}</li>
          <li>Occupation: {occupation}</li>
          <li>Avatar: {avatar}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
