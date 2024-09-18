import React from 'react'
import { Container, Form ,Row,Col, Button} from "react-bootstrap";
function ContractSigning() {
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title mb-4">Contract Signing Screen </h2>
        {/* <iframe src=''/>
        <a href=''></a> */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Procurement Authority Signatory Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Procurement Authority Signatory Name "
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Vendor Signatory Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Vendor Signatory Title"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Procurement Authority Signatory Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Procurement Authority Signatory Name "
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Procurement Authority Signatory Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Procurement Authority Signatory Title"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='text-center'>
          <Button>Sign Contract </Button>
          <Button>Finalize Contract</Button>
        </div>
      </Container>
    </>
  );
}

export default ContractSigning
