import React, { Component, Link } from "react";
import { Badge, Form, Button, Container, Row, Col } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/connect.css";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

export default class Connect extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>
          <Badge bg="secondary">Connect</Badge>
          <EmojiPeopleIcon />
        </h1>

        <Button variant="secondary" className="connect-buttons">
          <GitHubIcon /> GitHub
        </Button>
        <Button variant="secondary" className="connect-buttons">
          <LinkedInIcon /> LinkedIn
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
