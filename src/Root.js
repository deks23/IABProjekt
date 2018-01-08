import React, { Component, PropTypes } from "react";
import Header from "./user-interface/Header";
import styled from "styled-components";

export class Root extends Component {
  render() {
    
    return (
      <RootDiv  className="container">
        <div>
          <div>
          <Header />
          </div>
        </div>
        <Container className="container">
          <Div>
            <div>{this.props.children}</div>
          </Div>
        </Container>
      </RootDiv>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const Div = styled.div`
  width: 100vw;
  height: 100%;
  min-height:100vh;
`;
const RootDiv = styled.div`
  display:flex;
  flex-direction:column;
 
`;
export default Root;
