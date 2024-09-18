import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ContractGeneration() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [specialClauses,setSpecialClauses] = useState()
  return (
    <div>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title mb-3"> Contract Generation Screen </h2>
        <Row className="mb-3 ">
          <Col md={4}>
            <Form.Group className="text-start">
              <Form.Label> Contract Template </Form.Label>
              <Form.Control as="select">
                <option value="">Templates</option>
                <option value="Templates1">Templates 1</option>
                <option value="Templates2">Templates 2</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="text-start">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control type="text" placeholder={"vendor name"} readOnly />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="text-center">
              <Form.Label>Date Range</Form.Label>
              <Row>
                <Col>
                  <DatePicker
                    selected={dateFrom}
                    onChange={(date) => setDateFrom(date)}
                    placeholderText="From"
                    className="form-control"
                  />
                </Col>
                <Col>
                  <DatePicker
                    selected={dateTo}
                    onChange={(date) => setDateTo(date)}
                    placeholderText="To"
                    className="form-control"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Contract Value</Form.Label>
              <Form.Control
                type="number"
                placeholder={"Enter the Contract Value"}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="text-start">
              <Form.Label>Tender Reference </Form.Label>
              <Form.Control type="text" placeholder={"Ref12334"} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Form.Group className="mb-3">
            <Form.Label>Payment Terms</Form.Label>
            <Form.Control as={"textarea"} rows={3} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Special Clauses </Form.Label>
            <ReactQuill value={specialClauses} onChange={setSpecialClauses} />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button> Generate Contract Draft </Button>
          <Button>Send for Vendor Review</Button>
        </div>
      </Container>
    </div>
  );
}

export default ContractGeneration;
