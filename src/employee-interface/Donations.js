import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import ApiClient from "../api-client/ApiClient";
import Loader from "../user-interface/Loader";
export class Donations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      donations: ""
    };
  }

  fetchUserDonations = () => {
    ApiClient.post(DONATIONS, this.createUserObject())
      .then(response => {
        this.setState({ donations: response.data, loading: false });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchUserDonations();
  }
  renderLoader = () => {
    return <Loader />;
  };

  renderDonations = () => {
    if (this.state.donations.length === 0) {
      return <div>Brak donacji</div>;
    } else {
      return (
        <DonationsList>
          <table className="table table-striped">
            <thead className="bg-danger">
              <tr>
                <th>Id donacji</th>
                <th>Data</th>
                <th>Uwagi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.donations.map(p => (
                <tr>
                  <td>{p.IdDonacji}</td>
                  <td>{p.Data}</td>
                  <td>{p.Uwagi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DonationsList>
      );
    }
  };

  renderPatientData = () => {
    return (
      <Div>
      
        <ListContainer>
          <ul className="list-group">
            <li className="list-group-item">Imię</li>
            <li className="list-group-item">Nazwisko</li>
            <li className="list-group-item">Data urodzenia</li>
            <li className="list-group-item">Grupa krwi</li>
            <li className="list-group-item">Adres</li>
          </ul>

          <ul className="list-group">
            <li className="list-group-item">
              {this.props.name ? this.props.name : "brak danych"}{" "}
            </li>
            <li className="list-group-item">
              {this.props.surname ? this.props.surname : "brak danych"}
            </li>
            <li className="list-group-item">
              {this.props.birthDate ? this.props.birthDate : "brak danych"}
            </li>
            <li className="list-group-item">
              {this.props.bloodGroup ? this.props.bloodGroup : "brak danych"}
            </li>
            <li className="list-group-item">
              {this.props.adres ? this.props.adres : "brak danych"}
            </li>
          </ul>
        </ListContainer>
       
        <Button
          onClick={this.props.closeDonations}
          className="btn btn-primary"
        >
          Powrót do listy pacjentów
        </Button>

        <Button
          
          className="btn btn-primary"
        >
          Zmień dane pacjenta
        </Button>

        <Button
          
          className="btn btn-primary"
        >
          Dodaj donację
        </Button>
      </Div>
    );
  };
  createUserObject = () => {
    return { id: this.props.patientId };
  };
  render() {
    return (
      <div>
        <UserDataContainer>
          {this.renderPatientData()}
          
            {this.state.loading ? this.renderLoader() : this.renderDonations()}
          
        </UserDataContainer>
      </div>
    );
  }
}
const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ListContainer = styled.div`
  display: flex;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const DonationsList = styled.div`
  align-self: flex-start;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #35bbff;
  padding: 5px;
  margin:5px;
  font-size: 130%;
  font-weight: bold;
  box-shadow: 1px 1px 2px grey;

  &:active {
    box-shadow: 0px 0px 0px;
  }
`;

const DONATIONS = "donations";
export default Donations;
