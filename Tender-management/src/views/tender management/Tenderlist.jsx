import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container, Table, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const initialTenders = [
  {
    id: 1,
    title: 'Tender 1',
    refNumber: 'REF-001',
    type: 'Open',
    status: 'Published',
    category: 'Construction',
    submissionDeadline: new Date(),
    description: 'Description for Tender 1'
  },
  {
    id: 2,
    title: 'Tender 2',
    refNumber: 'REF-002',
    type: 'Selective',
    status: 'Draft',
    category: 'IT',
    submissionDeadline: new Date(),
    description: 'Description for Tender 2'
  }
];

const TenderManagement = () => {
  const [tenders, setTenders] = useState(initialTenders);
  const [filteredTenders, setFilteredTenders] = useState(initialTenders);
  const [showForm, setShowForm] = useState(false);
  const [editingTender, setEditingTender] = useState(null);




  // Form states
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

  // Filter states
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  // Categories and other filter options  
  const categories = ['Construction', 'IT', 'Healthcare'];
  const statuses = ['Draft', 'Published', 'Closed', 'Cancelled'];
  const types = ['Open', 'Selective', 'Limited'];

  // Handle filtering logic
  useEffect(() => {
    const filtered = tenders.filter((tender) => {
      const matchesSearchText = tender.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = statusFilter ? tender.status === statusFilter : true;
      const matchesType = typeFilter ? tender.type === typeFilter : true;
      const matchesCategory = categoryFilter ? tender.category === categoryFilter : true;
      const matchesDateFrom = dateFrom ? new Date(tender.submissionDeadline) >= dateFrom : true;
      const matchesDateTo = dateTo ? new Date(tender.submissionDeadline) <= dateTo : true;

      return matchesSearchText && matchesStatus && matchesType && matchesCategory && matchesDateFrom && matchesDateTo;
    });

    setFilteredTenders(filtered);
  }, [searchText, statusFilter, typeFilter, categoryFilter, dateFrom, dateTo, tenders]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingTender) {
      setTenders(tenders.map((tender) => (tender.id === editingTender.id ? formValues : tender)));
    } else {
      setTenders([...tenders, { ...formValues, id: tenders.length + 1 }]);
    }
    setShowForm(false);
    setEditingTender(null);
    setFormValues({
      id: null,
      title: '',
      refNumber: '',
      type: 'Open',
      status: 'Draft',
      category: '',
      submissionDeadline: new Date(),
      description: ''
    });
  };

  const handleEdit = (tender) => {
    setEditingTender(tender);
    setFormValues(tender);
    setShowForm(true);
  };

  return (
    <Container className="p-4 bg-white rounded " style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h2 className="mb-4 text-center page-title">Tender List</h2>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Group>
            <Form.Label className="text-center">Search Tenders</Form.Label>
            <Form.Control type="text" placeholder="Enter tender title" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="text-center">
            <Form.Label>Date Range</Form.Label>
            <Row>
              <Col>
                <DatePicker
                  selected={dateFrom}
                  onChange={(date) => setDateFrom(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                  placeholderText="From"
                />
              </Col>
              <Col>
                <DatePicker
                  selected={dateTo}
                  onChange={(date) => setDateTo(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                  placeholderText="To"
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>

      {/* Tender List Table */}
      <Table className="text-center" bordered responsive>
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
          {filteredTenders.map((tender) => (
            <tr key={tender.id}>
              <td>{tender.title}</td>
              <td>{tender.refNumber}</td>
              <td>{tender.type}</td>
              <td>{tender.status}</td>
              <td>{tender.submissionDeadline.toLocaleDateString()}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(tender)}>
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-center">
        <Button className="mt-3 $primary-color " onClick={() => setShowForm(true)}>
          Create New Tender
        </Button>
      </div>

      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingTender ? 'Edit Tender' : 'Create New Tender'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tender Title</Form.Label>
                  <Form.Control  type="text" name="title" placeholder='Tender Title' value={formValues.title} onChange={handleInputChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Reference Number</Form.Label>
                  <Form.Control type="text" name="refNumber" placeholder='Reference Number' value={formValues.refNumber} onChange={handleInputChange} required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select" name="type" value={formValues.type} onChange={handleInputChange}>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" name="status" value={formValues.status} onChange={handleInputChange}>
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" style={{ marginRight: '-3px' }}>
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" name="category" value={formValues.category} onChange={handleInputChange}>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>Submission Deadline</Form.Label>
                  <br></br>
                  <DatePicker
                    selected={formValues.submissionDeadline}
                    onChange={(date) => setFormValues({ ...formValues, submissionDeadline: date })}
                    dateFormat="dd/MM/yyyy"
                    className="form-control PickDateLg"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formValues.description} onChange={handleInputChange} />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" className="$primary-color">
                {editingTender ? 'Update Tender' : 'Create Tender'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TenderManagement;
