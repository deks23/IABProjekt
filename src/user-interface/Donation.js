import React, { Component } from 'react';
import styled from "styled-components";
export default class Donation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        return <Element>{this.props.date} {this.props.comment} </Element>
    }
}

const Element = styled.div`
       
       background-color: #448de9;
       margin: 10px;
       padding: 20px;
       border-radius: 5px;
`