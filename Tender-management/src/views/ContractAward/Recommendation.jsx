import React from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Recommendation() {
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title mb-3"> Award Recommendation Screen </h2>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tender Reference </Form.Label>
              <Form.Control type="text" placeholder="Ref2323" readOnly />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Recommended Vendor</Form.Label>
              <Form.Control type="text" placeholder={"Recommended"} readOnly />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Bid Amount </Form.Label>
              <Form.Control
                type="text"
                placeholder="BitAmount $1000"
                readOnly
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Attach Supporting Documents</Form.Label>
              <Form.Control
                type="file"
                multiple
                placeholder={"Recommended"}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formNotesComments">
              <Form.Label>Justification for Selection </Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Text Area" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3" md={12}>
          <Form.Group>
            <Form.Label>Approval Chain</Form.Label>
            <Form.Control type="text" placeholder="Ref2323" readOnly />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button className="primary">Submit for Approval</Button>
        </div>
      </Container>
    </>
  );
}

export default Recommendation
