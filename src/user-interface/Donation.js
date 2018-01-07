import React, { Component } from "react";
import styled from "styled-components";
export default class Donation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <tr>
      <td>{this.props.date}</td>
      <td>{this.props.comment} </td>
    </tr>)
  }
}

const tab = styled.td`
  background-color: #448de9;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
`;
