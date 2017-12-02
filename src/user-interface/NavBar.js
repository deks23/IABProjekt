import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/**
 * NavBar
 */
export class NavBar extends Component {
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </NavBarContainer>
    );
  }
}
const NavBarContainer = styled.div`
  background-color: #adc775;
  display: flex;
`;
export default NavBar;
