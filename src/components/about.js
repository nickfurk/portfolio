import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import "../css/about.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name="about">
          <div id="about-container">
            <br></br>
            <br></br>
            <h1>
              <Badge bg="secondary">Who am I?</Badge>
            </h1>
            <div>
              <p className="who-am-I">
                I am a <b>Computer Systems Technology</b> student at BCIT with
                the aspiration to build great things. With 5 years of sales and
                marketing experience in the tech industry, I know that{" "}
                <b>a well built product sells itself</b>. Being tired of selling
                products that cannot meet customers technical need, I've decided
                to change career path so that I could create things that is
                useful and impactful.
              </p>
            </div>
          </div>
        </Element>
      </React.Fragment>
    );
  }
}
