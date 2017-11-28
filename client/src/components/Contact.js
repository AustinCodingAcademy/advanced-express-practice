import React, { Component } from "react";


class Contact extends Component {
  
  componentDidMount() {
    
    let myId = this.props.match.params.id;
    this.props.getContact(myId);

  }
  render() {
    return (
      <div> 
      <div>{this.props.contact.name}</div>
      <div>{this.props.contact.occupation}</div>
      <div><img src={this.props.contact.avatar}/> </div>
      </div>
    );
  }
  
}
export default Contact;
