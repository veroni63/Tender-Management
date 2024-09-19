import { FormGroup } from "@mui/material";
import { useState } from "react";
import {
  Button,
  Table,
  Form,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AuditLog() {
  const initialEntries = [
    {
      id: 1,
      timestamp: "2024-09-19T10:00:00Z",
      user: "User A",
      action: "Create",
      module: "Module 1",
      details: "Created a new entry in Module 1",
    },
    {
      id: 2,
      timestamp: "2024-09-18T14:30:00Z",
      user: "User B",
      action: "Update",
      module: "Module 2",
      details: "Updated an entry in Module 2",
    },
  ];

  const [entries, setEntries] = useState(initialEntries);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    action: "",
    user: "",
    module: "",
    startDate: "",
    endDate: "",
  });

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const handleDateChange = (name, date) => {
    setFilters({ ...filters, [name]: date });
  };

  const filteredEntries = entries.filter((entry) => {
    const withinDateRange =
      (!filters.startDate ||
        new Date(entry.timestamp) >= new Date(filters.startDate)) &&
      (!filters.endDate ||
        new Date(entry.timestamp) <= new Date(filters.endDate));

    return (
      entry.details.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.action ? entry.action === filters.action : true) &&
      (filters.user ? entry.user === filters.user : true) &&
      (filters.module ? entry.module === filters.module : true) &&
      withinDateRange
    );
  });

  return (
    <Container className="p-4 shadow-lg rounded bg-white">
      <h2 className="page-title mb-3">Audit Log</h2>

      <Row>
        <Col className="mb-3" md={6}>
          <FormGroup>
            <Form.Label>Search Audit Log</Form.Label>
            <FormControl
              placeholder="Search Audit Log"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </FormGroup>
        </Col>
        <Col className="mb-3" md={3}>
          <FormGroup>
            <Form.Label>Filter by Action</Form.Label>
            <Form.Control
              as="select"
              name="action"
              onChange={handleFilterChange}
              value={filters.action}
            >
              <option value="">Filter by Action Type</option>
              <option value="Create">Create</option>
              <option value="Update">Update</option>
              <option value="Delete">Delete</option>
            </Form.Control>
          </FormGroup>
        </Col>
        <Col className="mb-3" md={3}>
          <Form.Group>
            <Form.Label>Filter by User</Form.Label>
            <Form.Control
              as="select"
              name="user"
              onChange={handleFilterChange}
              value={filters.user}
            >
              <option value="">Filter by User</option>
              <option value="User A">User A</option>
              <option value="User B">User B</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3" md={6}>
          <Form.Group>
            <Form.Label>Filter by Module</Form.Label>
            <Form.Control
              as="select"
              name="module"
              onChange={handleFilterChange}
              value={filters.module}
            >
              <option value="">Filter by Module</option>
              <option value="Module 1">Module 1</option>
              <option value="Module 2">Module 2</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group controlId="dateRange">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              onChange={(e) => handleDateChange("startDate", e.target.value)}
              value={filters.startDate}
            />
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group controlId="dateRange">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              placeholder="from"
              onChange={(e) => handleDateChange("endDate", e.target.value)}
              value={filters.endDate}
            />
          </Form.Group>
        </Col>
      </Row>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>User</th>
            <th>Action</th>
            <th>Module</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
              <td>{entry.user}</td>
              <td>{entry.action}</td>
              <td>{entry.module}</td>
              <td>{entry.details}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Button variant="primary" className="mt-3">
          Export Audit Log
        </Button>
      </div>
    </Container>
  );
}

export default AuditLog;
