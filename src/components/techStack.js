import React, { Component } from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import "../css/techStack.css";

export default class techStack extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge bg="secondary">Tech Stack</Badge>
        </h3>
        <div className="tech-stack-list">
          <Container>
            <Row>
              <Col className="stack-item" sm={2}>
                Language:{" "}
              </Col>
              <Col sm={8}>
                <Badge pill variant="dark">
                  Python
                </Badge>{" "}
                <Badge pill variant="dark">
                  JavaScript
                </Badge>{" "}
                <Badge pill variant="dark">
                  node.js
                </Badge>{" "}
              </Col>
            </Row>

            <Row>
              <Col className="stack-item" sm={2}>
                Database:{" "}
              </Col>
              <Col sm={8}>
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
              <Col className="stack-item" sm={2}>
                Framework:{" "}
              </Col>
              <Col sm={8}>
                <Badge pill variant="dark">
                  React
                </Badge>{" "}
                <Badge pill variant="dark">
                  express.js
                </Badge>{" "}
                <Badge pill variant="dark">
                  Beautifulsoup
                </Badge>{" "}
                <Badge pill variant="dark">
                  Bootstrap
                </Badge>{" "}
              </Col>
            </Row>

            <Row>
              <Col className="stack-item" sm={2}>
                Tools:{" "}
              </Col>
              <Col sm={8}>
                <Badge pill variant="secondary">
                  Docker / Containers
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Figma
                </Badge>{" "}
                <Badge pill variant="secondary">
                  Basecamp
                </Badge>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
