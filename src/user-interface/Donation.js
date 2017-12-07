import React, { Component } from 'react';
import styled from "styled-components";
export default class Donation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return <Element>{this.props.date} {this.props.comment} </Element>
    }
}

const Element = styled.div`
       flexDirection: column;
`