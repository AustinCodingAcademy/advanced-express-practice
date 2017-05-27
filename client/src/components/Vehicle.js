import React from "react";

class Vehicle extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getVehicle(id);
  }

  render() {
    const { year, make, model } = this.props.vehicle;

    return (
      <div>
        <h2>Vehicle Details</h2>
        <p>{year} {make} {model}</p>
      </div>
      
    );
  }
}
export default Vehicle;
