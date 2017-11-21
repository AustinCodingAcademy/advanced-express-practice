import React, { Component } from "react";

class Vehicle extends Component {
    componentDidMount () {
        const vehicleId = this.props.match.params.id;
        this.props.getVehicle(vehicleId);
    }
    render () {
        return (
            <div>
                <div>Year: {this.props.vehicle.year}</div>
                <div>Make: {this.props.vehicle.make}</div>
                <div>Model: {this.props.vehicle.model}</div>
            </div>
        );
    }
}
export default Vehicle;