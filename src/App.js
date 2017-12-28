import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, history } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import styled from "styled-components";
import UserPanel from "./user-interface/UserPanel";
import Login from "./user-interface/Login";
import Register from "./user-interface/Register";
import EmployeePanel from "./employee-interface/EmployeePanel";
import AddPatient from "./employee-interface/AddPatient";
class App extends Component {
  render() {
    localStorage.clear();
    
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/page" component={Page} />
          <Route path="/user" component={UserPanel} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/employeePanel" component = {EmployeePanel} />
          <Route path="/addPatient" component = {AddPatient} />
        </div>
      </Router>
    );
  }
}
const MainAppContainer = styled.div``;
export default App;
