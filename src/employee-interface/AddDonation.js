import React from "react";
import styled from "styled-components";
import ApiClient from "../api-client/ApiClient";
import Loader from "../user-interface/Loader";
export class AddDonation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      date: "",
      id: this.props.id
    };
  }

  editUser = () => {
    console.log(this.createUserObject());
    ApiClient.post(EDIT_USER_URL, this.createDonationObject())
      .then(response => {
        console.log(response);
        this.props.closeEditPanel();
      })
      .then(error => {
        console.log(error);
      });
  };

  refreshState = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "dateInput":
        this.setState({
          date: e.target.value
        });
        break;

      case "infoInput":
        this.setState({
          info: e.target.value
        });
        break;

      default:
        break;
    }
  };

  createDonationObject = () => {
    return {
      id: this.props.id,
      info: this.state.info,
      date: this.state.date
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
          Dodaj donację
          <FormGroup className="form-group row">
            <FormLabel>Uwagi</FormLabel>
            <FormInput
              className="form-control"
              id="donationInput"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormLabel>Data donacji</FormLabel>
            <FormInput
              id="dateInput"
              type="date"
              onChange={this.refreshState}
            />
          </FormGroup>
          <FormGroup className="form-group row">
            <FormButton
              type="submit"
              onClick={this.onSubmit}
              className="btn btn-primary"
            >
              Zatwierdź
            </FormButton>
            <FormButton
              type="submit"
              onClick={this.props.closeAddDonation}
              className="btn btn-primary"
            >
              Powrót do panelu pacjenta
            </FormButton>
          </FormGroup>
        </Form>
      </FormContainer>
    );
  };
  render() {
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
    margin: 5px;
    font-size: 130%;
    font-weight: bold;
    min-height:5vh;
    box-shadow: 1px 1px 2px grey;
  
    &:active {
      box-shadow: 0px 0px 0px;
    }
`;

const FormErrorMessage = styled.div`
  flex: 1;
  padding: 5px;
`;

const EDIT_USER_URL = "addDontaion";
export default AddDonation;
