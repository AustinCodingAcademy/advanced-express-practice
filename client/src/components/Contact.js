import React, {Component} from 'react';

class Contact extends Component {
  componentDidMount() {
    const ContactId = this.props.match.params.id;
    this.props.getContact(ContactId);
  }

  render() {
    return (
      <div>
        <h2>Name: { this.props.contact.name }</h2>
        <div>Occupation: { this.props.contact.occupation }</div>
        <img src={ this.props.contact.avatar } alt="" />
      </div>
    );
  }
}
export default Contact;
