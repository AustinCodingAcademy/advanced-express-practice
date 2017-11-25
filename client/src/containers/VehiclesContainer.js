import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";
import { getVehicle } from "../actions";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle(id) {
      var action = getVehicle(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);

