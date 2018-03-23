import { connect } from "react-redux";
import oneVehicle from "../components/oneVehicle";
import { getVehicle } from "../actions"

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function (id) {
      dispatch(getVehicle(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(oneVehicle);
