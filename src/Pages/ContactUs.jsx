import React, { useState } from "react";
import { Row, Col, Button, Container, Form, InputGroup } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import contact from "../assets/Images/contactcard.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMsg(null);

    const templateParams = {
      from_name: formData.name,
      phone: formData.phone,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_4m94hjq",
        "template_dwz7eu4",
        templateParams,
        "29MY0CRzmH67-fY1W"
      )
      .then(
        () => {
          setSending(false);
          setStatusMsg({ type: "success", text: "Message sent successfully!" });
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        () => {
          setSending(false);
          setStatusMsg({
            type: "error",
            text: "Failed to send message. Try again later.",
          });
        }
      );
  };

  return (
    <div className="text-center">
      <div className="my-5">
        <span className="me-1">
          <svg width="20" height="20">
            <path
              opacity="0.5"
              d="M9.75 0.75C9.75 5.72056 5.72056 9.75 0.75 9.75C5.72056 9.75 9.75 13.7794 9.75 18.75C9.75 13.7794 13.7794 9.75 18.75 9.75C13.7794 9.75 9.75 5.72056 9.75 0.75Z"
              stroke="black"
              strokeWidth="1.5"
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

      <Container className="my-5 py-4">
        <Row className="align-items-center justify-content-center">
          <Col lg={6} md={6} className="text-center mb-4">
            <img src={contact} alt="Contact" className="img-fluid" />
          </Col>

          <Col lg={6} md={6}>
            <div className="p-4 bg-white rounded-4 shadow-sm mx-auto">
              <h4 className="fw-bold text-center mb-4 cont-tit">
                Get in Touch
              </h4>

              <Form onSubmit={sendEmail}>
                <Row className="mb-3">
                  <Col xs={12} md={6} className="mb-3 mb-md-0">
                    <Form.Label className="txt-cont">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Label className="txt-cont">Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="^[0-9]{10}$"
                      maxLength="10"
                      required
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="txt-cont">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="txt-cont">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {statusMsg && (
                  <p
                    className={
                      statusMsg.type === "success"
                        ? "text-success fw-semibold"
                        : "text-danger fw-semibold"
                    }
                  >
                    {statusMsg.text}
                  </p>
                )}

                <div className="text-center">
                  <Button
                    variant="primary"
                    className="px-5 py-2 fw-semibold rounded-3 btn-clr border-0"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send"}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="contact-info-container mb-5">
        <Row className="justify-content-center">
          <Col md={3} sm={12} className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h5 className="contact-title">Phone</h5>
            <p className="contact-detail">+91 9715924021</p>
          </Col>

          <Col md={3} sm={12} className="contact-card">
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
              No 2, Wood Creek County, Nandambakkam, Chennai
            </p>
          </Col>
        </Row>
      </Container>

      <div className="text-center mb-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31096.102513009413!2d80.1923108556997!3d13.034855840697892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
