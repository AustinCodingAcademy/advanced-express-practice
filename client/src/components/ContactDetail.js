import React from 'react'


class ContactDetail extends React.Component {



    render(){
        <div>
            <div>{this.props.contact.body}</div>
            <div>{this.props.contact.postId}</div>
        </div>
    }
}

export default ContactDetail;