import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CommentContainer from "./containers/CommentContainer";
import ContactContainer from "./containers/ContactContainer";
import ProductContainer from "./containers/ProductContainer";
import VehicleContainer from "./containers/VehicleContainer";

import {
 BrowserRouter,
 Route,
 Switch
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
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/comment/:id" component={CommentContainer} />
            <Route path="/contact/:id" component={ContactContainer} />
            <Route path="/product/:id" component={ProductContainer} />
            <Route path="/vehicle/:id" component={VehicleContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);