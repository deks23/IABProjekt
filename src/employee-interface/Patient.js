import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import Donations from "./Donations";
export class Patient extends Component {
  constructor(props) {
    super(props);
  }

  donations = () => {
    this.props.showDonations(
      this.props.patient.Id,
      this.props.patient.Imie,
      this.props.patient.Nazwisko,
      this.props.patient.DataUrodzenia,
      this.props.patient.NazwaGrupyKrwi,
      this.props.patient.Adres
    );
  };
  render() {
    return (
      <tr>
        <td>{this.props.patient.Id}</td>
        <td>{this.props.patient.Imie}</td>
        <td>{this.props.patient.Nazwisko}</td>
        <td>{this.props.patient.DataUrodzenia}</td>
        <td>{this.props.patient.NazwaGrupyKrwi}</td>
        <td>{this.props.patient.Adres}</td>
        <td>
          <button onClick={this.donations}>Donacje</button>
        </td>
      </tr>
    );
  }
}
const Element = styled.div`
  background-color: #448de9;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
`;

export default Patient;
