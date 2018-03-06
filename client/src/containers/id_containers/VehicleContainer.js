import { connect } from "react-redux";
import Vehicle from "../../components/id_components/Vehicle";
import { getVehicle } from "../../actions/index";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle,
    id: this.props.match.params.id
  };
}

function mapDispatchToProps(dispatch) {
    return {
        getVehicle: function(id) {
            dispatch(this.getVehicle(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);