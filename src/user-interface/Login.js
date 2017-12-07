import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { loginAction } from "../user-actions/user-actions";
import { logoutAction } from "../user-actions/user-actions";

import { connect } from "react-redux";
/**
 * Login
 */
export class Login extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  refreshState = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "emailInput":
        this.setState({
          email: e.target.value
        });
        break;
      case "passwordInput":
        this.setState({
          password: e.target.value
        });
        break;
      default:
        break;
    }
  };
  createUserObject = () => {
    return {
      email: this.state.email,
      password: this.state.password
    };
  };
  onSubmit = e => {
    e.preventDefault();
    const user = this.createUserObject();
    this.props.dispatch(loginAction(user));
  };

  onLogout = e => {
    e.perventDefault();
    this.props.dispach(logoutAction());
  };

  render() {
    return (
      <FormContainer>
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput id="emailInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput
              id="passwordInput"
              type="password"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <FormButton type="submit" onClick={this.onSubmit}>
              Submit
            </FormButton>
          </FormGroup>
          
        </Form>
      </FormContainer>
    );
  }
}
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 2px grey;
  background-color: #cddc39;
  padding: 20px;
`;

const FormGroup = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  box-shadow: 1px 1px 2px grey;
  min-width: 400px;
  flex: 2;
`;

const FormLabel = styled.label`
  flex: 1;
  background-color: #827717;
  padding: 5px;
  box-shadow: 1px 1px 2px grey;
  color: white;
  text-align: center;
  font-size: 90%;
`;

const FormButton = styled.button`
  flex: 1;
  background-color: #827717;
  border: none;
  color: white;
  padding: 5px;
  font-size: 130%;
  font-weight: bold;
  box-shadow: 1px 1px 2px grey;

  &:active {
    box-shadow: 0px 0px 0px;
  }
`;
export default connect()(Login);
