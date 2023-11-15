import React, { Component } from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import "../css/certs.css";

export default class Certs extends Component {
  render() {
    return (
      <div>
        <br></br>

        <h3>
          <Badge bg="secondary">Certifications</Badge>
        </h3>

        <div className="cert-list container">
          <Container>
            <Row>
              <Col className="type custom-col" sm={4}>AWS: </Col>
              <Col sm={6}>
                <Badge pill variant="info">
                  Certified Solutions Architect - Associate (exp 2020)
                </Badge>{" "}
                <Badge pill variant="info">
                  Certified Solutions Architect - Professional (exp 2020)
                </Badge>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
