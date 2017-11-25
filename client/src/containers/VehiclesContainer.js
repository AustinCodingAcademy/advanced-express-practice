import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicles(id) {
      var action = getVehicles(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);

