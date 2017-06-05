import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";

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
      </div>
    );
  }
}
export default (App);
