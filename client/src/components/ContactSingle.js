import React, {Component} from "react";

class ContactSingle extends Component {

  componentDidMount() {
    const thisContactId = this.props.match.params.id;
    this.props.getContact(thisContactId);
  }

  render() {
    return (
      <div>
        <img src={this.props.contact.avatar} alt={this.props.contact.name} />
        <h3>Name: {this.props.contact.name || "n/a"}</h3>
        <h3>Occupation: {this.props.contact.occupation || "n/a"}</h3>
      </div>
    );
  }
}

export default ContactSingle;
