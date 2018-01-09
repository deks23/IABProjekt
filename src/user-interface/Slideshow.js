import React, { Component, PropTypes } from "react";
import Slider from 'react-slick';
import styled from "styled-components";

class Slideshow extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
        };
        return (
          <Container>
            
            <Slider {...settings}>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
              <div><h3>5</h3></div>
              <div><h3>6</h3></div>
            </Slider>
          </Container>
        );
      }
}

const Container = styled.div`
display:flex;
flex-direction: row;
`
export default Slideshow