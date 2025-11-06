
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Button, Container, Form, InputGroup, Dropdown, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBed, FaBath, FaRulerCombined, FaRegHeart, FaEye, FaSearch } from "react-icons/fa";
import poster from '../assets/Images/poster.jpg';
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

function Listings() {
  const [activeTab, setActiveTab] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
    const handleClose = () => setShowModal(false);
  const handleShow = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

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

  const filteredProperties = properties.filter((p) => {
    const matchesTab = activeTab === "All" || p.type === activeTab;
    const matchesLocation = p.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType =
      typeFilter === "" ||
      (p.type === "Property" && typeFilter === "Property") ||
      (p.type === "Car" && typeFilter === "Car") ||
      (p.type === "Bike" && typeFilter === "Bike");
 const numericPrice = Number(p.price.toString().replace(/,/g, ""));

  let matchesPrice = true;
  if (priceFilter === "Under 10L") matchesPrice = numericPrice < 1000000;
  else if (priceFilter === "10L-50L") matchesPrice = numericPrice >= 1000000 && numericPrice <= 5000000;
  else if (priceFilter === "50L-1Cr") matchesPrice = numericPrice > 5000000 && numericPrice <= 10000000;
  else if (priceFilter === "Above 1Cr") matchesPrice = numericPrice > 10000000;

    return matchesTab && matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div>

      <div className="text-center my-5">
        <h3 className="cust_cardhead mb-3">Our Listings</h3>
        <p className="txt-aln mb-4">
          Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
        </p>

        <Nav
          variant="pills"
          activeKey={activeTab}
          className="custom-nav flex-wrap justify-content-center"
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
          {/* <Nav.Item className="m-2">
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item> */}
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

      <div className="container my-4">
        <div className="p-3 bg-white border rounded-4 shadow-sm">
          <Row className="align-items-center g-2">

            <Col md={4}>
              <Form.Label className="small text-muted mb-1 ">Location</Form.Label>
              <InputGroup >
                <Form.Control
                className="border-0"
                  type="text"
                  placeholder="Enter Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
                <Button variant="outline-secondary" className="border-0">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Col>


            <Col md={3}>
              <Form.Label className="small text-muted mb-1">Type</Form.Label>
              <Form.Select
              className="border-0"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Property">Property</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </Form.Select>
            </Col>

            <Col md={3}>
              <Form.Label className="small text-muted mb-1">Price</Form.Label>
              <Form.Select
              className="border-0"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">Average Price</option>
                <option value="Under 10L">Under ₹10L</option>
                <option value="10L-50L">₹10L - ₹50L</option>
                <option value="50L-1Cr">₹50L - ₹1Cr</option>
                <option value="Above 1Cr">Above ₹1Cr</option>
              </Form.Select>
            </Col>

            <Col md={2} className="d-flex justify-content-end gap-2 mt-3 mt-md-0">
              <Button
                variant="outline-secondary"
                onClick={() => {
                  setLocationFilter("");
                  setTypeFilter("");
                  setPriceFilter("");
                }}
              >
                Clear
              </Button>
              <Button variant="primary">Search</Button>
            </Col>
          </Row>
        </div>
      </div>


      <Container className="my-5">
        <Row className="g-4">
          {filteredProperties.map((p) => (
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
                  {/* <FaRegHeart className="favorite-icon position-absolute top-0 end-0 m-3 text-danger" /> */}
                </div>

                <Card.Body>
                  <Card.Title className="fw-semibold fs-5 mb-1">
                    ₹{p.price.toLocaleString("en-IN")}
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-3 fs-6">
                    {p.location}
                  </Card.Subtitle>


                  {p.type === "Property" && (
                    <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                      <span><FaBed className="me-1" /> {p.beds} Beds</span>
                      <span><FaBath className="me-1" /> {p.baths} Baths</span>
                      <span><FaRulerCombined className="me-1" /> {p.area} sq ft</span>
                    </div>
                  )}

                 
                  {p.type === "Car" && (
                    <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                      <span>Model: {p.model}</span>
                      <span>Brand: {p.brand}</span>
                      <span>{p.kilometer} km</span>
                    </div>
                  )}

                  
                  {p.type === "Bike" && (
                    <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                      <span>Model: {p.model}</span>
                      <span>Brand: {p.brand}</span>
                      <span>{p.kilometer} km</span>
                    </div>
                  )}

                  <div className="d-flex gap-2">
                    <Button variant="primary" className="flex-fill">
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
      <div>
        <Container className="my-5">
          <div className="contact-banner bg-dark bg-opacity-50 text-white rounded-5 overflow-hidden shadow position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>


            <Row className="align-items-center position-relative p-5">

              <Col md={8}>
                <h3 className="cust_cardhead fw-bold mb-2">Need Help? Contact Us</h3>
                <p className="txt-aln text-light mb-0">
                  Need help finding the right home or vehicle? Contact us today —
                  we’re just a message or call away.
                </p>
              </Col>


              <Col
                md={4}
                className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-end mt-3 mt-md-0"
              >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-3 text-light">
                  <FaPhoneVolume  className="text-warning me-2" />
                  <span>+91 9890109265</span>
                  
                </div>
                
                <Button variant="primary" className="fw-semibold px-4 py-2">
                  Contact Us
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
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
    </div>
  );
}

export default Listings;






























































// import React, { useState } from "react";
// import {Card,Row, Col, Button,  Container,Form,InputGroup,Nav,Modal,} from "react-bootstrap";
// import {FaBed,FaBath,FaRulerCombined,FaEye,FaPhoneVolume,FaSearch,} from "react-icons/fa";
// import house1 from "../assets/Images/house1.jpeg";
// import house2 from "../assets/Images/house2.jpeg";
// import house3 from "../assets/Images/house3.jpeg";
// import car1 from "../assets/Images/car1.jpeg";
// import car2 from "../assets/Images/car2.jpeg";
// import car3 from "../assets/Images/car3.jpeg";
// import bike1 from "../assets/Images/bike1.jpeg";
// import bike2 from "../assets/Images/bike2.jpeg";
// import bike3 from "../assets/Images/bike3.jpeg";

// function Listings() {
//   const [activeTab, setActiveTab] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [typeFilter, setTypeFilter] = useState("");
//   const [priceFilter, setPriceFilter] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const handleClose = () => setShowModal(false);
//   const handleShow = (property) => {
//     setSelectedProperty(property);
//     setShowModal(true);
//   };

//   const properties = [
//    {
//       id: 1,
//       type: "Property",
//       image: house1,
//       price: "950,000",
//       location: "Vadapalani | Chennai",
//       beds: 3,
//       baths: 2,
//       area: 1400,
//     },
//     {
//       id: 2,
//       type: "Property",
//       image: house2,
//       price: "950,000",
//       location: "Guindy | Chennai",
//       beds: 3,
//       baths: 2,
//       area: 1400,
//     },
//     {
//       id: 3,
//       type: "Property",
//       image: house3,
//       price: "950,000",
//       location: "Avadi | Chennai",
//       beds: 3,
//       baths: 2,
//       area: 1400,
//     },
   

//     {
//       id: 4,
//       type: "Car",
//       image: car1,
//       price: "1,300,000",
//       location: "Nungambakkam | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//     {
//       id: 5,
//       type: "Car",
//       image: car2,
//       price: "1,800,000",
//       location: "Guindy | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//     {
//       id: 6,
//       type: "Car",
//       image: car3,
//       price: "1,300,000",
//       location: "Nungambakkam | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//     {
//       id: 7,
//       type: "Bike",
//       image: bike1,
//       price: "1,800,000",
//       location: "Guindy | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//     {
//       id: 8,
//       type: "Bike",
//       image: bike2,
//       price: "1,300,000",
//       location: "Nungambakkam | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//     {
//       id: 9,
//       type: "Bike",
//       image: bike3,
//       price: "1,800,000",
//       location: "Guindy | Chennai",
//       model: 2020,
//       brand: "BMW",
//       kilometer: 22000,
//     },
//   ];

//   const filteredProperties = properties.filter((p) => {
//     const matchesTab = activeTab === "All" || p.type === activeTab;
//     const matchesLocation = p.location
//       .toLowerCase()
//       .includes(locationFilter.toLowerCase());
//     const matchesType = typeFilter === "" || p.type === typeFilter;

//     const numericPrice = Number(p.price.toString().replace(/,/g, ""));
//     let matchesPrice = true;
//     if (priceFilter === "Under 10L") matchesPrice = numericPrice < 1000000;
//     else if (priceFilter === "10L-50L")
//       matchesPrice = numericPrice >= 1000000 && numericPrice <= 5000000;
//     else if (priceFilter === "50L-1Cr")
//       matchesPrice = numericPrice > 5000000 && numericPrice <= 10000000;
//     else if (priceFilter === "Above 1Cr") matchesPrice = numericPrice > 10000000;

//     return matchesTab && matchesLocation && matchesType && matchesPrice;
//   });

//   return (
//     <div className={showModal ? "blur-background" : ""}>
//       {/* ====== HEADING ====== */}
//       <div className="text-center my-5">
//         <h3 className="cust_cardhead mb-3">Our Listings</h3>
//         <p className="txt-aln mb-4">
//           Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum
//           in in vestibulum.
//         </p>

//         <Nav
//           variant="pills"
//           activeKey={activeTab}
//           className="custom-nav flex-wrap justify-content-center"
//           onSelect={(selectedKey) => setActiveTab(selectedKey)}
//         >
//           <Nav.Item className="m-2">
//             <Nav.Link eventKey="All">All</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="m-2">
//             <Nav.Link eventKey="Property">Property</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="m-2">
//             <Nav.Link eventKey="Car">Cars</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="m-2">
//             <Nav.Link eventKey="Bike">Bikes</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </div>

//       {/* ====== FILTER BAR ====== */}
//       <div className="container my-4">
//         <div className="p-3 bg-white border rounded-4 shadow-sm">
//           <Row className="align-items-center g-2">
//             <Col md={4}>
//               <Form.Label className="small text-muted mb-1">Location</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Location"
//                   value={locationFilter}
//                   onChange={(e) => setLocationFilter(e.target.value)}
//                 />
//                 <Button variant="outline-secondary">
//                   <FaSearch />
//                 </Button>
//               </InputGroup>
//             </Col>

//             <Col md={3}>
//               <Form.Label className="small text-muted mb-1">Type</Form.Label>
//               <Form.Select
//                 value={typeFilter}
//                 onChange={(e) => setTypeFilter(e.target.value)}
//               >
//                 <option value="">All Types</option>
//                 <option value="Property">Property</option>
//                 <option value="Car">Car</option>
//                 <option value="Bike">Bike</option>
//               </Form.Select>
//             </Col>

//             <Col md={3}>
//               <Form.Label className="small text-muted mb-1">Price</Form.Label>
//               <Form.Select
//                 value={priceFilter}
//                 onChange={(e) => setPriceFilter(e.target.value)}
//               >
//                 <option value="">Average Price</option>
//                 <option value="Under 10L">Under ₹10L</option>
//                 <option value="10L-50L">₹10L - ₹50L</option>
//                 <option value="50L-1Cr">₹50L - ₹1Cr</option>
//                 <option value="Above 1Cr">Above ₹1Cr</option>
//               </Form.Select>
//             </Col>

//             <Col md={2} className="d-flex justify-content-end gap-2 mt-3 mt-md-0">
//               <Button
//                 variant="outline-secondary"
//                 onClick={() => {
//                   setLocationFilter("");
//                   setTypeFilter("");
//                   setPriceFilter("");
//                 }}
//               >
//                 Clear
//               </Button>
//               <Button variant="primary">Search</Button>
//             </Col>
//           </Row>
//         </div>
//       </div>

//       {/* ====== PROPERTY CARDS ====== */}
//       <Container className="my-5">
//         <Row className="g-4">
//           {filteredProperties.map((p) => (
//             <Col key={p.id} xs={12} sm={6} lg={4}>
//               <Card className="property-card shadow-sm border-0 h-100">
//                 <div className="position-relative">
//                   <Card.Img
//                     variant="top"
//                     src={p.image}
//                     alt={p.location}
//                     className="object-fit-cover"
//                     style={{ height: "220px" }}
//                   />
//                 </div>

//                 <Card.Body>
//                   <Card.Title className="fw-semibold fs-5 mb-1">
//                     ₹{p.price}
//                   </Card.Title>
//                   <Card.Subtitle className="text-muted mb-3 fs-6">
//                     {p.location}
//                   </Card.Subtitle>

//                   {p.type === "Property" && (
//                     <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
//                       <span>
//                         <FaBed className="me-1" /> {p.beds} Beds
//                       </span>
//                       <span>
//                         <FaBath className="me-1" /> {p.baths} Baths
//                       </span>
//                       <span>
//                         <FaRulerCombined className="me-1" /> {p.area} sq ft
//                       </span>
//                     </div>
//                   )}

//                   <div className="d-flex gap-2">
//                     <Button variant="primary" className="flex-fill">
//                       Enquiry Now
//                     </Button>
//                     <Button
//                       variant="outline-dark"
//                       className="flex-fill"
//                       onClick={() => handleShow(p)}
//                     >
//                       <FaEye className="me-1" /> View Details
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* ====== MODAL ====== */}
//     <Modal
//   show={showModal}
//   onHide={handleClose}
//   centered
//   size="xl"
//   backdrop="static"
//   className="details-modal"
// >
//   <Modal.Body className="p-4">
//     {selectedProperty && (
//       <>
//         <Row className="g-3">
//           <Col md={7}>
//             <img
//               src={selectedProperty.image}
//               alt="Main"
//               className="img-fluid rounded-4 w-100"
//               style={{ height: "340px", objectFit: "cover" }}
//             />
//           </Col>
//           <Col md={5}>
//             <Row className="g-2">
//               <Col xs={6}>
//                 <img
//                   src={selectedProperty.image}
//                   alt="thumb1"
//                   className="img-fluid rounded-3"
//                 />
//               </Col>
//               <Col xs={6}>
//                 <img
//                   src={selectedProperty.image}
//                   alt="thumb2"
//                   className="img-fluid rounded-3"
//                 />
//               </Col>
//               <Col xs={6}>
//                 <img
//                   src={selectedProperty.image}
//                   alt="thumb3"
//                   className="img-fluid rounded-3"
//                 />
//               </Col>
//               <Col xs={6}>
//                 <img
//                   src={selectedProperty.image}
//                   alt="thumb4"
//                   className="img-fluid rounded-3"
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </Row>

//         {/* Property Title & Price */}
//         <div className="d-flex justify-content-between align-items-center mt-4">
//           <div>
//             <h4 className="fw-bold mb-1">{selectedProperty.title || "Provident Bayscape"}</h4>
//             <p className="text-muted mb-0">{selectedProperty.location}</p>
//           </div>
//           <div>
//             <h5 className="fw-semibold text-primary mb-0">₹ {selectedProperty.price} L</h5>
//           </div>
//         </div>

//         {/* Basic Info */}
//         <div className="d-flex align-items-center gap-4 mt-3 text-secondary small">
//           <span><FaBed className="me-1" /> {selectedProperty.beds} Beds</span>
//           <span><FaBath className="me-1" /> {selectedProperty.baths} Baths</span>
//           <span><FaRulerCombined className="me-1" /> {selectedProperty.area} sq ft</span>
//         </div>

//         {/* Info Boxes */}
//         <Row className="mt-4 text-center">
//           <Col md={3}>
//             <div className="border rounded-3 py-3">
//               <h6 className="fw-semibold mb-1">Townhouse</h6>
//               <small className="text-muted">Type</small>
//             </div>
//           </Col>
//           <Col md={3}>
//             <div className="border rounded-3 py-3">
//               <h6 className="fw-semibold mb-1">1-Car Garage</h6>
//               <small className="text-muted">Parking</small>
//             </div>
//           </Col>
//           <Col md={3}>
//             <div className="border rounded-3 py-3">
//               <h6 className="fw-semibold mb-1">2015</h6>
//               <small className="text-muted">Built Year</small>
//             </div>
//           </Col>
//           <Col md={3}>
//             <div className="border rounded-3 py-3">
//               <h6 className="fw-semibold mb-1">For Sale</h6>
//               <small className="text-muted">Status</small>
//             </div>
//           </Col>
//         </Row>

     
//         <p className="mt-4 text-secondary lh-lg">
//           This beautifully maintained townhouse offers a spacious open floor plan with abundant
//           natural light, perfect for modern living. Featuring 3 bedrooms and 2.5 bathrooms, the
//           home includes hardwood floors throughout, a gourmet kitchen with granite countertops
//           and stainless steel appliances, and a private garage. Located in the highly desirable
//           Virugambakkam neighborhood, you’re just minutes from parks, dining, and shopping. Ideal
//           for families or professionals looking for comfort and convenience in the heart of Chennai.
//         </p>

//         {/* Tags */}
//         <div className="d-flex flex-wrap gap-2 mt-3">
//           {["Central Air", "Washer/Dryer", "Pet-Friendly", "Nearby Parks"].map((tag, i) => (
//             <span key={i} className="px-3 py-1 border rounded-pill small text-secondary">
//               {tag}
//             </span>
//           ))}
//         </div>

       
//         <Row className="mt-5 g-4">
//           <Col md={6}>
//             <div className="border rounded-4 overflow-hidden shadow-sm">
//               <iframe
//                 title="Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.143350145214!2d80.2128!3d12.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b!2sChennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="220"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//             <div className="d-flex align-items-center mt-3">
//               <img
//                 src="https://via.placeholder.com/60"
//                 alt="Agent"
//                 className="rounded-circle me-3"
//               />
//               <div>
//                 <h6 className="fw-semibold mb-0">Daniel Miller</h6>
//                 <small className="text-muted">Agent, CBA</small>
//                 <p className="mb-0 small mt-1">
//                   Address: MEDAVAKKAM Main Road, Perumbakkam, Chennai
//                 </p>
//               </div>
//             </div>
//           </Col>

//           <Col md={6}>
//             <h6 className="fw-semibold mb-3">Send Enquiry</h6>
//             <Form>
//               <Row className="g-3">
//                 <Col md={6}>
//                   <Form.Control type="text" placeholder="Name" />
//                 </Col>
//                 <Col md={6}>
//                   <Form.Control type="text" placeholder="Phone" />
//                 </Col>
//                 <Col xs={12}>
//                   <Form.Control as="textarea" rows={3} placeholder="Message" />
//                 </Col>
//                 <Col xs={12}>
//                   <Button variant="primary" className="px-4">
//                     Send
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </Col>
//         </Row>

//         <div className="text-end mt-4">
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </div>
//       </>
//     )}
//   </Modal.Body>
// </Modal>

//     </div>
//   );
// }

// export default Listings;

























