import React, { Component } from "react";

class Contact extends Component {

  componentDidMount() {
    var contactId = this.props.match.params.id;
    this.props.getContact(contactId);
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <img src={this.props.contact.avatar} alt={this.props.contact.name} />
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td>{this.props.contact.name}</td>
            </tr>
            <tr>
              <td><b>Occupation</b></td>
              <td>{this.props.contact.occupation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default Contact;
