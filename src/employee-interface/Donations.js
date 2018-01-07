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
      return <div>meh</div>;
    }
  };

  renderPatientData = () => {
    return (
      <div>
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
      </div>
    );
  };
  createUserObject = () => {
    return { id: this.props.patientId };
  };
  render() {
    return (
      <div>
        <button onClick={this.props.closeDonations}>
          Powrót do listy dawców
        </button>
        <UserDataContainer>
          {this.renderPatientData()}
          <div>
            {this.state.loading ? this.renderLoader() : this.renderDonations()}
          </div>
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
const DONATIONS = "donations";
export default Donations;
