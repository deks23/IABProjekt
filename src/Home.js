import React, { Component, PropTypes } from "react";
import ApiClient from "./api-client/ApiClient.js";
import Header from "./user-interface/Header";
import { connect } from "react-redux";
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
      <Header />
      
    );
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
