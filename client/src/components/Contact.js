import React from "react";

class Contact extends React.Component {
  
  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.getContact(contactId);
  }

  render() {
    return (
      <div>
        <div>{this.props.contact.name}</div>
        <div>{this.props.contact.occupation}</div>
        <div>{this.props.contact.avatar}</div>
      </div>
    );
  }
}

export default Contact;
