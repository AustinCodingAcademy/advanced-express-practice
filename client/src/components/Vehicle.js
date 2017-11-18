import React, { Component } from "react";

class Vehicle extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getVehicle(id);
  }

  render() {
    //console.log(this.props.vehicle);
    //console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.vehicle._id}</div>
        <div><b>imgUrl:</b> {this.props.vehicle.imgUrl}</div>
        <div><b>year:</b> {this.props.vehicle.year}</div>
        <div><b>make:</b> {this.props.vehicle.make}</div>
        <div><b>model:</b> {this.props.vehicle.model}</div>
        <div><b>price:</b> {this.props.vehicle.price}</div>
        <div><b>km:</b> {this.props.vehicle.km}</div>
        <div><b>miles:</b> {this.props.vehicle.miles}</div>
        <div><b>fuel:</b> {this.props.vehicle.fuel}</div>
        <div><b>city:</b> {this.props.vehicle.city}</div>
        <div><b>isNew:</b> {this.props.vehicle.isNew}</div>
      </div>
    );
  }
}
export default Vehicle;