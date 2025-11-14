import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import profile from "../assets/Images/profile.jpg";

function DetailsModal({ show, handleClose, selectedProperty, handleOpenEnquiry }) {
  if (!selectedProperty) return null;

  return (
     <Modal
           show={show}
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
                   <Button className="btn-clr border-0 "onClick={() => handleOpenEnquiry(selectedProperty)} >Enquire Now</Button>
                 </div>
                 <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
                   <div>
                     <h4 className="fw-bold mb-1 fs-5 clr_change">
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
                     <h5 className="fw-semibold mb-0 clr_change ">
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
   
  );
}

export default DetailsModal;
