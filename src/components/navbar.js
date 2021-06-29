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

const ScrollLink = Scroll.ScrollLink;

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="home">April Cheng</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="about"
                  activeClass="active"
                  smooth={true}
                  offset={-70}
                  duration={500}
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
                >
                  Projects
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Link>

              {/* <Nav.Link href="about">About</Nav.Link> */}
              {/* <Nav.Link href="#">Projects</Nav.Link> */}
              {/* <Nav.Link href="#contact">Contact</Nav.Link> */}

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/nickfurk">
                <GitHubIcon />
              </Nav.Link>
              <Nav.Link href="#deets">
                <LinkedInIcon />
              </Nav.Link>

              {/* <Nav.Link eventKey={2} href="#memes">
              LinkedIn
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
