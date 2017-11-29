import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CommentContainer from "./containers/CommentContainer"
import ContactContainer from "./containers/ContactContainer"
import VehicleContainer from "./containers/VehicleContainer"
import ProductContainer from "./containers/ProductContainer"
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
  }
  render() {
    return (
     
        <div>
          <Main />
          <BrowserRouter>
            <Switch>
              <Route path='/comment/:id' component={CommentContainer}/>
              <Route path='/contact/:id' component={ContactContainer}/>
              <Route path='/vehicle/:id' component={VehicleContainer}/>
              <Route path='/product/:id' component={ProductContainer}/>
            </Switch>
          </BrowserRouter>
        </div>
    
    );
  }
}
export default (App);


