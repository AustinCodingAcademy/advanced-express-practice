import React from "react";

class ContactDetail extends React.Component {
  
  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.getContact(contactId);
  }

  render() {
    return (
      <div>
        <div>{this.props.contact}</div>
        <div>{this.props.contact}</div>
      </div>
    );
  }
}

export default ContactDetail;
