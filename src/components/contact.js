import React, { Component, useState } from "react";
import {
  Badge,
  Form,
  Button,
  Container,
  Row,
  Col,
  Toast,
} from "react-bootstrap";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import emailjs from "emailjs-com";

export default function Contact() {
  const [show, setShow] = useState(false);

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
          setShow(true);
          console.log(result.text);
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
                    {/* <input type="text" name="name" /> */}

                    <Form.Group className="mb-3">
                      <Form.Control
                        // readOnly
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
            <Toast onClose={() => setShow(false)} show={show}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Message Sent</strong>
              </Toast.Header>
              <Toast.Body>
                {/* <Toast.Body className={variant === "Dark" && "text-white"}> */}
                Thanks for reaching out. I will get back to you shortly.
              </Toast.Body>
            </Toast>
          </div>
          <br></br>
          <br></br>
        </div>
      </Element>
    </React.Fragment>
  );
}

//   render() {
//     return (
//       <React.Fragment>
//         <Element name="contact">
//           <div>
//             <br></br>
//             <br></br>
//             <br></br>

//             <h1>
//               <Badge bg="secondary">Contact</Badge>
//               <ContactMailIcon />
//             </h1>

//             <p>If you would like to contact me. Fill in the form below.</p>

//             <div>
//               <Form>
//                 <Container>
//                   <Row>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Control type="text" placeholder="Name" />
//                       </Form.Group>
//                     </Col>

//                     <Col>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Control
//                           type="email"
//                           placeholder="Email"
//                           required
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       placeholder="Message"
//                       required
//                     />
//                   </Form.Group>
//                   <Button variant="outline-secondary" type="submit">
//                     Send Message
//                   </Button>
//                 </Container>
//               </Form>
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//           </div>
//         </Element>
//       </React.Fragment>
//     );
//   }
// }
