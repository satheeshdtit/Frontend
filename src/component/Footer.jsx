import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Footer = ({ onNavigate }) => {
  const navigate = useNavigate();

 const nav = (e, section, tab = null, route = null) => {
  e.preventDefault();

  if (route) {
    navigate(route);
    if (typeof onNavigate === "function") onNavigate(section, tab);
    return;
  }

  if (window.location.pathname !== "/") {
    navigate("/", {
      state: { section, tab }
    });
    return;
  }

  if (typeof onNavigate === "function") onNavigate(section, tab);
};


  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col md={6} sm={12} className="footer-logo d-flex align-items-center">
            <img src={logo} alt="Riyan Realtors Logo" className="footer-logo-img" />
          </Col>

          <Col md={3} sm={12} className="footer-links">
            <ul>
              <li>
                <a href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="#!" onClick={(e) => nav(e, "about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" onClick={(e) => nav(e, "property", "Property")}>
                  Property
                </a>
              </li>
              <li>
                <a href="#!" onClick={(e) => nav(e, "cars", "Car")}>
                  Cars
                </a>
              </li>
              <li>
                <a href="#!" onClick={(e) => nav(e, "bikes", "Bike")}>
                  Bikes
                </a>
              </li>
              <li>
                <a href="#!" onClick={(e) => nav(e, "contact", null, "/contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={12} className="footer-links">
            <ul>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">Help Center</a></li>
              <li><a href="#!">FAQs</a></li>
              <li><a href="#!">Terms of Service</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Report a Problem</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2025 EstateA All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
