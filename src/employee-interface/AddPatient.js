import React from "react";
import styled from "styled-components";
import ApiClient from "../api-client/ApiClient";
export class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      samePassword: true,
      surname: "",
      confirmPassword: "",
      birthDate: "",
      bloodGroup: "",
      registerError: false,
      userAdded: false
    };
  }

  isPasswordCorrect = value => {
    return this.state.confirmPassword === this.state.password;
  };

  registerUser = () => {
    ApiClient.post(ADD_USER_URL, this.createUserObject())
      .then(response => {
        console.log(response);
        this.setState({ userAdded: true });
      })
      .then(error => {
        console.log(error);
      });
  };

  renderUserAdded = () => {
    console.log("added");
    return <div> Pacjent dodany </div>;
  };
  refreshState = e => {
    e.preventDefault();
    console.log(this.state.bloodGroup);
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
        this.setState({
          confirmPassword: e.target.value
        });
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
      case "bloodGroupInput":
        this.setState({
          bloodGroup: e.target.value
        });
        break;
      case "adressInput":
        this.setState({
          adress: e.target.value
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
      dataUrodzenia: this.state.birthDate,
      grupaKrwi: this.state.bloodGroup,
      adres: this.state.adress
    };
  };

  showError = () => {
    this.setState({ samePassword: false });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.isPasswordCorrect()) this.registerUser();
    else this.showError();
  };

  render() {
    return (
      <FormContainer>
        <Form>
          Dodaj Pacjenta
          <FormGroup className="form-group row">
            <FormLabel className="col-form-label" >Email</FormLabel>
            <FormInput id="emailInput" onChange={this.refreshState}  className="form-control"/>
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel className="col-form-label">Hasło</FormLabel>
            <FormInput
              id="passwordInput"
              type="password"
              onChange={this.refreshState}
              className="form-control"
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Potwierdź hasło</FormLabel>
            <FormInput
              id="confirmPasswordInput"
              type="password"
              onChange={this.refreshState}
              className="form-control"
            />
            <FormErrorMessage>
              {this.state.samePassword ? "" : "Hasła nie są identyczne"}
            </FormErrorMessage>
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Imię</FormLabel>
            <FormInput  className="form-control" id="nameInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Nazwisko</FormLabel>
            <FormInput  className="form-control" id="surnameInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Adres</FormLabel>
            <FormInput  className="form-control" id="adressInput" onChange={this.refreshState} />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Data urodzenia</FormLabel>
            <FormInput
              id="dateInput"
              type="date"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Grupa Krwi</FormLabel>
            <select id="bloodGroupInput" onChange={this.refreshState}>
              <option value="AB Rh-"> AB Rh- </option>
              <option value="AB Rh+"> AB Rh+ </option>
              <option value="A Rh-"> A Rh- </option>
              <option value="A Rh+"> A Rh+ </option>
              <option value="B Rh-"> B Rh- </option>
              <option value="B Rh+"> B Rh+ </option>
              <option value="0 Rh-"> 0 Rh- </option>
              <option value="0 Rh+"> AB Rh+ </option>
            </select>
          </FormGroup>
          <FormGroup className="form-group row">
            <FormButton type="submit" onClick={this.onSubmit} className="btn btn-primary">
              Dodaj
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

const FormErrorMessage = styled.div`
  flex: 1;
  padding: 5px;
`;

const ADD_USER_URL = "addUser";
export default AddPatient;
