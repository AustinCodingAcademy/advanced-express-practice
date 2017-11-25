import React from "react";


class Contacts extends React.Component {
  componentDidMount() {
    let contactid = this.props.match.params.id;
    this.props.getContacts(contactid);
  }
  render() {
    return (
      <div>
        <div>{this.props.contact.name}</div>
        <div>{this.props.contact.occupation}</div>
      </div>
    );
  }
}

export default Contacts;
