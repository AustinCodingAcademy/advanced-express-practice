import React from "react";

class Vehicle extends React.Component {
  componentDidMount() {
    console.log("vehicle props: ", this.props);
    const vehicleId = this.props.match.params.id;
    this.props.getVehicle(vehicleId);
  }

  render() {
    return (
      <div>
        <div>year: {this.props.vehicle.year}</div>
        <div>make: {this.props.vehicle.make}</div>
        <div>model: {this.props.vehicle.model}</div>
        <div>price: {this.props.vehicle.price}</div>
      </div>
    );
  }
}

export default Vehicle;
