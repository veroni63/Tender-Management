import React, { useState } from 'react';
import { Modal, Button, Table, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const initialVendors = [
  { id: 1, name: 'Vendor A', industry: 'IT', size: 'Small', rating: 4, status: 'Active' },
  { id: 2, name: 'Vendor B', industry: 'Finance', size: 'Medium', rating: 3, status: 'Inactive' }
];

const VendorManagement = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ industry: '', size: '', rating: '' });
  const [showModal, setShowModal] = useState(false);
  const [newVendor, setNewVendor] = useState({ name: '', industry: '', size: '', rating: 0, status: 'Active' });
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleAddVendor = () => {
    if (isEditMode) {
      setVendors(vendors.map((vendor) => (vendor.id === selectedVendor.id ? newVendor : vendor)));
    } else {
      setVendors([...vendors, { ...newVendor, id: vendors.length + 1 }]);
    }
    resetModal();
  };

  const handleEdit = (vendor) => {
    setSelectedVendor(vendor);
    setNewVendor(vendor);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (vendorId) => {
    setVendors(vendors.filter((vendor) => vendor.id !== vendorId));
  };

  const resetModal = () => {
    setShowModal(false);
    setNewVendor({ name: '', industry: '', size: '', rating: 0, status: 'Active' });
    setIsEditMode(false);
    setSelectedVendor(null);
  };

  const filteredVendors = vendors.filter((vendor) => {
    return (
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.industry ? vendor.industry === filters.industry : true) &&
      (filters.size ? vendor.size === filters.size : true) &&
      (filters.rating ? vendor.rating === Number(filters.rating) : true)
    );
  });

  return (
    <div className="container mt-4 text-center">
      <h2 className="page-title mb-4">Vendor List</h2>
      <Row className="mb-3">
        <Col md={3}>
          <FormControl placeholder="Search Vendors" value={searchTerm} onChange={handleSearchChange} />
        </Col>
        <Col md={3}>
          <Form.Control as="select" name="industry" onChange={handleFilterChange} value={filters.industry}>
            <option value="">Filter by Industry</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </Form.Control>
        </Col>
        <Col md={3}>
          <Form.Control as="select" name="size" onChange={handleFilterChange} value={filters.size}>
            <option value="">Filter by Company Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </Form.Control>
        </Col>
        <Col md={3}>
          <Form.Control as="select" name="rating" onChange={handleFilterChange} value={filters.rating}>
            <option value="">Filter by Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Col>
      </Row>

      <Table responsive bordered>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Industry</th>
            <th>Size</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.industry}</td>
              <td>{vendor.size}</td>
              <td>{vendor.rating}</td>
              <td>{vendor.status}</td>
              <td>
                <Button variant="outline-primary" onClick={() => handleEdit(vendor)}>
                  <FaEdit />
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => handleDelete(vendor.id)}>
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={() => setShowModal(true)} className="mt-3">
        Add New Vendor
      </Button>

      <Modal show={showModal} onHide={resetModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Edit Vendor' : 'Add New Vendor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formVendorName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                value={newVendor.name}
                onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVendorIndustry">
              <Form.Label>Industry</Form.Label>
              <Form.Select value={newVendor.industry} onChange={(e) => setNewVendor({ ...newVendor, industry: e.target.value })}>
                <option value="">Select Industry</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVendorSize">
              <Form.Label>Company Size</Form.Label>
              <Form.Select value={newVendor.size} onChange={(e) => setNewVendor({ ...newVendor, size: e.target.value })}>
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVendorRating">
              <Form.Label>Rating</Form.Label>
              <Form.Select value={newVendor.rating} onChange={(e) => setNewVendor({ ...newVendor, rating: Number(e.target.value) })}>
                <option value="0">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddVendor}>
            {isEditMode ? 'Save Changes' : 'Add Vendor'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VendorManagement;
