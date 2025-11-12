import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Modal,
} from "react-bootstrap";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaEye,
  FaSearch,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import profile from "../assets/Images/profile.jpg";
import Enqire from "../Pages/Enqire";

function Listings() {
  const [activeTab, setActiveTab] = useState("Property");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [cars, setCars] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const handleOpenEnquiry = (item) => {
  setSelectedItem(item || null);
  setShowEnquiryModal(true);
};
const handleCloseEnquiry = () => setShowEnquiryModal(false);

  const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;

  const handleClose = () => setShowModal(false);
  const handleShow = (item) => {
    setSelectedProperty(item);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      console.log("Fetching all data...");

      try {
        const propertyUrl = import.meta.env.VITE_PROPERTY_BASE_URL;
        const carUrl = import.meta.env.VITE_FOURWHEELER_BASE_URL;
        const bikeUrl = import.meta.env.VITE_TWOWHEELER_BASE_URL;

        const [propertyRes, carRes, bikeRes, ] = await Promise.all([
          axios.get(propertyUrl),
          axios.get(carUrl),
          axios.get(bikeUrl),
    
        ]);

        if (propertyRes.data?.properties) {
          setProperties(propertyRes.data.properties);
        }

        if (Array.isArray(carRes.data)) {
          setCars(carRes.data);
        }

        if (Array.isArray(bikeRes.data)) {
          setBikes(bikeRes.data);
        }

        console.log("Properties:", propertyRes.data);
        console.log("Cars:", carRes.data);
        console.log("Bikes:", bikeRes.data);
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
  activeTab === "All"
    ? [
        // combine all items
        ...properties.map((p) => ({
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
        })),
        ...cars.map((c) => ({
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
        })),
        ...bikes.map((b) => ({
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
        })),
      ]
    : activeTab === "Property"
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

  const filteredProperties = combinedData.filter((p) => {
    const matchesLocation = p.location
      ?.toLowerCase()
      .includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === "" || p.type === typeFilter;
    const numericPrice = Number(p.price.toString().replace(/[₹,Cr]/g, ""));
    let matchesPrice = true;
    if (priceFilter === "Under 10L") matchesPrice = numericPrice < 1000000;
    else if (priceFilter === "10L-50L")
      matchesPrice = numericPrice >= 1000000 && numericPrice <= 5000000;
    else if (priceFilter === "50L-1Cr")
      matchesPrice = numericPrice > 5000000 && numericPrice <= 10000000;
    else if (priceFilter === "Above 1Cr")
      matchesPrice = numericPrice > 10000000;
    return matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div className="text-center">
      <div className="my-5">
        <h3 className="cust_cardhead mb-3">Our Listings</h3>
        <p className="txt-aln mb-4">
          Explore premium properties and vehicles listed for you.
        </p>

        <Nav
          variant="pills"
          activeKey={activeTab}
          className="custom-nav flex-wrap justify-content-center"
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
          <Nav.Item className="m-2">
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-2">
            <Nav.Link eventKey="Property">Properties</Nav.Link>
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
              <Form.Label className="small text-muted mb-1 ms-2">
                Location
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="border-0"
                />
                <Button variant="outline-secondary" className="border-0">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Label className="small text-muted mb-1 ms-2">
                Type
              </Form.Label>
              <Form.Select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border-0"
              >
                <option value="">All Types</option>
                <option value="Property">Property</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label className="small text-muted mb-1 ms-2">
                Price
              </Form.Label>
              <Form.Select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="border-0"
              >
                <option value="">Average Price</option>
                <option value="Under 10L">Under ₹10L</option>
                <option value="10L-50L">₹10L - ₹50L</option>
                <option value="50L-1Cr">₹50L - ₹1Cr</option>
                <option value="Above 1Cr">Above ₹1Cr</option>
              </Form.Select>
            </Col>
            <Col
              md={2}
              className="d-flex justify-content-end gap-2 mt-3 mt-md-0"
            >
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

      {/* Cards */}
      <Container className="my-5">
        <Row className="g-4">
          {filteredProperties.map((p) => (
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
                  <Card.Title className="fw-semibold fs-5 mb-1 text-start">
                    {p.title}
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-3 fs-6 text-start">
                    {p.location}
                  </Card.Subtitle>
                  {p.type === "Property" && (
                    <div className="d-flex flex-wrap text-secondary mb-3 gap-3 small">
                      <span>
                        <FaBed className="me-1" /> {p.beds} Beds
                      </span>
                      <span>
                        <FaBath className="me-1" /> {p.baths} Baths
                      </span>
                      <span>
                        <FaRulerCombined className="me-1" /> {p.area} sqft
                      </span>
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
                      onClick={() => handleOpenEnquiry(p)}
                    ><TbListDetails />
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
                    src={
                      selectedProperty.image ||
                      `${
                        import.meta.env.VITE_IMAGE_BASE_URL
                      }/uploads/default.jpg`
                    }
                    alt="Main"
                    className="img-fluid w-100 h-100"
                    style={{ height: "340px", objectFit: "cover" }}
                  />
                </Col>
                <Col md={6}>
                  <Row className="g-1 h-100">
                    {[
                      ...(selectedProperty?.images ||
                        Array(4).fill(selectedProperty.image)),
                    ]
                      .slice(0, 4)
                      .map((img, i) => (
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
                <Button className="btn-clr "onClick={() => handleOpenEnquiry(selectedProperty)} >Enquire Now</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
                <div>
                  <h4 className="fw-bold mb-1 fs-5">
                    {selectedProperty.title ||
                      selectedProperty.propertyName ||
                      selectedProperty.vehicleName ||
                      "Default Title"}
                  </h4>
                  <p className="text-muted mb-0">
                    {selectedProperty.location || "Chennai"}
                  </p>
                </div>
                <div>
                  <h5 className="fw-semibold mb-0">
                    {selectedProperty.price
                      ? selectedProperty.type === "Property"
                        ? `₹ ${selectedProperty.price} Cr`
                        : ` ${selectedProperty.price.toLocaleString("en-IN")}`
                      : "₹ 1,00,000"}
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 mt-3 text-secondary small flex-wrap">
                {selectedProperty.type === "Property" && (
                  <>
                    <span>
                      <FaBed className="me-1" />{" "}
                      {selectedProperty.beds ||
                        selectedProperty.noOfBedrooms ||
                        3}{" "}
                      Beds
                    </span>
                    <span>
                      <FaBath className="me-1" />{" "}
                      {selectedProperty.baths ||
                        selectedProperty.noOfBathrooms ||
                        2}{" "}
                      Baths
                    </span>
                    <span>
                      <FaRulerCombined className="me-1" />{" "}
                      {selectedProperty.area || selectedProperty.sqFeet || 1200}{" "}
                      sq ft
                    </span>
                  </>
                )}

                {selectedProperty.type === "Car" && (
                  <>
                    <span>Fuel: {selectedProperty.fuelType || "Petrol"}</span>
                    <span>Seats: {selectedProperty.seatCapacity || 5}</span>
                    <span>
                      Driven:{" "}
                      {selectedProperty.kilometer ||
                        selectedProperty.kmDriven ||
                        0}{" "}
                      km
                    </span>
                  </>
                )}

                {selectedProperty.type === "Bike" && (
                  <>
                    <span>Fuel: {selectedProperty.fuelType || "Petrol"}</span>
                    <span>Type: {selectedProperty.tubeType || "Tubeless"}</span>
                    <span>
                      Mileage: {selectedProperty.mileagePerLiter || 30} km/l
                    </span>
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
                      {selectedProperty.buildYear ||
                        selectedProperty.purchaseYear ||
                        "2018"}
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
                  ? [
                      "Pet-Friendly",
                      "Nearby Parks",
                      "Central Air",
                      "Washer/Dryer",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-0 border rounded-pill small text-secondary d-flex align-items-center"
                      >
                        <TiTick size={16} color="#0d6efd" className="me-2" />{" "}
                        {tag}
                      </span>
                    ))
                  : [
                      "Well Maintained",
                      "Certified Seller",
                      "Low Maintenance",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-0 border rounded-pill small text-secondary d-flex align-items-center"
                      >
                        <TiTick size={16} color="#0d6efd" className="me-2" />{" "}
                        {tag}
                      </span>
                    ))}
              </div>
              <Row className="mt-5 g-4 align-items-stretch">
                <Col md={6}>
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
                <Col md={6}>
                  <div className="agent-card p-3 shadow-sm rounded h-100">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={profile}
                        alt="Agent"
                        className="rounded-circle me-3"
                        width="60"
                        height="60"
                      />
                      <div>
                        <h6 className="fw-semibold mb-0">Daniel Miller</h6>
                        <small className="text-muted txt-aln">
                          Chennai, India
                        </small>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold txt-aln">About:</p>
                      <p className="small mb-2 txt-aln">
                        Channel partner dealing with premium properties and
                        vehicles in Chennai.
                      </p>
                      <p className="mb-1 fw-semibold txt-aln">Address:</p>
                      <p className="small mb-0 txt-aln">
                        Medavakkam Nagar,
                        <br />
                        40 Feet Road, Perumbakkam,
                        <br />
                        Chennai
                      </p>
                    </div>
                  </div>
                </Col>
                {/* <Col md={4}>
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
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                          />
                        </Col>
                        <Col xs={12}>
                          <Button variant="primary" className="px-4 btn-clr">
                            Send
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col> */}
              </Row>
            </>
          )}
        </Modal.Body>
      </Modal>

      <Enqire
        show={showEnquiryModal}
        handleClose={handleCloseEnquiry}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default Listings;
