import React from "react";
import styled from "styled-components";
import ApiClient from "../api-client/ApiClient";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      samePassword: false,
      surname: "",
      birthDate: ""
    };
  }

  isPasswordCorrect = value => {
    console.log("qwe");
    if (value === this.state.password) {
      console.log("valid");
      this.setState({
        samePassword: true
      });
    }
    else{
      console.log(this.state.password);
      this.setState({
        samePassword: false
      });
    }
  };


  registerUser = () => {
      ApiClient
      .post(REGISTER_URL, this.createUserObject())
      .then(response => {
        console.log("registred")
      })
      .then(error => {
        console.log(error);
      });
  };

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
      case "confirmPasswordInput":
       
        break;
      case "nameInput":
        this.setState({
          name: e.target.value
        });
        break;
      case "surnameInput":
        this.setState({
          surname: e.target.value
        });
        break;
      case "dateInput":
        this.setState({
          birthDate: e.target.value
        });
        break;
      default:
        break;
    }
  };

  createUserObject = () => {
    return {
      email: this.state.email,
      password: this.state.password,
      imie: this.state.name,
      nazwisko: this.state.surname,
      dataUrodzenia: this.state.birthDate
    };
  };

  onSubmit = e => {
    e.preventDefault();
    this.registerUser();
  };

  render() {
    return (
      <FormContainer>
        <Form>
          Zarejstruj się
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput id="emailInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Hasło</FormLabel>
            <FormInput
              id="passwordInput"
              type="password"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Potwierdź hasło</FormLabel>
            <FormInput
              id="confirmPasswordInput"
              type="password"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Imię</FormLabel>
            <FormInput id="nameInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Nazwisko</FormLabel>
            <FormInput id="surnameInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Data urodzenia</FormLabel>
            <FormInput
              id="dateInput"
              type="date"
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
const REGISTER_URL = "register"
export default Register;
