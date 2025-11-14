import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";

const Enqire = ({ show, handleClose, selectedItem }) => {
  const [category, setCategory] = useState("Nil");
  const [itemName, setItemName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    if (selectedItem) {
      setCategory(selectedItem.type || "Property");
      setItemName(selectedItem.title || "");
    } else {
      setCategory("Nil");
      setItemName("");
    }
  }, [selectedItem]);

  const getNameLabel = () => {
    if (category === "Property") return "Property Name";
    if (category === "Car") return "Car Name";
    if (category === "Bike") return "Bike Name";
    return "Item Name";
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_6h8xxr5",
        "template_86hr5be",
        formRef.current,
        "29MY0CRzmH67-fY1W"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSending(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
            handleClose();
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enquiry Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={
                selectedItem
                  ? { pointerEvents: "none", backgroundColor: "#f5f8ff" }
                  : {}
              }
            >
              <option value="Nil">Nil</option>
              <option value="Property">Property</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{getNameLabel()}</Form.Label>
            <Form.Control
              type="text"
              name="item_name"
              placeholder={`Enter ${getNameLabel().toLowerCase()}`}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              readOnly={!!selectedItem}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                pattern="^[0-9]{10}$"
                maxLength="10"
                required
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button
              variant="primary"
              className="px-5 py-2 fw-semibold rounded-3 btn-clr border-0"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </Button>

            {sent && (
              <p className="text-success mt-3 mb-0">
                Message sent successfully!
              </p>
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Enqire;
