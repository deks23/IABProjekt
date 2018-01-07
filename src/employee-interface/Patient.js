import React, { Component, PropTypes } from "react";
import styled from "styled-components";

export class Patient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.patient.Id}</td>
        <td>{this.props.patient.Imie}</td>
        <td>{this.props.patient.Nazwisko}</td>
        <td>{this.props.patient.DataUrodzenia}</td>
        <td>{this.props.patient.NazwaGrupyKrwi}</td>
        <td>{this.props.patient.Adres}</td>
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
