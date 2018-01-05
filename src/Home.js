import React, { Component, PropTypes } from "react";
import ApiClient from "./api-client/ApiClient.js";
import Header from "./user-interface/Header";
import { connect } from "react-redux";
import styled from "styled-components";
/**
 * Home
 */
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false
    };
  }

  render() {
    return (
      <Container>
      qwe
      </Container>
      
    );
  }
}
const mapStateToProps = currentState => {
  console.log(currentState);
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token,
    }
 
  };
};

const Container = styled.div`

`;
export default connect(mapStateToProps)(Home);
