import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logoutAction } from "../user-actions/user-actions";
import { connect } from "react-redux";

export class Header extends Component {
  renderUserSessionLink = () => {
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
    return this.props.user.email !== "";
  };
 
  render() {
    return (
      <NavBarContainer>
      <nav>
        <List className="navbar navbar-inverse">
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
        </List>
        </nav>
      </NavBarContainer>
    );
  }
}
const NavBarContainer = styled.div`

  background-color: #468fea;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;


const List = styled.ul`
display: flex;
  flex-wrap: wrap;
 

  
`;

const StyledNav = styled.nav`
  background-color: #000000;
  border-radius: 0px;
  border-color: #9e9d24;
  box-shadow: 2px 2px 4px grey;
  font-size: 120%;
`;
const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};





export default connect(mapStateToProps)(Header);
