import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { fontFamily } from "@material-ui/system";

const ScrollLink = Scroll.ScrollLink;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  handleNavItemClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expanded={!this.state.collapsed}
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="/" style={{fontFamily: 'Inter'}}>april cheng</Navbar.Brand>

          <Navbar.Toggle
            onClick={this.handleNavItemClick}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="about"
                  activeClass="active"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.handleNavItemClick}
                >
                  About
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="projects"
                  activeClass="active"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.handleNavItemClick}
                >
                  Projects
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() =>
                  window.open("https://github.com/nickfurk", "_blank")
                }
              >
                <GitHubIcon />
              </Nav.Link>

              <Nav.Link
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aprilcheng419/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}