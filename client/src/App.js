import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VehicleContainer from './containers/VehicleContainer';
import ProductContainer from './containers/ProductContainer';
import CommentContainer from './containers/CommentContainer';
import ContactContainer from './containers/ContactContainer';

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
            <Route path="/vehicle/:id" component={VehicleContainer} />
            <Route path="/product/:id" component={ProductContainer} />
            <Route path="/comment/:id" component={CommentContainer} />
            <Route path="/contact/:id" component={ContactContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);
