import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ApiClient from "../api-client/ApiClient";

export class UserPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: ""
    };
  }

  fetchUserData = () => {
 
    ApiClient.post(USER, {
      token: this.props.user.token
    })
      .then(response => {
        this.setState({ userData: response.data });
        console.log(this.state.userData[0].Imie)
        if (response.data.token === "") {
          console.log("token experied");
          //OPEN LOGIN PAGE
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderUserData = () => {
    console.log(this.state);
    if(this.state.userData!=="")
    return <div>{this.state.userData[0].Imie}</div>;
    else return <div />
  };
  componentDidMount() {
    this.fetchUserData();
  }
  render() {
    
    return this.renderUserData();
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

const USER = "user";
export default connect(mapStateToProps)(UserPane);
