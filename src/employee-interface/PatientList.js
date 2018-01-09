import React, { Component, PropTypes } from "react";
import Loader from "../user-interface/Loader";
import ApiClient from "../api-client/ApiClient";
import styled from "styled-components";
import Patient from "./Patient";
import { Donations } from "./Donations";
export class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: "",
      showDonations: false,
      showList: true,
      id: 0,
      bloodGroup: "",
      name: "",
      surname: "",
      birthDate: "",
      adres: ""
    };
  }

  showDonations = (
    id,
    imie,
    nazwisko,
    dataUrodzenia,
    NazwaGrupyKrwi,
    Adres
  ) => {
    this.setState({
      showDonations: true,
      showList: false,
      id: id,
      bloodGroup: NazwaGrupyKrwi,
      name: imie,
      surname: nazwisko,
      birthDate: dataUrodzenia,
      adres: Adres
    });
  };

  closeDonations = () => {
    this.setState({ showDonations: false, showList: true });
  };

  renderLoader = () => {
    return <Loader />;
  };

  renderPatientList = () => {
    if (this.state.showList) {
      return (
        <table className="table table-striped">
          <thead>
            <tr className="bg-danger">
              <th>Id</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Data urodzenia</th>
              <th>Grupa krwi</th>
              <th>Adres</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(p => (
              <Patient patient={p} showDonations={this.showDonations} show />
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <Donations
          closeDonations={this.closeDonations}
          patientId={this.state.id}
          name={this.state.name}
          surname={this.state.surname}
          bloodGroup={this.state.bloodGroup}
          adres={this.state.adres}
          birthDate={this.state.birthDate}
        >
          qwe
        </Donations>
      );
    }
  };

  fetchPatientList = () => {
    ApiClient.get(LIST)
      .then(response => {
        this.setState({ list: response.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchPatientList();
  }

  render() {
    return (
      <div>
        {this.state.loading ? this.renderLoader() : this.renderPatientList()}
      </div>
    );
  }
}

const PatientListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LIST = "patientList";
export default PatientList;
