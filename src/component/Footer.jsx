import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          {/* Logo / Brand */}
          <Col md={6} sm={12} className="footer-logo">
            <h3>Riyanrealators</h3>
          </Col>

          {/* Left Menu */}
          <Col md={3} sm={6} className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About US</a></li>
              <li><a href="/property">Property</a></li>
              <li><a href="/cars">Cars</a></li>
              <li><a href="/bike">Bike</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* Right Menu */}
          <Col md={3} sm={6} className="footer-links">
            <ul>
              <li><a href="/support">Support</a></li>
              <li><a href="/help">Help center</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/report">Report a Problem</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2025 EstateA All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
