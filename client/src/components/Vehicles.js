import React from "react";


class Contact extends React.Component {
  componentDidMount() {
    var vehicleid = this.props.match.params.id
    this.props.getContac(vehicleid);
  }
  render() {
    return (
      <div>
        <div>{this.props.vehicle.make}</div>
        <div>{this.props.vehicle.model}</div>
        <div>{this.props.vehicle.year}</div>
      </div>
    );
  }
}

export default Vehicles;
