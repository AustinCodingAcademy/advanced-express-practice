import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Main from "./components/Main";
import BrowserRouter from
import Switch from

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
    <Route path ="/contacts/:id" component={ContactContainer} />
    <Route path ="/comments/:id" component={CommentContainer} />
    <Route path ="/vehicles/:id" component={VehicleContainer} />
    <Route path ="/products/:id" component={ProductContainer} />
    <Route path ="/" component={Main} />
  </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default (App);
