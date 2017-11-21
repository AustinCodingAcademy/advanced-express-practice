import React, { Component } from "react";

class Contact extends Component {
    componentDidMount () {
        const contactId = this.props.match.params.id;
        this.props.getContact(contactId);
    }
    render () {
        return (
            <div>
                <div>Name: {this.props.contact.name}</div>
            </div>
        );
    }
}
export default Contact;