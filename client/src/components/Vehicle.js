import React, {Component} from "react";

// import {getVehicle} from "../actions"

class Vehicle extends React.Component {
constructor(props){
  super();
}
  componentDidMount(){

    this.props.getVehicle(this.props.match.params.id);
  }
  render(){
    console.log(this.props.vehicle);
    const vehicle = this.props.vehicle;

    return(
      <div>
        <h3>Vehicle Information</h3>
        <br/>
        <p>{vehicle.year}
        <br/>
        <br/>
        {vehicle.make}
        <br/>
        <br/>
        {vehicle.model}
        </p>
      </div>
    );
  };
}
export default (Vehicle);
