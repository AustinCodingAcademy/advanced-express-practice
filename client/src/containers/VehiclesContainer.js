import { connect } from "react-redux";
import {getVehicle} from "../actions";
import Vehicles from "../components/Vehicles";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function () {
      dispatch(getVehicle());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
