import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import ContactsContainer from "./containers/ContactsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import ProductsContainer from "./containers/ProductsContainer";
import CommentsContainer from "./containers/CommentsContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <Main />
        <BrowserRouter>
          <Switch>
            <Route path="/contacts/:id" component={ContactsContainer} />
            <Route path="/vehicles/:id" component={VehiclesContainer} />
            <Route path="/products/:id" component={ProductsContainer} />
            <Route path="/comments/:id" component={CommentsContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);


