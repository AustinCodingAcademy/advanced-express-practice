import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Vehicle from "./containers/VehicleContainer";
import Comment from "./containers/CommentContainer";
import Contact from "./containers/ContactContainer";
import Product from "./containers/ProductContainer";
import {
  BrowserRouter as Router,
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
      <Router>
        <div>
          <Switch>  
            <Route path="/vehicle/:id" component={Vehicle} />
            <Route path="/comment/:id" component={Comment} />
            <Route path="/contact/:id" component={Contact} />
            <Route path="/product/:id" component={Product} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);


