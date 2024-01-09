import React, { Component } from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import "../css/techStack.css";

export default class techStack extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>

        <h3>
          <Badge bg="secondary">Tech Stack</Badge>
        </h3>
        <div className="tech-stack-list">
          <Container>
            <Row>
              <Col className="stack-item type" sm={4}>
                Language:{" "}
              </Col>
              <Col sm={6} className="badge-font">
                <Badge pill variant="dark">
                  Python
                </Badge>{" "}
                
                <Badge pill variant="dark">
                  JavaScript
                </Badge>{" "}
                <Badge pill variant="dark">
                  Java
                </Badge>{" "}
                <Badge pill variant="dark">
                  Kotlin
                </Badge>{" "}
                <Badge pill variant="dark">
                  C#
                </Badge>{" "}
                <Badge pill variant="dark">
                  C
                </Badge>{" "}
                <Badge pill variant="dark">
                  Node.js
                </Badge>{" "}
                <Badge pill variant="dark">
                  Visual Basic
                </Badge>{" "}
              </Col>
            </Row>

            <Row>
              <Col className="stack-item type" sm={4}>
                Database:{" "}
              </Col>
              <Col sm={6} className="badge-font">
                <Badge pill variant="secondary">
                  RDS
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Firebase
                </Badge>{" "}
                <Badge pill variant="secondary">
                  MongoDB
                </Badge>{" "}
              </Col>
            </Row>

            <Row>
              <Col className="stack-item type" sm={4}>
                Framework:{" "}
              </Col>
              <Col sm={6} className="badge-font">
                <Badge pill variant="dark">
                  React
                </Badge>{" "}
                <Badge pill variant="dark">
                  ASP.NET
                </Badge>{" "}
                <Badge pill variant="dark">
                  Beautifulsoup
                </Badge>{" "}
                <Badge pill variant="dark">
                  Bootstrap
                </Badge>{" "}
                <Badge pill variant="dark">
                  Material-UI
                </Badge>{" "}
                <Badge pill variant="dark">
                  Flutter
                </Badge>{" "}
              </Col>
            </Row>

            <Row>
              <Col className="stack-item type" sm={4}>
                Tools:{" "}
              </Col>
              <Col sm={6} className="badge-font">
                <Badge pill variant="secondary">
                  Docker / Containers
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Git
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Figma
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Basecamp
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Trello
                </Badge>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
