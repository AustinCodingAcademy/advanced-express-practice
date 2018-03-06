import React, { Component } from "react";
import "./App.css";

import Main from "./components/Main";
import CommentContainer from "./containers/id_containers/CommentContainer";
import ContactContainer from "./containers/id_containers/ContactContainer";
import ProductContainer from "./containers/id_containers/ProductContainer";
import VehicleContainer from "./containers/id_containers/VehicleContainer";

import Test from "./components/Test";

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
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path={'/'} component={Main}/>
              <Route path={'/comment/:id'} component={Test}/>
              <Route path={'/contact/:id'} component={ContactContainer}/>
              <Route path={'/product/:id'} component={ProductContainer}/>
              <Route path={'/vehicle/:id'} component={VehicleContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);


