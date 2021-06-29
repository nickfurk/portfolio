import React, { Component } from "react";
import { Badge, Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name="contact">
          <div>
            <br></br>
            <br></br>
            <br></br>

            <h1>
              <Badge bg="secondary">Contact</Badge>
            </h1>
            <p>If you would like to contact me. Fill in the form below.</p>

            <div>
              <Form>
                <Container>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      required
                    />
                  </Form.Group>
                  <Button variant="outline-secondary" type="submit">
                    Send Message
                  </Button>
                </Container>
              </Form>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Element>
      </React.Fragment>
    );
  }
}
