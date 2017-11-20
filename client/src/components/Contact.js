import React from "react";

class Contact extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getContact(id);
  }

  render(){
    return (
      <div>
        <img src={this.props.contact.avatar} />
        <h2>{this.props.contact.name}</h2>
        <h3>{this.props.contact.occupation}</h3>
      </div>
    );
  }
}

export default Contact;
