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

  renderEmployeePanelLink = () => {
    if (this.isEmployeeLogged())
      return <Link to="employeePanel"> Panel Pracownika </Link>;
  };

  renderUserPanelLink = () => {
    if (this.isUserLogged()) {
      return <Link to="user"> Panel użytkownika</Link>;
    }
  };

  renderAddUserLink = () => {
    if (this.isEmployeeLogged())
      return <Link to="addPatient"> Dodaj pacjenta </Link>;
  };
  renderPatientList = () => {
    if (this.isEmployeeLogged())
      return <Link to="patientList"> Pacjenci </Link>;
  };
  isUserLogged = () => {
    return this.props.user.token !== "" && this.props.user.token !== "failed";
  };

  isEmployeeLogged = () => {
    return (
      this.props.employee.token !== "" && this.props.employee.token !== "failed"
    );
  };

  render() {
    return (
      <NavBarContainer className="container">
        <NavBar className="navbar navbar-inverse">
          <ResponsiveList className="nav navbar-nav">
            <HeaderList>
              <Link to="/"> Strona domowa</Link>
            </HeaderList>
            <HeaderList>
              <Link to="/page">page</Link>
            </HeaderList>
            <HeaderList>{this.renderUserPanelLink()}</HeaderList>
            <HeaderList>{this.renderEmployeePanelLink()} </HeaderList>
            <HeaderList>{this.renderAddUserLink()}</HeaderList>
            <HeaderList>{this.renderPatientList()} </HeaderList>
            <HeaderList>{this.renderUserSessionLink()}</HeaderList>
            <HeaderList> {this.renderRegisterLink()}</HeaderList>
          </ResponsiveList>
        </NavBar>
      </NavBarContainer>
    );
  }
}
const NavBarContainer = styled.div`
  background-color: white;
  padding-top:10px;
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
  background-color: #ff0000;
  border-radius: 0px;
  border-color: #9e9d24;
  
  font-size: 120%;
  font-color: black;
  height: 50px;
`;

const HeaderList = styled.li`
  color: black;
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
