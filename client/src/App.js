import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Comment from "./containers/CommentContainer";
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
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/comment/:id" component={Comment} />
            <Route path="/product/:id" component={Product} />
            <Route path="/vehicle/:id" component={Vehicle} />
            <Route path="/contact/:id" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);


