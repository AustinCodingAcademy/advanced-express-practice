import React from "react";

class Contact extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getContact(id);
  }

  render() {
    const { name, occupation, avatar } = this.props.contact;
    return (
      <div>
        <h2>Contact Details</h2>
        <p>{name}</p>
        <p>{occupation}</p>
        <img src={avatar} alt={name} />
      </div>
      
    );
  }
}
export default Contact;