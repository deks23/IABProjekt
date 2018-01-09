import React, { Component, PropTypes } from "react";
import ApiClient from "./api-client/ApiClient.js";
import Header from "./user-interface/Header";
import { connect } from "react-redux";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import Slideshow from "react-slidez";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false
    };
  }
  
  render() {
    
    return (
      <Container>
        <Title>Witamy w ogólnopolskim systemie krwiodawstwa</Title>
        <Div>
        <ImageGallery items={images} sizes = {200, 200} />
        </Div>
      
      </Container>
    );
  }
}
const images = [
  {
    original: "http://static.prsa.pl/images/967aab21-660d-4833-a09b-ee26dafdd56e.jpg",
    thumbnail: "http://static.prsa.pl/images/967aab21-660d-4833-a09b-ee26dafdd56e.jpg",
  },
  {
    original: 'http://radio.opole.pl/public/info/2017/2017-10-24_150886494421.jpg',
    thumbnail: 'http://radio.opole.pl/public/info/2017/2017-10-24_150886494421.jpg'
  }
]
const mapStateToProps = currentState => {
  console.log(currentState);
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};

const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  height: 100vh;
`;
const Div = styled.div`
  background-color: grey;
  height:100px;
  text-align: center;
`;


const Title = styled.h1`
  text-align: center;
`;
export default connect(mapStateToProps)(Home);
