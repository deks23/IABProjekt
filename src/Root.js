import React, { Component, PropTypes } from "react";
import Header from "./user-interface/Header";
import styled from "styled-components";

export class Root extends Component {
  render() {
    let renderData = this.props.children;
    return (
      <div>
        <div className="container">
          <div className="col-xs-10">
            <Header />
          </div>
        </div>
        <Container className="row">
          <div >{this.props.children}</div>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content:center
`;
export default Root;
