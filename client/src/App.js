import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CommentDetailContainer from "./containers/CommentDetailContainer"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
    console.log("hello")
  }
  render() {
    return (
     
        <div>
          <Main />
          <CommentDetailContainer />
        </div>
    
    );
  }
}
export default (App);


