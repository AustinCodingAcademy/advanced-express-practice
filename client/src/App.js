import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Comments from "./containers/CommentsContainer";
import Vehicles from "./containers/VehiclesContainer";
import Contacts from "./containers/ContactsContainer";
import Products from "./containers/ProductsContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

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
          <Route exact path="/" component={Main}/>
          <Route path="/comments/:id" component={Comments} />
          <Route path="/products/:id" component={Products} />
          <Route path="/vehicles/:id" component={Vehicles} />
          <Route path="/contacts/:id" component={Contacts} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default (App);
