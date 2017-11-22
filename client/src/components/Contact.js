import React, { Component } from "react";

class Contact extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     occupation: "",
  //     avatar: ""
  //   };
  // }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getContact(userId);
  }

  render() {
    return (
      <div>
        <h2>Name: {this.props.contact.name}</h2>
        <div>Occupation: {this.props.contact.occupation}</div>
        <img src={this.props.contact.avatar} alt="Avatar" />
      </div>
    );
  }
}
export default Contact;

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// }
