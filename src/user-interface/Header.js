import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logoutAction } from "../user-actions/user-actions";
import { connect } from "react-redux";

export class Header extends Component {
  renderUserSessionLink = () => {
    if (!(this.isUserLogged() || this.isEmployeeLogged())) {
      return <Link to="/login">Login</Link>;
    }
    return (
      <Link to="/" onClick={() => this.props.dispatch(logoutAction())}>
        Logout
      </Link>
    );
  };

  renderRegisterLink = () => {
    if (!(this.isUserLogged() || this.isEmployeeLogged())) {
      return <Link to="register">Zarejstruj się</Link>;
    }
  };

  renderEmployeePanelLink = () =>{
    if(this.isEmployeeLogged())
    return <Link to="employeePanel"> Panel Pracownika </Link>
  }

  renderUserPanelLink = () => {
    if (this.isUserLogged()) {
      return <Link to="user"> Panel użytkownika</Link>;
    }
  };

  renderAddUserLink = () =>{
    if (this.isEmployeeLogged())
    return <Link to ="addPatient"> Dodaj pacjenta </Link>
  }
  isUserLogged = () => {
    return this.props.user.email !== "";
  };

  isEmployeeLogged = () => {
    return this.props.employee.email !== "";
  };

  render() {
    console.log(this.props);
    return (
      <NavBarContainer className="container">
        <NavBar className="navbar navbar-inverse">
          <ResponsiveList className="nav navbar-nav">
            <li>
              <Link to="/"> index</Link>
            </li>
            <li>
              <Link to="/page">page</Link>
            </li>
            <li>{this.renderUserPanelLink()}</li>
            <li>{this.renderEmployeePanelLink()} </li>
            <li>{this.renderAddUserLink()}</li>
            <li>{this.renderUserSessionLink()}</li>
            <li> {this.renderRegisterLink()}</li>
            
          </ResponsiveList>
        </NavBar>
      </NavBarContainer>
    );
  }
}
const NavBarContainer = styled.div`
  background-color: white;
`;

const ResponsiveList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  height: 50px;
  @media only screen and (max-width: 767px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const NavBar = styled.nav`
  background-color: red;
  border-radius: 0px;
  border-color: #9e9d24;
  box-shadow: 2px 2px 4px grey;
  font-size: 120%;
  width: 100%;
  height: 50px;
`;
const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    },
    employee: {
      email: currentState.login.employee.email,
      token: currentState.login.employee.token
    }
  };
};

export default connect(mapStateToProps)(Header);
