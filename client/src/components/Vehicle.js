import React, { Component } from "react";

class Vehicle extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props)
    this.props.getVehicle(id);
  }

  render() {
    const year = this.props.vehicle.year;
    const make = this.props.vehicle.make;
    const model = this.props.vehicle.model;
    return (
      <div>
        <h2>Vehicle</h2>
        <ul>
          <li>Year: {year}</li>
          <li>Make: {make}</li>
          <li>Model: {model}</li>
        </ul>
      </div>
    );
  }
}

export default Vehicle;
