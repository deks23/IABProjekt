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
  fetchData = () => {
    var url = this.prepareUrl();
    ApiClient.get(url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("error");
      });
  };
  prepareUrl = () => {
    var url = "select";
    return url;
  };

  render() {
    return <NavBar />;
  }
}
const mapStateToProps = currentState => {
  console.log(currentState);
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};
export default connect(mapStateToProps)(Home);
