import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";
import loadVehicles from "../actions";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadVehicles: dispatch(loadVehicles)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
