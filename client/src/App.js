import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Vehicle from './components/Vehicle';
import Product from './components/Product';
import Comment from './components/Comment';
import Contact from './components/Contact';

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
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/vehicle/:id" component={Vehicle} />
            <Route path="/product/:id" component={Product} />
            <Route path="/comment/:id" component={Comment} />
            <Route path="/contact/:id" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);
