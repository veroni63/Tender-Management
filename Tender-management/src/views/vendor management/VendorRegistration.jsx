import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Select from 'react-select';

const VendorRegistration = () => {
  const [selectedSectors, setSelectedSectors] = useState([]);
  const sectorOptions = [
    { value: 'IT', label: 'IT' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Healthcare', label: 'Healthcare' },
  ];

  return (
    <Container className="p-4 shadow-lg rounded bg-white">
      <h3 className="text-center mb-4 page-title">Vendor Registration</h3>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCompanyRegNumber">
              <Form.Label>Company Registration Number</Form.Label>
              <Form.Control type="text" placeholder="Enter registration number"/>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCompanyType">
              <Form.Label>Company Type</Form.Label>
              <Form.Control as="select">
                <option>Private</option>
                <option>Public</option>
                <option>Partnership</option>
                {/* Add more types as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formYearEstablished">
              <Form.Label>Year Established</Form.Label>
              <Form.Control type="number" placeholder="Enter year" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select">
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                {/* Add more countries */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter postal code" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPrimaryContactName">
              <Form.Label>Primary Contact Name</Form.Label>
              <Form.Control type="text" placeholder="Enter contact name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPrimaryContactEmail">
              <Form.Label>Primary Contact Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formPrimaryContactPhone">
              <Form.Label>Primary Contact Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCompanyWebsite">
              <Form.Label>Company Website</Form.Label>
              <Form.Control type="url" placeholder="Enter website URL" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCompanySize">
              <Form.Label>Company Size</Form.Label>
              <Form.Control as="select">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formAnnualTurnover">
              <Form.Label>Annual Turnover</Form.Label>
              <Form.Control type="number" placeholder="Enter annual turnover" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTaxID">
              <Form.Label>Tax ID</Form.Label>
              <Form.Control type="text" placeholder="Enter tax ID" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formIndustrySectors">
              <Form.Label>Industry Sectors</Form.Label>
              <Select
                isMulti
                value={selectedSectors}
                onChange={setSelectedSectors}
                options={sectorOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formCompanyProfile">
              <Form.Label>Upload Company Profile</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCertifications">
              <Form.Label>Upload Relevant Certifications</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <Button variant="primary" type="submit" className="px-5 py-2">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default VendorRegistration;
