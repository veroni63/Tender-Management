import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function Upload() {
  const [formData, setFormData] = useState({
    documentTitle: "",
    documentType: "",
    documentCategory: "",
    versionNumber: "",
    file: null,
    visibility: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  return (
    <Container className="p-4 shadow-lg rounded bg-white">
      <h2 className="page-title mb-3">Document Upload Screen</h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="documentTitle">
            <Form.Label>Document Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Document Title"
              name="documentTitle"
              value={formData.documentTitle}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="documentType">
            <Form.Label>Document Type</Form.Label>
            <Form.Control
              as="select"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Types
              </option>
              <option value="Tender">Tender</option>
              <option value="Bit">Bit</option>
              <option value="Contract">Contract</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="documentCategory">
            <Form.Label>Document Category</Form.Label>
            <Form.Control
              as="select"
              name="documentCategory"
              value={formData.documentCategory}
              onChange={handleChange}
            >
              <option value="" disabled>
                Types
              </option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="versionNumber">
            <Form.Label>Version Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Version Number"
              name="versionNumber"
              value={formData.versionNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="fileUpload">
            <Form.Label>File Upload</Form.Label>
            <Form.Control type="file" name="file" onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="visibility">
            <Form.Label>Visibility</Form.Label>
            <Form.Control
              as="select"
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose Visibility
              </option>
              <option value="All">All</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
    </Container>
  );
}

export default Upload;
