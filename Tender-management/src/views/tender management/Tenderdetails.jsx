import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Table, Modal, ProgressBar } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialTenders = [
  {
    id: 1,
    title: 'Tender 1',
    refNumber: 'REF-001',
    type: 'Open',
    status: 'Draft',
    category: 'Construction',
    submissionDeadline: new Date(),
    description: 'Description for Tender 1'
  },
  {
    id: 2,
    title: 'Tender 2',
    refNumber: 'REF-002',
    type: 'Selective',
    status: 'Published',
    category: 'IT',
    submissionDeadline: new Date(),
    description: 'Description for Tender 2'
  }
];

const TenderManagement = () => {
  const [tenders, setTenders] = useState(initialTenders);
  const [selectedTender, setSelectedTender] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);

  // Form states for edit functionality
  const [formValues, setFormValues] = useState({
    id: null,
    title: '',
    refNumber: '',
    type: 'Open',
    status: 'Draft',
    category: '',
    submissionDeadline: new Date(),
    description: ''
  });

  // Handle tender selection for viewing
  const handleViewTender = (tender) => {
    setSelectedTender(tender);
    setFormValues(tender);
    setReadOnly(true);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.id) {
      setTenders(tenders.map((tender) => (tender.id === formValues.id ? formValues : tender)));
    } else {
      setTenders([...tenders, { ...formValues, id: tenders.length + 1 }]);
    }
    setShowForm(false);
  };

  const handlePublish = () => {
    setTenders(tenders.map((tender) => (tender.id === selectedTender.id ? { ...tender, status: 'Published' } : tender)));
    setShowForm(false);
  };


  const handleCancel = () => {
    setTenders(tenders.map((tender) => (tender.id === selectedTender.id ? { ...tender, status: 'Cancelled' } : tender)));
    setShowForm(false);
  };


  const handleViewTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <Container className="p-4 bg-white rounded text-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h2 className="mb-4 text-center page-title">Tender Details</h2>

      {/* Tender List */}
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Tender Title</th>
            <th>Reference Number</th>
            <th>Type</th>
            <th>Status</th>
            <th>Submission Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender.id}>
              <td>{tender.title}</td>
              <td>{tender.refNumber}</td>
              <td>{tender.type}</td>
              <td>{tender.status}</td>
              <td>{tender.submissionDeadline.toLocaleDateString()}</td>
              <td>
                <Button variant="outline-primary" size="sm" onClick={() => handleViewTender(tender)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Tender Form Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{readOnly ? 'View Tender' : selectedTender ? 'Edit Tender' : 'Create Tender'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tender Title</Form.Label>
              <Form.Control type="text" name="title" value={formValues.title} onChange={handleInputChange} readOnly={readOnly} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reference Number</Form.Label>
              <Form.Control
                type="text"
                name="refNumber"
                value={formValues.refNumber}
                onChange={handleInputChange}
                readOnly={readOnly}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={formValues.category} onChange={handleInputChange} readOnly={readOnly} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Submission Deadline</Form.Label>
              <br></br>
              <DatePicker
                selected={formValues.submissionDeadline}
                onChange={(date) => setFormValues({ ...formValues, submissionDeadline: date })}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                readOnly={readOnly}
              />
            </Form.Group>

            {!readOnly && (
              <Button type="submit" variant="primary">
                {selectedTender ? 'Update Tender' : 'Create Tender'}
              </Button>
            )}
          </Form>

          {readOnly && (
            <>
              <div className="text-center">
                <Button
                  variant="outline-primary"
                  className="me-3"
                  onClick={() => {
                    setReadOnly(false);
                  }}
                >
                  Edit Tender
                </Button>
                <Button
                  variant="outline-primary"
                  className="me-3"
                  onClick={handlePublish}
                  disabled={selectedTender?.status === 'Published'}
                >
                  Publish
                </Button>
                <Button variant="outline-primary" className="me-3" onClick={handleCancel} disabled={selectedTender?.status === 'Cancelled'}>
                  Cancel
                </Button>
                <Button variant="outline-primary" onClick={handleViewTimeline}>
                  View Timeline
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Timeline Modal */}
      <Modal show={showTimeline} onHide={() => setShowTimeline(false)} centered style={{marginLeft:"-10px",}}>
        <Modal.Header closeButton>
          <Modal.Title>Tender Timeline</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar>
            <ProgressBar now={30} label="Draft" variant="warning" key={1} />
            <ProgressBar now={50} label="Published" variant="success" key={2} />
            <ProgressBar now={20} label="Submissions" variant="info" key={3} />
          </ProgressBar>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TenderManagement;
