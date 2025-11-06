import React from 'react'
import Card from "react-bootstrap/Card";
import { Row, Col, Button, Container, Form, InputGroup, Dropdown } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import contact from '../assets/Images/contactcard.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function ContactUs() {
  return (
    <div className='my-5 text-center'>

      <div >
        <span className='me-1'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M9.75 0.75C9.75 5.72056 5.72056 9.75 0.75 9.75C5.72056 9.75 9.75 13.7794 9.75 18.75C9.75 13.7794 13.7794 9.75 18.75 9.75C13.7794 9.75 9.75 5.72056 9.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg></span>
        <span className='me-1'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M7.65002 0.650024C7.65002 4.51602 4.51602 7.65002 0.650024 7.65002C4.51602 7.65002 7.65002 10.784 7.65002 14.65C7.65002 10.784 10.784 7.65002 14.65 7.65002C10.784 7.65002 7.65002 4.51602 7.65002 0.650024Z" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </span>
        <span className='me-1'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M5.59998 0.599976C5.59998 3.3614 3.3614 5.59998 0.599976 5.59998C3.3614 5.59998 5.59998 7.83855 5.59998 10.6C5.59998 7.83855 7.83855 5.59998 10.6 5.59998C7.83855 5.59998 5.59998 3.3614 5.59998 0.599976Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
            <h4 className="fw-bold text-center mb-4 cont-tit">Get in Touch</h4>

            <Form>
              <Row className="mb-3">
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <Form.Label className="txt-aln">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label className="txt-aln">Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="txt-aln">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="txt-aln">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="primary"
                  className="px-5 py-2 fw-semibold rounded-3"
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
        <Container className="contact-info-container">
      <Row className="justify-content-center">
        <Col md={3} sm={12} className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h5 className="contact-title">Phone</h5>
          <p className="contact-detail">+91 9715924021</p>
        </Col>

        <Col md={3} sm={12} className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h5 className="contact-title">Email</h5>
          <p className="contact-detail">riyanrealators12@gmail.com</p>
        </Col>

        <Col md={3} sm={12} className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h5 className="contact-title">Address</h5>
          <p className="contact-detail">
            No 2, Wood Creek County,<br />
            Nandambakkam, Chennai
          </p>
        </Col>
      </Row>
    </Container>
      </div>
        <div className="my-5 text-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.7931674709266!2d80.18460954059948!3d13.010660667505054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260caa7aa0a23%3A0xf80a87885830c36c!2s2%2C%20Ramapuram%2C%20Wood%20Creek%20County%2C%20Tulasingapuram%2C%20Nandambakkam%2C%20Tamil%20Nadu%20600016!5e1!3m2!1sen!2sin!4v1762342280985!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </div>
  )
}

export default ContactUs