import React, { Component } from "react";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boo: []
        };
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.getProduct(id);
    }

    render() {
        return (
            <div>{this.props.id}</div>
        )
    }
}