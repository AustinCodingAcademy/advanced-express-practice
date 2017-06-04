import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import VehicleContainer from "./containers/VehicleContainer";
import ProductContainer from "./containers/ProductContainer";
import CommentContainer from "./containers/CommentContainer";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/vehicle/:id" component={VehicleContainer} />
          <Route path="/product/:id" component={ProductContainer} />
          <Route path="/comment/:id" component={CommentContainer} />
        </div>
      </Router>
    );
  }
}
export default (App);
