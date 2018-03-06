import React, { Component } from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boo: []
        };
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.getContact(id);
    }

    render() {
        return (
            <div>{this.props.id}</div>
        )
    }
}