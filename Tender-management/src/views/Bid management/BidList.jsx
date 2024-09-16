import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Table, Modal, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialBids = [
  {
    id: 1,
    title: 'Bid for Construction Project',
    refNumber: 'REF-1001',
    submissionDate: new Date(),
    status: 'Open',
    tenderType: 'Open'
  },
  {
    id: 2,
    title: 'IT Services Bid',
    refNumber: 'REF-2001',
    submissionDate: new Date(),
    status: 'Closed',
    tenderType: 'Selective'
  },
  {
    id: 3,
    title: 'Electrical Work Bid',
    refNumber: 'REF-3001',
    submissionDate: new Date(),
    status: 'Open',
    tenderType: 'Limited'
  }
];

const BidListScreen = () => {
  const [bids, setBids] = useState(initialBids);
  const [filteredBids, setFilteredBids] = useState(initialBids);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedBid, setSelectedBid] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    filterBids();
  }, [searchTerm, statusFilter, typeFilter, fromDate, toDate]);

  const filterBids = () => {
    let filtered = [...bids];

    if (searchTerm) {
      filtered = filtered.filter((bid) => bid.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (statusFilter) {
      filtered = filtered.filter((bid) => bid.status === statusFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter((bid) => bid.tenderType === typeFilter);
    }

    if (fromDate) {
      filtered = filtered.filter((bid) => new Date(bid.submissionDate) >= fromDate);
    }

    if (toDate) {
      filtered = filtered.filter((bid) => new Date(bid.submissionDate) <= toDate);
    }

    setFilteredBids(filtered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleViewBid = (bid) => {
    setSelectedBid(bid);
    setShowModal(true);
    setIsEditing(false);
  };

  const handleEditBid = (bid) => {
    setSelectedBid(bid);
    setShowModal(true);
    setIsEditing(true);
  };

  const handleDeleteBid = (bid) => {
    setSelectedBid(bid);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setBids(bids.filter((bid) => bid.id !== selectedBid.id));
    setFilteredBids(filteredBids.filter((bid) => bid.id !== selectedBid.id));
    setShowDeleteModal(false);
  };

  const handleSaveChanges = () => {
    setBids(bids.map((bid) => (bid.id === selectedBid.id ? selectedBid : bid)));
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  return (
    <Container className="p-4 bg-white rounded text-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h2 className="mb-4 page-title">Bid List</h2>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Group className="text-start">
            <Form.Label>Search by Bid Title</Form.Label>
            <Form.Control type="text" placeholder="Search by Bid Title" value={searchTerm} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="text-start">
            <Form.Label>Search by Bid Title</Form.Label>
            <Form.Control as="select" value={statusFilter} onChange={handleStatusChange}>
              <option value="">Filter by Status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="text-start">
            <Form.Label>Filter by Tender Type</Form.Label>
            <Form.Control as="select" value={typeFilter} onChange={handleTypeChange}>
              <option value="">Filter by Tender Type</option>
              <option value="Open">Open</option>
              <option value="Selective">Selective</option>
              <option value="Limited">Limited</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="text-center">
            <Form.Label>Date Range</Form.Label>
            <Row>
              <Col>
                <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} placeholderText="From" className="form-control" />
              </Col>
              <Col>
                <DatePicker selected={toDate} onChange={(date) => setToDate(date)} placeholderText="To" className="form-control" />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>

      <Table bordered responsive>
        <thead>
          <tr>
            <th>Bid Title</th>
            <th>Tender Reference</th>
            <th>Submission Date</th>
            <th>Status</th>
            <th>Tender Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBids.map((bid) => (
            <tr key={bid.id}>
              <td>{bid.title}</td>
              <td>{bid.refNumber}</td>
              <td>{bid.submissionDate.toLocaleDateString()}</td>
              <td>{bid.status}</td>
              <td>{bid.tenderType}</td>
              <td>
                <Button variant="outline-primary" size="sm" onClick={() => handleViewBid(bid)}>
                  View
                </Button>{' '}
                <Button variant="outline-success" size="sm" onClick={() => handleEditBid(bid)}>
                  Edit
                </Button>{' '}
                <Button variant="outline-danger" size="sm" onClick={() => handleDeleteBid(bid)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Viewing/Editing */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Bid' : 'View Bid'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEditing ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Bid Title</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedBid?.title}
                  onChange={(e) => setSelectedBid({ ...selectedBid, title: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reference Number</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedBid?.refNumber}
                  onChange={(e) => setSelectedBid({ ...selectedBid, refNumber: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select value={selectedBid?.status} onChange={(e) => setSelectedBid({ ...selectedBid, status: e.target.value })}>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tender Type</Form.Label>
                <Form.Select
                  value={selectedBid?.tenderType}
                  onChange={(e) => setSelectedBid({ ...selectedBid, tenderType: e.target.value })}
                >
                  <option value="Open">Open</option>
                  <option value="Selective">Selective</option>
                  <option value="Limited">Limited</option>
                </Form.Select>
              </Form.Group>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </Form>
          ) : (
            <>
              <p>
                <strong>Bid Title:</strong> {selectedBid?.title}
              </p>
              <p>
                <strong>Tender Reference:</strong> {selectedBid?.refNumber}
              </p>
              <p>
                <strong>Submission Date:</strong> {selectedBid?.submissionDate.toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {selectedBid?.status}
              </p>
              <p>
                <strong>Tender Type:</strong> {selectedBid?.tenderType}
              </p>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal for Delete Confirmation */}
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this bid?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BidListScreen;
