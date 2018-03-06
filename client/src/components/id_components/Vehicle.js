import React, { Component } from "react";

export default class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boo: []
        };
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.getVehicle(id);
    }

    render() {
        return (
            <div>{this.props.id}</div>
        )
    }
}