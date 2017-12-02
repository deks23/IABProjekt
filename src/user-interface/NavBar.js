import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logoutAction } from "../user-actions/user-actions";
import { connect } from "react-redux";
/**
 * NavBar
 */
export class NavBar extends Component {
  renderUserSessionLink = () => {
    console.log("as");
    if (!this.isUserLogged()) {
      return <Link to="/login">Login</Link>;
    }
    return (
      <Link to="/" onClick={() => this.props.dispatch(logoutAction())}>
        Logout
      </Link>
    );
  };

  isUserLogged = () => {
    console.log(this.props);
    return this.props.user.email !== "";
  };

  render() {
    return (
      <NavBarContainer>
        <ul>
          <li>
            <Link to="/"> index</Link>
          </li>
          <li>
            <Link to="/page">page</Link>
          </li>
          <li>
            <Link to="/user"> Panel Użytkownika </Link>
          </li>

          <li>{this.renderUserSessionLink()}</li>
        </ul>
      </NavBarContainer>
    );
  }
}
const NavBarContainer = styled.div`
  background-color: #adc775;
  display: flex;
`;

const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};

export default connect(mapStateToProps)(NavBar);
