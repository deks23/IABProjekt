import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { loginAction } from "../user-actions/user-actions";
import { logoutAction } from "../user-actions/user-actions";
import { loginEmployeeAction } from "../user-actions/user-actions";
import { ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

/**
 * Login
 */
export class Login extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      patientEmail: "",
      patientPassword: "",
      employeeEmail: "",
      employeePassword: ""
    };
  }

  patientDataRefreshState = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "patientEmailInput":
        this.setState({
          patientEmail: e.target.value
        });
        break;
      case "patientPasswordInput":
        this.setState({
          patientPassword: e.target.value
        });
        break;
      default:
        break;
    }
  };

  doctorDataRefreshState = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "employeeEmailInput":
        this.setState({
          employeeEmail: e.target.value
        });
        break;
      case "employeePasswordInput":
        this.setState({
          employeePassword: e.target.value
        });
        break;
      default:
        break;
    }
  };

  createUserObject = () => {
    return {
      email: this.state.patientEmail,
      password: this.state.patientPassword
    };
  };

  createEmployeeObject = () => {
    return {
      email: this.state.employeeEmail,
      password: this.state.employeePassword
    };
  };
  onPatientSubmit = e => {
    e.preventDefault();
    const user = this.createUserObject();
    this.props.dispatch(loginAction(user, this.props.history));
   
    
  };

  onEmployeeSubmit = e => {
    e.preventDefault();
    const employee = this.createEmployeeObject();
    this.props.dispatch(loginEmployeeAction(employee, this.props.history));
   
  };

  render() {
    return (
      <FormContainer>
        <Form>
          Zaloguj się jako dawca
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              id="patientEmailInput"
              onChange={this.patientDataRefreshState}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput
              id="patientPasswordInput"
              type="password"
              onChange={this.patientDataRefreshState}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <FormButton type="submit" onClick={this.onPatientSubmit} className>
              Submit
            </FormButton>
          </FormGroup>
        </Form>

        <Form>
          Zaloguj się jako lekarz
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              id="employeeEmailInput"
              onChange={this.doctorDataRefreshState}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput
              id="employeePasswordInput"
              type="password"
              onChange={this.doctorDataRefreshState}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <FormButton type="submit" onClick={this.onEmployeeSubmit} className>
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
  justify-content: space-around;
  
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
export default connect()(withRouter(Login));
