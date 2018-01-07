import React, { Component, PropTypes } from "react";
import Loader from "../user-interface/Loader";
import ApiClient from "../api-client/ApiClient";
import styled from "styled-components";
import Patient from "./Patient";
export class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: ""
    };
  }



  renderLoader = () => {
    return <Loader />;
  };


  renderPatientList = () => {
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
      </tr>
      </thead>
      <tbody>
      {this.state.list.map(p => (
      <Patient patient = {p}/>
    ))}
    </tbody>
  
  </table>
  );
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
