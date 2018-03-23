import React from "react";

class oneVehicle extends React.Component {
  componentDidMount() {
    this.props.getVehicle(this.props.match.params.id);
  }

  render() {
    let make = "";
    let model = "";
    let year = "";
    if(this.props.vehicle){
      make = this.props.vehicle.make;
      model = this.props.vehicle.model;
      year = this.props.vehicle.year;
      console.log("oneVehicle:",make);
    }
    return (
      <div className="oneVehicle">
        <h2>Selected Vehicle: {make} {model}, {year}</h2>
      </div>
    );
  }
}
export default oneVehicle;
