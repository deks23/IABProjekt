import React from "react";
import styled from "styled-components";
import ApiClient from "../api-client/ApiClient";
import Loader from "../user-interface/Loader";
export class UpdatePatientData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      surname: this.props.surname,
      birthDate: this.props.birthDate,
      bloodGroup: this.props.bloodGroup,
      adres: this.props.adres,
      loading: false
    };
  }

  editUser = () => {
      console.log(this.createUserObject());
    ApiClient.post(EDIT_USER_URL, this.createUserObject())
      .then(response => {
        console.log(response);
        this.props.closeEditPanel();
      })
      .then(error => {
        console.log(error);
      });
  };

  renderUserAdded = () => {
    return <div> Pacjent dodany </div>;
  };

  refreshState = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "emailInput":
        this.setState({
          email: e.target.value
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
      case "adresInput":
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
      id: this.props.id,
      imie: this.state.name,
      nazwisko: this.state.surname,
      dataUrodzenia: this.state.birthDate,
      grupaKrwi: this.state.bloodGroup,
      adres: this.state.adres
    };
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.editUser();
  };

  renderLoader = () => {
    return <Loader />;
  };

  renderForm = () => {
    return (
      <FormContainer>
        <Form>
          Edytuj dane pacjenta
          <FormGroup className="form-group row">
            <FormLabel>Imię</FormLabel>
            <FormInput
              className="form-control"
              id="nameInput"
              onChange={this.refreshState}
              placeholder={this.props.name}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Nazwisko</FormLabel>
            <FormInput
              className="form-control"
              id="surnameInput"
              onChange={this.refreshState}
              placeholder={this.props.surname}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Adres</FormLabel>
            <FormInput
              className="form-control"
              id="adresInput"
              onChange={this.refreshState}
              placeholder={this.props.adres}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Data urodzenia</FormLabel>
            <FormInput
              id="dateInput"
              type="date"
              onChange={this.refreshState}
              placeholder={this.props.birthDate}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Grupa Krwi</FormLabel>
            <select id="bloodGroupInput" onChange={this.refreshState} >
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
            <FormButton
              type="submit"
              onClick={this.onSubmit}
              className="btn btn-primary"
            >
              Zatwierdź
            </FormButton>
          </FormGroup>
          <FormGroup className="form-group row">
            <FormButton
              type="submit"
              onClick={this.props.closeEditPanel}
              className="btn btn-primary"
            >
              Powrót do pacjenta
            </FormButton>
          </FormGroup>
        </Form>
      </FormContainer>
    );
  };
  render() {
      console.log("add");
    return (
      <div>{this.state.loading ? this.renderLoader() : this.renderForm()}</div>
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
  background-color: #b2e3ff;
  box-shadow: 1px 1px 2px grey;
  text-align: center;
  font-size: 90%;
  padding: 5px;
`;

const FormButton = styled.button`
  flex: 1;

  border: none;
  background-color: #35bbff;
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

const EDIT_USER_URL = "changePatientData";
export default UpdatePatientData;
