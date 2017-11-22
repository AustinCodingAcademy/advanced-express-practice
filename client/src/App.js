import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ContactContainer from "./containers/ContactContainer";
import CommentContainer from "./containers/CommentContainer";
import VehicleContainer from "./containers/VehicleContainer";
import ProductContainer from "./containers/ProductContainer";

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
            <Route path="/contact/:id" component={ContactContainer} />
            <Route path="/comment/:id" component={CommentContainer} />
            <Route path="/vehicle/:id" component={VehicleContainer} />
            <Route path="/product/:id" component={ProductContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
