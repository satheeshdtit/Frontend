import React from 'react'
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col, Image, CardBody, Button, Container, Modal, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaEye } from "react-icons/fa";
import car from "../assets/Images/carlogo.png";
import bike from '../assets/Images/bikelogo.png';
import house from '../assets/Images/houselogo.png';
import Images from '../assets/Images/image.png';
import shield from '../assets/Images/shield.png';
import house1 from '../assets/Images/house1.jpeg';
import house2 from '../assets/Images/house2.jpeg';
import house3 from '../assets/Images/house3.jpeg';
import bike1 from '../assets/Images/bike1.jpeg';
import bike2 from '../assets/Images/bike2.jpeg';
import bike3 from '../assets/Images/bike3.jpeg';
import car1 from '../assets/Images/car1.jpeg';
import car2 from '../assets/Images/car2.jpeg';
import car3 from '../assets/Images/car3.jpeg';
import profile from '../assets/Images/profile.jpg';
function Home() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const handleClose = () => setShowModal(false);
    const handleShow = (property) => {
        setSelectedProperty(property);
        setShowModal(true);
    };
    const [activeTab, setActiveTab] = useState("All");
    const properties = [
        {
            id: 1,
            type: "Property",
            image: house1,
            price: "950,000",
            location: "Vadapalani | Chennai",
            beds: 3,
            baths: 2,
            area: 1400,
        },
        {
            id: 2,
            type: "Property",
            image: house2,
            price: "950,000",
            location: "Guindy | Chennai",
            beds: 3,
            baths: 2,
            area: 1400,
        },
        {
            id: 3,
            type: "Property",
            image: house3,
            price: "950,000",
            location: "Avadi | Chennai",
            beds: 3,
            baths: 2,
            area: 1400,
        },


        {
            id: 4,
            type: "Car",
            image: car1,
            price: "1,300,000",
            location: "Nungambakkam | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },
        {
            id: 5,
            type: "Car",
            image: car2,
            price: "1,800,000",
            location: "Guindy | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },
        {
            id: 6,
            type: "Car",
            image: car3,
            price: "1,300,000",
            location: "Nungambakkam | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },
        {
            id: 7,
            type: "Bike",
            image: bike1,
            price: "1,800,000",
            location: "Guindy | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },
        {
            id: 8,
            type: "Bike",
            image: bike2,
            price: "1,300,000",
            location: "Nungambakkam | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },
        {
            id: 9,
            type: "Bike",
            image: bike3,
            price: "1,800,000",
            location: "Guindy | Chennai",
            model: 2020,
            brand: "BMW",
            kilometer: 22000,
        },

    ];

    const filteredData =
        activeTab === "All"
            ? properties
            : properties.filter((item) => item.type === activeTab);

    return (

        // Welcome Note

        <div className='my-5 text-center'>
            <h3 className='header'>Welcome to Riyanrealtors</h3>
            <Card className='border-0'>
                <Card.Body>
                    <Card.Title className='cust_cardhead'>Everything should be this easy.</Card.Title>
                    <div>

                        <Row>

                            <Col md={4}>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='card-img' variant="top" src={house} />
                                        <Card.Body>
                                            <Card.Title className='card-tit'>Property Sales</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='card-img' variant="top" src={car} />
                                        <Card.Body>
                                            <Card.Title className='card-tit'>Cars</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>

                            </Col>

                            <Col md={4}>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='card-img' variant="top" src={bike} />
                                        <Card.Body>
                                            <Card.Title className='card-tit'>Bikes</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>


                        </Row>
                    </div>

                </Card.Body>
            </Card>
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

            {/* description */}
            <div>

                <div style={{ overflowX: 'hidden' }}>
                    <Card className='border-0 mt-5'>
                        <Card.Title className='cust_cardhead'>We are a global, boutique real estate brokerage</Card.Title>
                        <CardBody>
                            <div className='my-3'>
                                <Row>

                                    <Col md={6}>
                                        <div>
                                            <Card className='border-0 '>
                                                <Card.Body>
                                                    <Card.Title className='title'>The transfer of real estate</Card.Title>

                                                    <Card.Text className='txt-crd'>
                                                        Welcome to <b>Riyanrealtors</b> your trusted partner in property solutions and vehicle rentals.
                                                        We are committed to simplifying the way people buy properties and rent vehicles by offering reliable, transparent, and customer-friendly services.


                                                    </Card.Text>
                                                    <Button className='me-2 btn-align'>Enquiry Now!</Button>
                                                    <Button className='btn-align2'> Read More</Button>

                                                    <div className='p-5'>
                                                        <Row>
                                                            <Col md={4}><span className='cust_count'>12+</span>
                                                                <p className='txt-aln'>Customers</p>
                                                            </Col>

                                                            <Col md={4}><span className='cust_count'>14+</span>
                                                                <p className='txt-aln'>Sales</p></Col>
                                                            <Col md={4}><span className='cust_count'>18+</span>
                                                                <p className='txt-aln'>Rental</p>
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col md={6}>

                                        <div className='d-flex '>
                                            <Card className='border-0'>
                                                <CardBody>
                                                    <img src={Images}></img>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </CardBody>
                    </Card>
                </div>
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



            </div>
            {/* our services */}

            <div className="text-center my-5">
                <h3 className="cust_cardhead mb-3">Our Services</h3>
                <p className="txt-aln mb-4">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
                </p>

                <div className="d-flex justify-content-center">
                    <Nav
                        variant="pills"
                        defaultActiveKey="property"
                        className="custom-nav flex-wrap justify-content-center"
                        activeKey={activeTab}

                        onSelect={(selectedKey) => setActiveTab(selectedKey)}
                    >
                        <Nav.Item className="m-2">
                            <Nav.Link eventKey="Property">Property</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="m-2">
                            <Nav.Link eventKey="Car">Cars</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="m-2">
                            <Nav.Link eventKey="Bike">Bikes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <div>

                {/* ✅ Filtered Data Display */}
                <Container className="my-5">
                    {/* <h3 className="text-center fw-semibold mb-4">
                        {activeTab === "All" ? "Featured Listings" : `Featured ${activeTab}s`}
                    </h3> */}
                    <Row className="g-4">
                        {filteredData.map((p) => (
                            <Col key={p.id} xs={12} sm={6} lg={4}>
                                <Card className="property-card shadow-sm border-0 h-100">
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={p.image}
                                            alt={p.location}
                                            className="object-fit-cover"
                                            style={{ height: "220px" }}
                                        />
                                        {/* <FaHeart className="favorite-icon position-absolute top-0 end-0 m-3 text-danger" /> */}
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="fw-semibold fs-5 mb-1">
                                            ₹{p.price}
                                        </Card.Title>
                                        <Card.Subtitle className="text-muted mb-3 fs-6">
                                            {p.location}
                                        </Card.Subtitle>

                                        {/* Property Info */}
                                        {p.type === "Property" && (
                                            <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                                                <span>
                                                    <FaBed className="me-1" /> {p.beds} Beds
                                                </span>
                                                <span>
                                                    <FaBath className="me-1" /> {p.baths} Baths
                                                </span>
                                                <span>
                                                    <FaRulerCombined className="me-1" /> {p.area} sq ft
                                                </span>
                                            </div>
                                        )}

                                        {/* Car Info */}
                                        {p.type === "Car" && (
                                            <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                                                <span>Model: {p.model}</span>
                                                <span>Brand: {p.brand}</span>
                                                <span>{p.kilometer} km</span>
                                            </div>
                                        )}

                                        {/* Bike Info */}
                                        {p.type === "Bike" && (
                                            <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                                                <span>Model: {p.model}</span>
                                                <span>Brand: {p.brand}</span>
                                                <span>{p.kilometer} km</span>
                                            </div>
                                        )}

                                        <div className="d-flex gap-2">
                                            <Button variant="primary" className="flex-fill enquiry-btn">
                                                Enquiry Now
                                            </Button>
                                            <Button
                                                variant="outline-dark"
                                                className="flex-fill"
                                                onClick={() => handleShow(p)}
                                            >
                                                <FaEye className="me-1" /> View Details
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>


            {/* Why choose */}

            <div className='hero-section'>
                <h3 className='cust_cardhead'>Why Choose Us?</h3>
                <p className="txt-aln mb-4">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                <div className="whychoose">
                    <Row className="align-items-center justify-content-center g-0">

                        <Col xs={12} md={5} className="text-center">
                            <img src={shield} alt="Shield" className="img-algn img-fluid" />
                        </Col>


                        <Col xs={12} md={6} className="px-md-3">
                            <div>
                                <p className="txt-crd">✔️ Trusted and transparent services</p>
                                <p className="txt-crd">✔️ Wide range of options to suit every need</p>
                                <p className="txt-crd">✔️ Affordable and flexible plans</p>
                                <p className="txt-crd">✔️ Customer-first approach with dedicated support</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                  <div>
   <Modal
    show={showModal}
    onHide={handleClose}
    centered
    size="lg"
    backdrop="static"
    className="details-modal"
  >
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body className="p-4">
      {selectedProperty && (
        <>
         <Row className="g-1 align-items-stretch">
   
    <Col md={6}>
      <img
        src={selectedProperty.image}
        alt="Main"
        className="img-fluid w-100 h-100"
        style={{ height: "340px", objectFit: "cover" }}
      />
    </Col>
  
    <Col md={6}>
      <Row className="g-1 h-100">
        <Col xs={6}>
          <img
            src={selectedProperty.image}
            alt="thumb1"
            className="img-fluid w-100 h-100"
            style={{ height: "165px", objectFit: "cover" }}
          />
        </Col>
        <Col xs={6}>
          <img
            src={selectedProperty.image}
            alt="thumb2"
            className="img-fluid w-100 h-100"
            style={{ height: "165px", objectFit: "cover"}}
          />
        </Col>
        <Col xs={6}>
          <img
            src={selectedProperty.image}
            alt="thumb3"
            className="img-fluid w-100 h-100"
            style={{ height: "165px", objectFit: "cover"}}
          />
        </Col>
        <Col xs={6}>
          <img
            src={selectedProperty.image}
            alt="thumb4"
            className="img-fluid w-100 h-100"
            style={{ height: "165px", objectFit: "cover"}}
          />
        </Col>
      </Row>
    </Col>
  </Row>
  
  
  
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <h4 className="fw-bold mb-1 fs-5 txt-aln">{selectedProperty.title || "Provident Bayscape"}</h4>
              <p className="text-muted mb-0">{selectedProperty.location}</p>
            </div>
            <div>
              <h5 className="fw-semibold  mb-0">₹ {selectedProperty.price} L</h5>
            </div>
          </div>
  
  
          <div className="d-flex align-items-center gap-4 mt-3 text-secondary small">
            <span><FaBed className="me-1" /> {selectedProperty.beds} Beds</span>
            <span><FaBath className="me-1" /> {selectedProperty.baths} Baths</span>
            <span><FaRulerCombined className="me-1" /> {selectedProperty.area} sq ft</span>
          </div>
  
  
          <Row className="mt-4 text-center">
            <Col md={3}>
              <div className="border rounded-3 py-3">
                <h6 className="fw-semibold mb-1 txt-aln">Townhouse</h6>
                <small className="text-muted">Type</small>
              </div>
            </Col>
            <Col md={3}>
              <div className="border rounded-3 py-3">
                <h6 className="fw-semibold mb-1 txt-aln">1-Car Garage</h6>
                <small className="text-muted">Parking</small>
              </div>
            </Col>
            <Col md={3}>
              <div className="border rounded-3 py-3">
                <h6 className="fw-semibold mb-1 txt-aln">2015</h6>
                <small className="text-muted">Built Year</small>
              </div>
            </Col>
            <Col md={3}>
              <div className="border rounded-3 py-3">
                <h6 className="fw-semibold mb-1 txt-aln">For Sale</h6>
                <small className="text-muted">Status</small>
              </div>
            </Col>
          </Row>
  
       
          <p className="mt-4 text-secondary lh-lg txt-aln">
            This beautifully maintained townhouse offers a spacious open floor plan with abundant
            natural light, perfect for modern living. Featuring 3 bedrooms and 2.5 bathrooms, the
            home includes hardwood floors throughout, a gourmet kitchen with granite countertops
            and stainless steel appliances, and a private garage. Located in the highly desirable
            Virugambakkam neighborhood, you’re just minutes from parks, dining, and shopping. Ideal
            for families or professionals looking for comfort and convenience in the heart of Chennai.
          </p>
  
  
          <div className="d-flex flex-wrap gap-2 mt-3">
            {["Central Air", "Washer/Dryer", "Pet-Friendly", "Nearby Parks"].map((tag, i) => (
              <span key={i} className="px-3 py-1 border rounded-pill small text-secondary">
                {tag}
              </span>
            ))}
          </div>
  
         
          <Row className="mt-5 g-4">
            <Col md={4}>
              <div className="border rounded-4 overflow-hidden shadow-sm">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.143350145214!2d80.2128!3d12.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b!2sChennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              </Col>
              <Col md={4}>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={profile}
                  alt="Agent"
                  className="rounded-circle me-3 profile-align"
                />
                <div>
                  <h6 className="fw-semibold mb-0">Daniel Miller</h6>
                  {/* <small className="text-muted">Agent, CBA</small> */}
                    <p className="mb-0 small mt-1">
                    About: He is the Channel Partner Dealing Multiple Projects in Various Locality
                  </p>
                  <p className="mb-0 small mt-1">
                    Address: MEDAVAKKAM Main Road, Perumbakkam, Chennai
                  </p>
                </div>
              </div>
            </Col>
  
            <Col md={4}>
              <h6 className="fw-semibold mb-3">Send Enquiry</h6>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Phone" />
                  </Col>
                  <Col xs={12}>
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                  </Col>
                  <Col xs={12}>
                    <Button variant="primary" className="px-4">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
  
          <div className="text-end mt-4">
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
          </div>
        </>
      )}
    </Modal.Body>
  </Modal>
        </div>
            </div>

        </div >

    )
}

export default Home