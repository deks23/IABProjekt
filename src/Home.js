import React, { Component, PropTypes } from "react";
import ApiClient from "./api-client/ApiClient.js";
import NavBar from "./user-interface/NavBar";
import { connect } from "react-redux";
/**
 * Home
 */
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  render() {
    return <NavBar />;
  }
}
const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};
export default connect(mapStateToProps)(Home);
