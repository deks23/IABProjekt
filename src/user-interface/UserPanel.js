import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ApiClient from "../api-client/ApiClient";

export class UserPane extends Component {
  fetchUserData = () => {
    console.log(this.props.user.token);
    ApiClient.post(USER, {
      token: this.props.user.token
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    this.fetchUserData();
    return <div>Userpanel</div>;
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

const USER = "user";
export default connect(mapStateToProps)(UserPane);
