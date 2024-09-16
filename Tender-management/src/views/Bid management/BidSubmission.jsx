import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Select from 'react-select';
import { useDropzone } from 'react-dropzone';

const BidSubmission = () => {
  const [tenderReference, setTenderReference] = useState(null);
  const [industrySectors, setIndustrySectors] = useState([]);
     const [formData, setFormData] = useState({
       requirement: '',
       category: '',
       status: '',
       dueDate: ''
     });

     // Handles input changes
     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
    },
    multiple: true,
  });

  const handleTenderReferenceChange = (selectedOption) => {
    setTenderReference(selectedOption);
  };

  const handleComplianceChecklistChange = (selectedOptions) => {
    setIndustrySectors(selectedOptions || []);
  };

  return (
    <Container className="p-5 bg-white shadow-sm    ">
      <h3 className="mb-4 text-center page-title">Bid submission</h3>
      <Form>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="formTenderReference">
              <Form.Label>Tender Reference</Form.Label>
              <Select
                value={tenderReference}
                onChange={handleTenderReferenceChange}
                options={[
                  { value: 'tender1', label: 'Tender 1' },
                  { value: 'tender2', label: 'Tender 2' }
                ]}
                isSearchable
                placeholder="Select Tender Reference"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBidTitle">
              <Form.Label>Bid Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Bid Title" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="formBidAmount">
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter Bid Amount" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCurrency">
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="formDeliveryTimeline">
              <Form.Label>Delivery Timeline</Form.Label>
              <Row>
                <Col md={8}>
                  <Form.Control type="number" placeholder="Enter timeline" />
                </Col>
                <Col md={4}>
                  <Form.Control as="select">
                    <option>Days</option>
                    <option>Weeks</option>
                    <option>Months</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCertifications">
              <Form.Label>Technical Proposal</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="formCertifications">
              <Form.Label>Financial Proposal</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCertifications">
              <Form.Label>Additional Documents</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
        </Row>
        {/* Compliance Checklist (dynamic checklist based on tender requirements) */}
        <Row className="mb-4 ">
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Compliance ** </Form.Label>
              <Form.Select name="status" value={formData.status} onChange={handleChange} required>
                <option value="">Select Status</option>
                <option value="compliant">Compliant</option>
                <option value="non-compliant">Non-Compliant</option>
                <option value="not-applicable">Not Applicable</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <Form.Group controlId="formDeclarationOfCompliance">
              <Form.Check type="checkbox" label="Declaration of Compliance" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <Form.Group controlId="formNotesComments">
              <Form.Label>Notes/Comments</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your comments" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <Button variant="primary">Submit Bid</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default BidSubmission;
