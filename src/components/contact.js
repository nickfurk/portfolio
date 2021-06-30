import React, { Component, useState } from "react";
import { Badge, Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import emailjs from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import "../css/contact.css";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_4k5v87j",
        "template_ks76n98",
        event.target,
        "user_oPmPKHYnfWBqxlppctPvQ"
      )
      .then(
        (result) => {
          setOpen(true);
          console.log(result.text);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <React.Fragment>
      <Element name="contact">
        <div>
          <br></br>
          <br></br>

          <br></br>

          <h1>
            <Badge bg="secondary">Contact</Badge>
            <ContactMailIcon />
          </h1>

          <p>If you would like to contact me. Fill in the form below.</p>

          <div>
            <Form onSubmit={sendEmail}>
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
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
                    name="message"
                    required
                  />
                </Form.Group>

                <Button variant="outline-secondary" type="submit" value="Send">
                  Send Message
                </Button>
              </Container>
            </Form>
          </div>
          <br></br>

          <div className="contact-toast">
            <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Message has been successfully sent.
              </Alert>
            </Snackbar>
          </div>
          <br></br>
          <br></br>
        </div>
      </Element>
    </React.Fragment>
  );
}
