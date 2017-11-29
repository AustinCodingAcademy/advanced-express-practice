import VehicleDetail from "../components/VehicleDetail";
import { connect } from "react-redux";
import { getVehicle } from "../actions";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function(id) {
      let action = getVehicle(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);
