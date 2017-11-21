import { connect } from "react-redux";
import Vehicle from "../components/Vehicle";
import { getVehicle } from "../actions";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

function mapDispatchToProps (dispatch) {
    return {
        getVehicle: function (vehicle) {
          dispatch(getVehicle(vehicle));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
