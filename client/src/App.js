import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Commentt from "./containers/CommentContainer";
import Vehicle from "./containers/VehicleContainer";
import Contact from "./containers/ContactContainer";
import Product from "./containers/ProductContainer";
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
          <Route path="/comment/:id" component={Commentt} />
          <Route path="/product/:id" component={Product} />
          <Route path="/vehicle/:id" component={Vehicle} />
          <Route path="/contact/:id" component={Contact} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default (App);
