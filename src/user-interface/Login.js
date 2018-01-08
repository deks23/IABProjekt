import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { loginAction } from "../user-actions/user-actions";
import { logoutAction } from "../user-actions/user-actions";
import { loginEmployeeAction } from "../user-actions/user-actions";
import { ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
            <FormButton type="submit" onClick={this.onPatientSubmit} className="btn btn-primary">
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
            <FormButton type="submit" onClick={this.onEmployeeSubmit} className="btn btn-primary">
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
  background-color: #f6dddd;
  padding: 20px;
  text-align: center;
  box-shadow: 2px 2px 4px grey;
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
  background-color: #B2E3FF;
  box-shadow: 1px 1px 2px grey;
  text-align: center;
  font-size: 90%;
  padding:5px;
`;

const FormButton = styled.button`
  flex: 1;
  
  border: none;
  background-color: #35BBFF;
  padding: 5px;
  font-size: 130%;
  font-weight: bold;
  box-shadow: 1px 1px 2px grey;

  &:active {
    box-shadow: 0px 0px 0px;
  }
`;

const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    },
    employee: {
      email: currentState.login.employee.email,
      token: currentState.login.employee.token
    }
  };
};

export default connect(mapStateToProps)(withRouter(Login));
