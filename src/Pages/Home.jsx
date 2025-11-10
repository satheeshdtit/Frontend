import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Row, Col, Image, CardBody, Button, Container, Modal, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaEye } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import car from "../assets/Images/carlogo.png";
import bike from '../assets/Images/bikelogo.png';
import house from '../assets/Images/houselogo.png';
import Images from '../assets/Images/image.png';
import shield from '../assets/Images/shield.png';
import profile from '../assets/Images/profile.jpg';
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handleClose = () => setShowModal(false);
  const [properties, setProperties] = useState([]);
  const [cars, setCars] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;
  const handleShow = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };
  const [activeTab, setActiveTab] = useState("Property");
  useEffect(() => {
    const fetchAllData = async () => {
      console.log("Fetching all data...");

      try {
        // Import URLs from .env
        const propertyUrl = import.meta.env.VITE_PROPERTY_BASE_URL;
        const carUrl = import.meta.env.VITE_FOURWHEELER_BASE_URL;
        const bikeUrl = import.meta.env.VITE_TWOWHEELER_BASE_URL;

        // Fetch all three APIs together
        const [propertyRes, carRes, bikeRes] = await Promise.all([
          axios.get(propertyUrl),
          axios.get(carUrl),
          axios.get(bikeUrl),
        ]);

        // Set Property Data
        if (propertyRes.data?.properties) {
          setProperties(propertyRes.data.properties);
        }

        // Set Car Data
        if (Array.isArray(carRes.data)) {
          setCars(carRes.data);
        }

        // Set Bike Data
        if (Array.isArray(bikeRes.data)) {
          setBikes(bikeRes.data);
        }

        // // Log results (for debugging)
        // console.log("Properties:", propertyRes.data);
        // console.log("✅ Cars:", carRes.data);
        // console.log("✅ Bikes:", bikeRes.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);
  if (loading) return <p className="text-center mt-5">Loading listings...</p>;
  const combinedData =
    activeTab === "Property"
      ? properties.map((p) => ({
        id: p._id,
        type: "Property",
        image: `${imageBase}${p.propertyImages?.[0]}`,
        title: p.propertyName,
        price: `${p.price} Cr`,
        location: p.location,
        beds: p.noOfBedrooms,
        baths: p.noOfBathrooms,
        area: p.sqFeet,
        description: p.description,
      }))
      : activeTab === "Car"
        ? cars.map((c) => ({
          id: c._id,
          type: "Car",
          image: `${imageBase}${c.vehicleImage?.[0]}`,
          title: c.vehicleName,
          price: `₹${c.price.toLocaleString("en-IN")}`,
          location: c.location,
          model: c.purchaseYear,
          brand: c.vehicleName,
          kilometer: c.kmDriven,
          description: c.description,
        }))
        : bikes.map((b) => ({
          id: b._id,
          type: "Bike",
          image: `${imageBase}${b.vehicleImage?.[0]}`,
          title: b.vehicleName,
          price: `₹${b.price.toLocaleString("en-IN")}`,
          location: b.location,
          model: b.purchaseYear,
          brand: b.vehicleName,
          kilometer: b.kmDriven,
          description: b.description,
        }));


  const filteredData =
    activeTab === "All"
      ? combinedData
      : combinedData.filter((item) => item.type === activeTab);

  return (

    // Welcome Note

    <div className=' text-center'>
      <h3 className='header mt-5'>Welcome to Riyanrealtors</h3>
      <Card className='border-0'>
        <Card.Body>
          <Card.Title className='cust_cardhead my-0 '>Everything should be this easy.</Card.Title>
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
              <div className='container'>

                <Row>
                  <Col md={6}>
                    <div>
                      <Card className='border-0 '>
                        <Card.Body>
                          <Card.Title className='title'>The transfer of real estate</Card.Title>

                          <Card.Text className='txt-crd'>
                            <p> Welcome to <b>Riyanrealtors</b> your trusted partner in property solutions and vehicle rentals.</p>

                            <p> We are committed to simplifying the way people buy properties and rent vehicles by offering reliable, transparent, and customer-friendly services.</p>
                          </Card.Text>
                          <Button className='me-2 btn-align   '>Enquiry Now!</Button>
                          <Button className='my-2 btn-align2'> Read More</Button>
                          <div className='mt-5'>
                            <Row>
                              <Col md={4}><h1 className='fw-bold fs-1' >12+</h1>
                                <p className='txt-aln'>Customers</p>
                              </Col>
                              <Col md={4}><h1 className='fw-bold fs-1'>14+</h1>
                                <p className='txt-aln'>Sales</p></Col>
                              <Col md={4}><h1 className='fw-bold fs-1'>18+</h1>
                                <p className='txt-aln'>Rental</p>
                              </Col>
                            </Row>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-center">
                      <Card className="border-0 w-100">
                        <Card.Body className="p-0">
                          <img
                            src={Images}
                            alt="Responsive"
                            className="img-fluid w-100 rounded-3"
                            style={{ objectFit: "cover", height: "auto", maxHeight: "400px" }}
                          />
                        </Card.Body>
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
        <Container className="my-5">
          <Row className="g-4">
            {filteredData.map((p) => (
              <Col key={p.id} xs={12} sm={6} lg={4}>
                <Card className="property-card shadow-sm border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={p.image}
                    alt={p.location}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <p className="fw-bold text-dark fs-5 text-start mb-1">
                      {p.price.toLocaleString("en-IN")}
                    </p>
                    <Card.Title className="fw-semibold fs-5 mb-1 text-start">{p.title}</Card.Title>
                    <Card.Subtitle className="text-muted mb-3 fs-6 text-start">
                      {p.location}
                    </Card.Subtitle>
                    {p.type === "Property" && (
                      <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                        <span><FaBed className="me-1" /> {p.beds} Beds</span>
                        <span><FaBath className="me-1" /> {p.baths} Baths</span>
                        <span><FaRulerCombined className="me-1" /> {p.area} sqft</span>
                      </div>
                    )}

                    {p.type === "Car" || p.type === "Bike" ? (
                      <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                        <span>Model: {p.model}</span>
                        <span>Brand: {p.brand}</span>
                        <span>{p.kilometer} km</span>
                      </div>
                    ) : null}

                    <div className="d-flex flex-column flex-sm-row align-items-stretch justify-content-center w-100 gap-2">
                      <Button
                        variant="primary"
                        className="enquiry-btn flex-fill rounded-pill px-4 py-2"
                      >
                        Enquiry Now
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="flex-fill rounded-pill px-4 py-2"
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

      <div className='whychoose-section'>
        <div>
          <h3 className='cust_cardhead'>Why Choose Us?</h3>
        </div>
        <p className="txt-aln mb-4">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
        <div className="whychoose">
          <Row className="align-items-center justify-content-center g-0 whychoose-row">
            <Col xs={12} md={5} className="text-end pe-md-2">
              <img src={shield} alt="Shield" className="img-fluid shield-img" />
            </Col>
            <Col xs={12} md={5} className="ps-md-3">
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
            size="xl"
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
                        src={selectedProperty.image || `${import.meta.env.VITE_IMAGE_BASE_URL}/uploads/default.jpg`}
                        alt="Main"
                        className="img-fluid w-100 h-100"
                        style={{ height: "340px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col md={6}>
                      <Row className="g-1 h-100">
                        {[...(selectedProperty?.images || Array(4).fill(selectedProperty.image))].slice(0, 4).map((img, i) => (
                          <Col xs={6} key={i}>
                            <img
                              src={img || selectedProperty.image}
                              alt={`thumb${i + 1}`}
                              className="img-fluid w-100 h-100"
                              style={{ height: "165px", objectFit: "cover" }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                  <div className="my-2">
                    <Button className="btn-clr ">Enquire Now</Button>
                  </div>

                  {/* 🏷️ Title + Price */}
                  <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
                    <div>
                      <h4 className="fw-bold mb-1 fs-5">{selectedProperty.title || selectedProperty.propertyName || selectedProperty.vehicleName || "Default Title"}</h4>
                      <p className="text-muted mb-0">{selectedProperty.location || "Chennai"}</p>
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">
                        {selectedProperty.price
                          ? (selectedProperty.type === "Property"
                            ? `₹ ${selectedProperty.price} Cr`
                            : ` ${selectedProperty.price.toLocaleString("en-IN")}`)
                          : "₹ 1,00,000"}
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 mt-3 text-secondary small flex-wrap">
                    {selectedProperty.type === "Property" && (
                      <>
                        <span><FaBed className="me-1" /> {selectedProperty.beds || selectedProperty.noOfBedrooms || 3} Beds</span>
                        <span><FaBath className="me-1" /> {selectedProperty.baths || selectedProperty.noOfBathrooms || 2} Baths</span>
                        <span><FaRulerCombined className="me-1" /> {selectedProperty.area || selectedProperty.sqFeet || 1200} sq ft</span>
                      </>
                    )}

                    {selectedProperty.type === "Car" && (
                      <>
                        <span>Fuel: {selectedProperty.fuelType || "Petrol"}</span>
                        <span>Seats: {selectedProperty.seatCapacity || 5}</span>
                        <span>Driven: {selectedProperty.kilometer || selectedProperty.kmDriven || 0} km</span>
                      </>
                    )}

                    {selectedProperty.type === "Bike" && (
                      <>
                        <span>Fuel: {selectedProperty.fuelType || "Petrol"}</span>
                        <span>Type: {selectedProperty.tubeType || "Tubeless"}</span>
                        <span>Mileage: {selectedProperty.mileagePerLiter || 30} km/l</span>
                      </>
                    )}
                  </div>
                  <Row className="mt-4 text-center g-3 g-md-4">
                    <Col xs={12} sm={6} md={3}>
                      <div className="border rounded-3 border-primary py-3 h-100 d-flex flex-column justify-content-center">
                        <h6 className="fw-semibold mb-1 text-truncate px-2">
                          {selectedProperty.type === "Property"
                            ? "Residential"
                            : selectedProperty.type === "Car"
                              ? selectedProperty.carVariant || "Sedan"
                              : selectedProperty.category || "Bike"}
                        </h6>
                        <small className="text-muted">Type</small>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                      <div className="border rounded-3 border-primary py-3 h-100 d-flex flex-column justify-content-center">
                        <h6 className="fw-semibold mb-1 text-wrap px-2">
                          {selectedProperty.type === "Property"
                            ? selectedProperty.parkingAvailable
                              ? "Parking Available"
                              : "No Parking"
                            : selectedProperty.discType
                              ? "Disc Brake"
                              : "Drum Brake"}
                        </h6>
                        <small className="text-muted">Parking/Brake</small>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                      <div className="border rounded-3 border-primary py-3 h-100 d-flex flex-column justify-content-center">
                        <h6 className="fw-semibold mb-1 px-2">
                          {selectedProperty.buildYear || selectedProperty.purchaseYear || "2018"}
                        </h6>
                        <small className="text-muted">Built/Purchase Year</small>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                      <div className="border rounded-3 border-primary py-3 h-100 d-flex flex-column justify-content-center">
                        <h6 className="fw-semibold mb-1 px-2 text-truncate">
                          {selectedProperty.status || "For Sale"}
                        </h6>
                        <small className="text-muted">Status</small>
                      </div>
                    </Col>
                  </Row>

                  <p className="mt-4 text-secondary lh-lg txt-aln">
                    {selectedProperty.description ||
                      "No description available. This listing offers premium quality and top performance. Contact us to know more details."}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {selectedProperty.type === "Property"
                      ? ["Pet-Friendly", "Nearby Parks", "Central Air", "Washer/Dryer"].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-0 border rounded-pill small text-secondary d-flex align-items-center"
                        >
                          <TiTick size={16} color="#0d6efd" className="me-2" /> {tag}
                        </span>
                      ))
                      : ["Well Maintained", "Certified Seller", "Low Maintenance"].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-0 border rounded-pill small text-secondary d-flex align-items-center"
                        >
                          <TiTick size={16} color="#0d6efd" className="me-2" /> {tag}
                        </span>
                      ))}
                  </div>
                  <Row className="mt-5 g-4 align-items-stretch">
                    <Col md={4}>
                      <div className="agent-card shadow-sm rounded overflow-hidden h-100">
                        <iframe
                          title="Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.143350145214!2d80.2128!3d12.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b!2sChennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="agent-card p-3 shadow-sm rounded h-100">
                        <div className="d-flex align-items-center mb-3">
                          <img src={profile} alt="Agent" className="rounded-circle me-3" width="60" height="60" />
                          <div>
                            <h6 className="fw-semibold mb-0">Daniel Miller</h6>
                            <small className="text-muted txt-aln">Chennai, India</small>
                          </div>
                        </div>
                        <div>
                          <p className="mb-1 fw-semibold txt-aln">About:</p>
                          <p className="small mb-2 txt-aln">
                            Channel partner dealing with premium properties and vehicles in Chennai.
                          </p>
                          <p className="mb-1 fw-semibold txt-aln">Address:</p>
                          <p className="small mb-0 txt-aln">
                            Medavakkam Nagar,<br />
                            40 Feet Road, Perumbakkam,<br />
                            Chennai
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="agent-card p-3 shadow-sm rounded h-100 d-flex flex-column">
                        <h6 className="fw-semibold mb-3 txt-aln">Send Enquiry</h6>
                        <Form className="flex-grow-1 d-flex flex-column justify-content-between">
                          <Row className="g-3">
                            <Col md={6}>
                              <Form.Control type="text" placeholder="Name" />
                            </Col>
                            <Col md={6}>
                              <Form.Control type="text" placeholder="Phone" />
                            </Col>
                            <Col xs={12}>
                              <Form.Control type="email" placeholder="Email" />
                            </Col>
                            <Col xs={12}>
                              <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </Col>
                            <Col xs={12}>
                              <Button variant="primary" className="px-4 btn-clr">
                                Send
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </Col>
                  </Row>
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