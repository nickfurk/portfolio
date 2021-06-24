import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import DemoImage from "../images/demo-image.jpg";

export default class About extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={DemoImage} alt="Download CV" />
          <Carousel.Caption>
            <h3>Hi, I'm April</h3>
            <Button variant="dark">Download CV</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={DemoImage} alt="See Projects" />

          <Carousel.Caption>
            <h3>I like to build things</h3>
            <Button variant="dark">See Projects</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
