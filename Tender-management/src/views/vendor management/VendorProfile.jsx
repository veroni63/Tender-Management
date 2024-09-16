import React, { useState } from 'react';
import { Modal, Button, Table, Form, Row, Col, Container, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample Data for Past Bids and Awarded Contracts
const pastBids = [
  { id: 1, title: 'Tender 1', date: '2024-08-01', status: 'Pending' },
  { id: 2, title: 'Tender 2', date: '2024-07-15', status: 'Rejected' }
];

const awardedContracts = [
  { id: 1, title: 'Contract A', value: '$10,000', startDate: '2024-01-01', endDate: '2024-12-31' },
  { id: 2, title: 'Contract B', value: '$15,000', startDate: '2024-02-01', endDate: '2024-11-30' }
];

// Sample Performance Metrics Data
const performanceData = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3'],
  datasets: [
    {
      label: 'Performance',
      data: [75, 85, 60],
      backgroundColor: ['#2d9eb2', '#4ab67d', '#ffcc00']
    }
  ]
};

const VendorDetails = () => {
  const [vendor, setVendor] = useState({
    name: 'Vendor A',
    industry: 'IT',
    size: 'Small',
    rating: 4,
    status: 'Active'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  return (
    <Container className="mt-4 ">
      <h2 className="text-center page-title">Vendor Details</h2>

      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formVendorName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" name="name" value={vendor.name} onChange={handleInputChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formVendorIndustry">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control type="text" name="industry" value={vendor.industry} onChange={handleInputChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formVendorSize">
                  <Form.Label>Company Size</Form.Label>
                  <Form.Control type="text" name="size" value={vendor.size} onChange={handleInputChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formVendorStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" name="status" value={vendor.status} onChange={handleInputChange} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Vendor Rating */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Vendor Rating</h5>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < vendor.rating ? 'text-warning' : 'text-muted'}>
                ★
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* Performance Metrics */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Performance Metrics</h5>
          <Bar data={performanceData} />
        </Card.Body>
      </Card>

      {/* Past Bids Table */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Past Bids</h5>
          <Table  bordered >
            <thead>
              <tr>
                <th>Tender Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pastBids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.title}</td>
                  <td>{bid.date}</td>
                  <td>{bid.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Awarded Contracts Table */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Awarded Contracts</h5>
          <Table bordered >
            <thead>
              <tr>
                <th>Contract Title</th>
                <th>Value</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {awardedContracts.map((contract) => (
                <tr key={contract.id}>
                  <td>{contract.title}</td>
                  <td>{contract.value}</td>
                  <td>{contract.startDate}</td>
                  <td>{contract.endDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VendorDetails;
