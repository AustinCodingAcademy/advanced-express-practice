import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import oneCommentContainer from "./containers/oneCommentContainer";
import oneContactContainer from "./containers/oneContactContainer";
import oneProductContainer from "./containers/oneProductContainer";
import oneVehicleContainer from "./containers/oneVehicleContainer";
import {
  BrowserRouter,
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
  /*To go inside "<Switch>"

  */
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/comment/:id" component={oneCommentContainer} />
            <Route path="/product/:id" component={oneProductContainer} />
            <Route path="/vehicle/:id" component={oneVehicleContainer} />
            <Route path="/contact/:id" component={oneContactContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
