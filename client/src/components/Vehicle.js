import React, { Component } from "react";

class Vehicle extends Component {

  componentDidMount() {
    const VehicleId = this.props.match.params.id;
    this.props.getVehicle(VehicleId);
  }

  render() {
    return (
      <div>
        <h2>Model: {this.props.vehicle.make}</h2>
        <div>Year: {this.props.vehicle.year}</div>
        <div>Year: {this.props.vehicle.model}</div>
      </div>
    );
  }
}
export default Vehicle;
