import React, { useState } from 'react'
import { Container, Row, Col,Form,Table } from "react-bootstrap";
import Select from "react-select";
function EvalutionAssignment() {
  const [tenderReference,setTenderReference] = useState();
  const evaluatorAvailable = [
    {value:'Evaluator 1' ,label:'Evaluator 1'},
    {value:'Evaluator 2' ,label:'Evaluator 2'},
    {value:'Evaluator 3' ,label:'Evaluator 3'}
  ];
  const [tableValue, setTableValue] = useState([
    { id: "1", name: "Evaluator 1", dept: "Department 1", status: "Active" },
    { id: "2", name: "Evaluator 2", dept: "Department 2", status: "Active" },
    { id: "3", name: "Evaluator 3", dept: "Department 3", status: "Active" },
  ]);
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title">Evaluator Assignment Screen</h2>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mb-2">Tender Reference</Form.Label>
              <Form.Control
                as="select"
                value={tenderReference}
                onChange={(e) => setTenderReference(e.target.value)}
              >
                <option value="">Select Tender Reference</option>
                <option value="Tender1">Tender1</option>
                <option value="Tender2">Tender2</option>
                <option value="Tender3">Tender3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formIndustrySectors">
              <Form.Label>Available Evaluators</Form.Label>
              <Select
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                options={evaluatorAvailable}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Table className="mt-4 text-center" responsive bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableValue.map((tableItems) => (
                <tr key={tableItems.id}>
                  <td>{tableItems.name}</td>
                  <td>{tableItems.dept}</td>
                  <td>{tableItems.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row className="mt-4 mx-2">
          <Col md={12}>
            <Form.Group controlId="formDeclarationOfCompliance">
              <Form.Check
                type="checkbox"
                label="Conflict of Interest Declaration "
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EvalutionAssignment
