import React from "react";

class Vehicle extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getVehicle(id);
  }

  render(){
    return (
      <div>
        <h2>{this.props.vehicle.make}</h2>
        <h3>{this.props.vehicle.model}</h3>
        <h4>{this.props.vehicle.year}</h4>
        <p>{this.props.vehicle.price}</p>
        <p>{this.props.vehicle.city}</p>
      </div>
    )
  }
}

export default Vehicle;
