import React, {Component} from 'react';

class Vehicle extends Component {
  componentDidMount() {
    const VehicleId = this.props.match.params.id;
    this.props.getVehicle(VehicleId);
  }

  render() {
    return (
      <div>
        <p>Year: { this.props.vehicle.year}</p>
        <p>Make: { this.props.vehicle.make}</p>
        <p>Model: { this.props.vehicle.model}</p>
      </div>
    );
  }
}
export default Vehicle;
