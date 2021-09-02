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

            <h1>
              <Badge bg="secondary">Who am I?</Badge>
              <FaceIcon />
            </h1>

            <div>
              <p className="who-am-I">
                I am a <b>Computer Systems Technology</b> student at BCIT, and
                was a business development manager at an AWS consulting partner.
                Transitioning from a business role to a technical role, I aspire
                to build products to solve customers' problems.
              </p>

              <p>
                <img src={MapleLeaf} className="maple"></img> Canadian citizen |
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
