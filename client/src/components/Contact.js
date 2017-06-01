import React, {Component} from "react";



class Contact extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){

    this.props.getContact(this.props.match.params.id);
  }
  render(){
    console.log(this.props.contact);

const contact = this.props.contact;
    return(
      <div>
        <h3>Contact Information</h3>
        <br/>
        <p>{contact.name}
        <br/>
        <br/>
        {contact.occupation}
        <br/>
        <br/>
        {contact.avatar}
        </p>
      </div>
    );
  };
}
export default (Contact);
