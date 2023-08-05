import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import "../css/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import FaceIcon from "@material-ui/icons/Face";
import MapleLeaf from "../images/maple-leaf.png";
import Typewriter from "typewriter-effect";
import SnowboardTrip from "../images/snowboard_trip.jpeg";



export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name="about">
          <div
            id="about-container"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1>
              <Badge bg="secondary">Hi, I'm April!</Badge>
              <FaceIcon />
            </h1>

          <div className="typewriter-text"> 
          <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Business Development",
                    "Lifetime Learner",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
                className="typewriter-text"
              />
              </div>

              <br></br>

              <img
                  src={SnowboardTrip}
                  alt="Picture of April in winter jacket"
                  className="snowboard-img"
              />    

            <div className="container">
              <p className="who-am-I">
                I'm a <b>Computer Systems Technology</b> student at BCIT, expecting to graduate in Dec 2023. 
                My background is in science and business development, and now, with my technical skills, 
                I hope to bring these experiences together to buid something impactful.
              </p>

              <p>
                <img src={MapleLeaf} className="maple"></img> Canada |
                Greater Vancouver area{" "}
                <img src={MapleLeaf} className="maple"></img>
              </p>
            </div>
          </div>
        </Element>
      </React.Fragment>
    );
  }
}
