import React, {Component} from "react";



class Contact extends Component{
  constructor(){
    super();
  }
  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }
  render(){
  return(
    <div>
      <p>"name:" {this.props.contact.name}</p>
      <p>"occupation:" {this.props.contact.occupation}</p>
      <p>"avatar:" {this.props.contact.avatar}</p>
    </div>
  );
}}

export default Contact;
