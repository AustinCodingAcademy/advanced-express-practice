import { connect } from "react-redux";
import Vehicle from "../components/Vehicle";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

export default connect(mapStateToProps)(Vehicle);
