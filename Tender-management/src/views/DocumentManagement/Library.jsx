import React, { useState } from "react";
import { Container, Form, Row, Col, Table, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Library() {
  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const documents = [
    {
      title: "Document 1",
      type: "PDF",
      category: "Finance",
      version: "1.0",
      lastModified: "2024-09-10",
      visibility: "Public",
    },
    {
      title: "Document 2",
      type: "Word",
      category: "HR",
      version: "1.1",
      lastModified: "2024-09-12",
      visibility: "Private",
    },
    {
      title: "Document 3",
      type: "PDF",
      category: "HR",
      version: "2.0",
      lastModified: "2024-09-14",
      visibility: "Public",
    },
  ];


  const filteredDocuments = documents.filter((doc) => {

    const matchesSearch = doc.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesType = typeFilter === "" || doc.type === typeFilter;


    const matchesCategory =
      categoryFilter === "" || doc.category === categoryFilter;


    const matchesVisibility =
      visibilityFilter === "" || doc.visibility === visibilityFilter;


    const docDate = new Date(doc.lastModified);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    const matchesDate = (!from || docDate >= from) && (!to || docDate <= to);

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesVisibility &&
      matchesDate
    );
  });

  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title mb-4">Document Library Screen</h2>
        <Form>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search Documents</Form.Label>
                <Form.Control
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Enter text to search..."
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="PDF">PDF</option>
                  <option value="Word">Word</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="Finance">Finance</option>
                  <option value="HR">HR</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Form.Label>Visibility</Form.Label>
                <Form.Control
                  as="select"
                  value={visibilityFilter}
                  onChange={(e) => setVisibilityFilter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="text-center">
                <Form.Label>Date Range</Form.Label>
                <Row>
                  <Col>
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      placeholderText="From"
                    />
                  </Col>
                  <Col>
                    <DatePicker
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      placeholderText="To"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Table bordered>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Category</th>
              <th>Version</th>
              <th>Last Modified</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc, index) => (
              <tr key={index}>
                <td>{doc.title}</td>
                <td>{doc.type}</td>
                <td>{doc.category}</td>
                <td>{doc.version}</td>
                <td>{doc.lastModified}</td>
                <td>{doc.visibility}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
          <Button className="primary mt-3">Upload New Document</Button>
        </div>
      </Container>
    </>
  );
}

export default Library;
