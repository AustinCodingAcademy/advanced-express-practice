import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Vehicle from '../components/Vehicle';
import { getVehicle } from '../actions';

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicle
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getVehicle
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
