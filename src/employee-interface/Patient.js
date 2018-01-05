import React, { Component, PropTypes } from 'react';
import styled from "styled-components";

export class Patient extends Component { 
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Element>{this.props.patient.Imie} {this.props.patient.Nazwisko} {this.props.patient.DataUrodzenia} {this.props.patient.NazwaGrupyKrwi} {this.props.patient.Adres} </Element>
    );
  }
}
const Element = styled.div`
       
       background-color: #448de9;
       margin: 10px;
       padding: 20px;
       border-radius: 5px;
`

export default Patient;