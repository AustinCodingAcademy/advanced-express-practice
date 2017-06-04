import { connect } from "react-redux";
import { getVehicle } from "../actions";
import Vehicle from "../components/Vehicle";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: (id) => {
      const action = getVehicle(id);
      dispatch(action);
    }
  };
}

const VehicleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicle);

export default VehicleContainer;
