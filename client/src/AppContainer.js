import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts, loadProducts, loadVehicles, loadComments } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
    },
    loadProducts() {
      dispatch(loadProducts());
    },
    loadVehicles() {
      dispatch(loadVehicles());
    },
    loadComments() {
      dispatch(loadComments());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
