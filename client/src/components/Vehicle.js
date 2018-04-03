import React, { Component } from "react";

class Vehicle extends Component {

  componentDidMount() {
    var vehicleId = this.props.match.params.id;
    this.props.getVehicle(vehicleId);
  }

  render() {

    return (
      <div>
        <h1>Vehicle</h1>
        <table>
          <tbody>
            <tr>
              <td><b>Year</b></td>
              <td>{this.props.vehicle.year}</td>
            </tr>
            <tr>
              <td><b>Make</b></td>
              <td>{this.props.vehicle.make}</td>
            </tr>
            <tr>
              <td><b>Model</b></td>
              <td>{this.props.vehicle.model}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default Vehicle;
