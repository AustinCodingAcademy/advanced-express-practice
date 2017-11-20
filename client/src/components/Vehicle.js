import React, { Component } from "react";

class Vehicle extends Component {
  componentDidMount() {
    const vehicleId = this.props.match.params.id;
    this.props.getVehicle(vehicleId);
  }
  render() {
    return (
      <div>
        <div>{this.props.vehicle.year}</div>
        <div>{this.props.vehicle.make}</div>
        <div>{this.props.vehicle.model}</div>
      </div>
    );
  }
}
export default Vehicle;
