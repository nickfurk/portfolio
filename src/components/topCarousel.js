import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import DemoImage from "../images/demo-image.jpg";
import AprilImage from "../images/canva-pic.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
// import Typist from "react-typist";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ResumeFile from "../downloadFile/AprilCheng_Resume.pdf";
import "../css/carousel.css";

export default class TopCarousel extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name="home">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={AprilImage}
                alt="Download CV"
              />
              <div className="divider"></div>
              <Carousel.Caption>
                {/* <h2>
                  <Typist className="typing">Hello, I'm April!</Typist>
                </h2> */}
                {/* <Button variant="dark">
                  Download CV <GetAppIcon />
                </Button>{" "} */}
                <a href={ResumeFile} download>
                  <Button variant="dark">
                    Download CV <GetAppIcon />
                  </Button>{" "}
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src={AprilImage}
                alt="See Projects"
              />
              <Carousel.Caption>
                <br></br>
                <h2 className="typing">I like to build things</h2>
                <Link
                  to="projects"
                  activeClass="active"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button variant="dark">
                    {" "}
                    See Projects <VisibilityIcon />
                  </Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </Element>
      </React.Fragment>
    );
  }
}
