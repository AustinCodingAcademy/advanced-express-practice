import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import VehicleContainer from "./containers/VehicleContainer";
import ContactContainer from "./containers/ContactContainer";
import CommentContainer from "./containers/CommentContainer";
import ProductContainer from "./containers/ProductContainer";
import{
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
  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/comment/:id" component={CommentContainer}/>
      <Route path="/contact/:id" component={ContactContainer}/>
      <Route path="/vehicle/:id" component={VehicleContainer}/>
      <Route path="/product/:id" component={ProductContainer}/>
      </Switch>

      </div>
      </BrowserRouter>
    );
  }
}
export default (App);
