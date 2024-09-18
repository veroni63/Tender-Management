import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
const TenderForm = () => {
  const [tenderRef, setTenderRef] = useState(`REF-${Date.now()}`);
  const [description, setDescription] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [category, setCategory] = useState([]);
  const [publicationDate, setPublicationDate] = useState(null);
  const [submissionDeadline, setSubmissionDeadline] = useState(null);
  const [files, setFiles] = useState([]);

  const categoryOptions = [
    { value: 'construction', label: 'Construction' },
    { value: 'it', label: 'IT' },
    { value: 'healthcare', label: 'Healthcare' }
    // Add more categories as needed
  ];

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  return (
    <Container className="p-4 bg-white rounded" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h1 className="mb-4 text-center page-title">Create Tender</h1>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tender Title</Form.Label>
              <Form.Control type="text" placeholder="Tender Title" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tender Reference Number</Form.Label>
              <Form.Control type="text" value={tenderRef} readOnly />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tender Type</Form.Label>
              <Form.Control as="select">
                <option disabled>Select Tender Type</option>
                <option>Open</option>
                <option>Selective</option>
                <option>Limited</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Select isMulti options={categoryOptions} onChange={setCategory} placeholder="Select Categories" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Estimated Value</Form.Label>
              <Form.Control type="number" placeholder="Estimated Value" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form.Group className="mb-3 text-center">
              <Form.Label>Publication Date</Form.Label>
              <br></br>
              <DatePicker
                selected={publicationDate}
                onChange={(date) => setPublicationDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control PickDate"
                placeholderText="Select Publication Date"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group style={{ marginLeft: '-3px' }} className="mb-3 text-center ">
              <Form.Label>Submission Deadline</Form.Label>
              <br></br>
              <DatePicker
                selected={submissionDeadline}
                onChange={(date) => setSubmissionDeadline(date)}
                showTimeSelect
                dateFormat="Pp"
                className="form-control PickDate"
                placeholderText="Select Submission Deadline"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tender Status</Form.Label>
              <Form.Control as="select">
                <option disabled>Select Status</option>
                <option>Draft</option>
                <option>Published</option>
                <option>Closed</option>
                <option>Cancelled</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <ReactQuill value={description} onChange={setDescription} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Eligibility Criteria</Form.Label>
          <ReactQuill value={eligibilityCriteria} onChange={setEligibilityCriteria} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Attach Documents</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Contact Person</Form.Label>
              <Form.Control type="text" placeholder="Contact Person" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control type="email" placeholder="Contact Email" />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button className='px-4' type="submit"> Submit </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TenderForm;
