import React from "react";
import Card from "react-bootstrap/Card";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import contact from "../assets/Images/contactcard.png";
// import contact_banner from "../assets/Images/contact_banner.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function ContactUs() {
  return (
    <div className="text-center">
      <div className="my-5">
        <span className="me-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M9.75 0.75C9.75 5.72056 5.72056 9.75 0.75 9.75C5.72056 9.75 9.75 13.7794 9.75 18.75C9.75 13.7794 13.7794 9.75 18.75 9.75C13.7794 9.75 9.75 5.72056 9.75 0.75Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="me-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M7.65002 0.650024C7.65002 4.51602 4.51602 7.65002 0.650024 7.65002C4.51602 7.65002 7.65002 10.784 7.65002 14.65C7.65002 10.784 10.784 7.65002 14.65 7.65002C10.784 7.65002 7.65002 4.51602 7.65002 0.650024Z"
              stroke="black"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="me-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M5.59998 0.599976C5.59998 3.3614 3.3614 5.59998 0.599976 5.59998C3.3614 5.59998 5.59998 7.83855 5.59998 10.6C5.59998 7.83855 7.83855 5.59998 10.6 5.59998C7.83855 5.59998 5.59998 3.3614 5.59998 0.599976Z"
              stroke="black"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>

      <div>
        <h3 className="cust_cardhead mb-3">Contact Us</h3>
        <p className="txt-aln mb-4">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div>
        <Container className="my-5 py-4">
          <Row className="align-items-center justify-content-center">
            <Col
              lg={6}
              md={6}
              className="text-center d-flex justify-content-center mb-4 mb-md-0"
            >
              <img
                src={contact}
                alt="Home, Car, and Bike"
                className="img-fluid "
              />
            </Col>

            <Col lg={6} md={6}>
              <div className="p-4 bg-white rounded-4 shadow-sm mx-auto">
                <h4 className="fw-bold text-center mb-4 cont-tit">
                  Get in Touch
                </h4>

                <Form>
                  <Row className="mb-3">
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                      <Form.Label className="txt-cont">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="txt-cont">Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="txt-cont">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="txt-cont">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      className="px-5 py-2 fw-semibold rounded-3 btn-clr"
                    >
                      Send
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="contact-info-container mb-5">
          <Row className="justify-content-center">
            <Col md={3} sm={12} className="contact-card">
              <FaPhoneAlt className="contact-icon" />
              <h5 className="contact-title">Phone</h5>
              <p className="contact-detail">+91 9715924021</p>
            </Col>

            <Col
              lg={3}
              md={4}
              sm={12}
              xs={12}
              className="contact-card text-center"
            >
              <FaEnvelope className="contact-icon" />
              <h5 className="contact-title">Email</h5>
              <p className="contact-detail text-break">
                riyanrealators12@gmail.com
              </p>
            </Col>

            <Col md={3} sm={12} className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h5 className="contact-title">Address</h5>
              <p className="contact-detail">
                No 2, Wood Creek County,
                <br />
                Nandambakkam, Chennai
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" text-center mb-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31096.102513009413!2d80.1923108556997!3d13.034855840697892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1762517979703!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
