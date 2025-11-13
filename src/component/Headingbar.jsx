import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import banner from "../assets/Images/Home_banner.png";
import Enqire from "../Pages/Enqire";
import logo from "../assets/Images/logo.png"; 

function Headingbar() {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <h3 className="cust_par fs-3 fs-md-2 fs-lg-1">
              Buy Homes, Cars, and Bikes with{" "}
              <br className="d-none d-md-block" /> Ease — One Platform
            </h3>
            <p className="cust_des fs-6 fs-md-5 fs-lg-4">
              Discover a wide range of verified homes, cars, and bikes — all in
              one trusted place. Browse, compare, and buy with confidence,
              anytime and anywhere.
            </p>
            <Button className="get_started_btn fs-6 fs-md-5 fs-lg-4 border-0">
              Get Started
            </Button>
          </>
        );
      case "listings":
        return (
          <>
            <h3 className="cust_par fs-3 fs-md-2 fs-lg-1">Listings</h3>
            <p className="cust_des fs-6 fs-md-5 fs-lg-4">
              Discover a wide range of verified homes, cars, and bikes – all in
              one trusted place. Browse, compare, and buy with confidence,
              anytime and anywhere.
            </p>
            <Button className="get_started_btn fs-6 fs-md-5 fs-lg-4 border-0">
              Know More
            </Button>
          </>
        );
      case "contact":
        return (
          <>
            <h3 className="cust_par fs-3 fs-md-2 fs-lg-1">Contact Us</h3>
            <p className="cust_des fs-6 fs-md-5 fs-lg-4">
              Discover a wide range of verified homes, cars, and bikes – all in
              one trusted place. Browse, compare, and buy with confidence,
              anytime and anywhere.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hero-section">
      <Row className="g-0">
        <Col md={12}>
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary custom_nav"
          >
            <Container>
              <Navbar.Brand
  href="#home"
  className="d-flex align-items-center"
>
  <img 
    src={logo} 
    alt="Riyan Realtors Logo" 
    className="nav-logo"
  />
</Navbar.Brand>


              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="align-items-center">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={`custom_txt fs-6 fs-md-5 fs-lg-4 ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("home")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/listings"
                    className={`custom_txt fs-6 fs-md-5 fs-lg-4 ${
                      location.pathname === "/listings" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("listings")}
                  >
                    Listings
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className={`custom_txt fs-6 fs-md-5 fs-lg-4 ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact Us
                  </Nav.Link>

                  <Button
                    className="get-in-touch-btn ms-2 mt-2 mt-lg-0 fs-6 fs-md-5 fs-lg-4"
                    onClick={handleShow}
                  >
                    Enquiry Now!
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Row className="align-items-center custom_image_section_head">
        <Col
          md={6}
          sm={12}
          className="text-center text-md-start p-5"
        >
          {renderContent()}
        </Col>
        <Col md={6} sm={12} className="custom_image">
          <Image className="flip_img" src={banner} alt="Hero" fluid />
        </Col>
      </Row>

   
      <Enqire show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Headingbar;
