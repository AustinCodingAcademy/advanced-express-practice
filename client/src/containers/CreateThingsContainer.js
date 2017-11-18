import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createProduct,
  createVehicle,
  createContact,
  createComment,
} from "../actions";

function mapStateToProps(state) {
  return {
    comments: state.comments,
    contacts: state.contacts,
    vehicles: state.vehicles,
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createProduct: function (product) {
      dispatch(createProduct(product));
    },
    createVehicle: function (v) {
      dispatch(createVehicle(v));
    },
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createComment: function (c) {
      dispatch(createComment(c));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateThings);