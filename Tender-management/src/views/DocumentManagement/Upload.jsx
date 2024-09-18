import React from 'react'
import { Container,Form,Row,Col } from 'react-bootstrap';
function Upload() {
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title"> Document Upload Screen </h2>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Document Title</Form.Label>
              <Form.Control type="text" placeholder="Document Title" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default Upload;
