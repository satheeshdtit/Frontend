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
// import profile from "../assets/Images/profile.jpg";
import Enqire from "../Pages/Enqire";
import DetailsModal from "../component/DetailsModal";


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
              <Button variant="primary" className="btn-clr border-0">Search</Button>
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

         
        <Container className="my-5">
          <div className="contact-banner bg-dark bg-opacity-50 text-white rounded-5 overflow-hidden shadow position-relative">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>


             <Row className="align-items-center position-relative p-5">

              <Col md={8}>
                 <h3 className="cust_cardhead2 fw-bold mb-2">Need Help? Contact Us</h3>
                <p className="txt-aln text-light mb-0">
                   Need help finding the right home or vehicle? Contact us today —
                   we’re just a message or call away.
                 </p>
              </Col>


              <Col
                md={4}
                className="d-flex flex-column align-items-md-end justify-content-md-end mt-3 mt-md-0"
              >
                <div className="d-flex align-items-center mb-3 text-light">
                  <FaPhoneVolume className="text-warning me-2 fs-5 " />
                  <span className="fs-5">+91 9890109265</span>
                </div>

                <Button className="fw-semibold px-5 py-2 btn-clr fs-5 border-0">
                  Contact Us
                </Button>
              </Col>

            </Row>
          </div>
        </Container>

     <DetailsModal
  show={showModal}
  handleClose={handleClose}
  selectedProperty={selectedProperty}
  handleOpenEnquiry={handleOpenEnquiry}
/>


      <Enqire
        show={showEnquiryModal}
        handleClose={handleCloseEnquiry}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default Listings;


















