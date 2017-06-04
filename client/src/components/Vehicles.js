
import React, {Component, PropTypes} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Vehicles extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadVehicles();
  }
  render() {
    return (
      <CollapsableMapper
        data={this.props.vehicles}
        path="vehicle"
        field="year"
        field1="make"
        field2="model"
      />
    );
  }
}

Vehicles.propTypes = {
  vehicles: PropTypes.array,
  loadVehicles: PropTypes.func
};
export default Vehicles;
