import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";

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
  render() {
    return (
      <div>
        <Main />
      </div>
    );
    // return (
    //   <BrowserRouter>
    //     <div>
    //       <Switch>
    //         <Route path="/vehicle/:id" render={(props) => {
    //           return (
    //             <div>
    //               <Vehicle />
    //             </div>
    //           );
    //         }} />
    //         <Route path="/" render={(props) => {
    //           return (
    //             <div>
    //               <Main />
    //             </div>
    //           );
    //         }} />
    //       </Switch>
    //     </div>
    //   </BrowserRouter>
    // );
  }
}
export default (App);


// function App (props){
//   return (
//     <BrowserRouter>
//      <div>
//       <Switch>
//         <Route path="/users" render={(props) => {
//           return (
//             <div>
//               <SearchBoxContainer />
//               <ListOfUsersContainer />
//               <UserDetailContainer />
//             </div>
//           );
//         }} />
//         <Route path="/user" component={UserDetailContainer} />
//        </Switch>
//      </div>
//    </BrowserRouter>
//   );
// }
