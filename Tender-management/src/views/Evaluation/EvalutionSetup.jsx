import React, { useState } from 'react';
import { Form, Button, Table, Row, Col, Container } from 'react-bootstrap';

const EvaluationCriteria = () => {
  const [tenderReference, setTenderReference] = useState('');
  const [criterionName, setCriterionName] = useState('');
  const [criterionType, setCriterionType] = useState('Technical');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [scoringMethod, setScoringMethod] = useState('Numeric');
  const [minScore, setMinScore] = useState('');
  const [criteriaList, setCriteriaList] = useState([]);

  const handleAddCriterion = () => {
    if (criterionName && weight && minScore) {
      const newCriterion = {
        name: criterionName,
        type: criterionType,
        weight,
        description,
        scoringMethod,
        minScore
      };
      setCriteriaList([...criteriaList, newCriterion]);
      clearForm();
    } else {
      alert('Please fill all required fields');
    }
  };

  const clearForm = () => {
    setCriterionName('');
    setWeight('');
    setDescription('');
    setMinScore('');
  };

  const handleDeleteCriterion = (index) => {
    const updatedCriteria = criteriaList.filter((_, i) => i !== index);
    setCriteriaList(updatedCriteria);
  };

  return (
    <Container className="p-4 shadow-lg rounded bg-white">
      <h2 className="page-title">Evaluation Criteria Setup</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="tenderReference" className="mb-3">
              <Form.Label>Tender Reference</Form.Label>
              <Form.Control as="select" value={tenderReference} onChange={(e) => setTenderReference(e.target.value)}>
                <option value="">Select Tender Reference</option>
                <option value="Tender1">Tender1</option>
                <option value="Tender2">Tender2</option>
                <option value="Tender3">Tender3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="criterionName" className="mb-3">
              <Form.Label>Criterion Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Criterion Name"
                value={criterionName}
                onChange={(e) => setCriterionName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="criterionType" className="mb-3">
              <Form.Label>Criterion Type</Form.Label>
              <Form.Control as="select" value={criterionType} onChange={(e) => setCriterionType(e.target.value)}>
                <option value="Technical">Technical</option>
                <option value="Financial">Financial</option>
                <option value="Compliance">Compliance</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="weight" className="mb-3">
              <Form.Label>Weight (%)</Form.Label>
              <Form.Control type="number" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="scoringMethod" className="mb-3">
              <Form.Label>Scoring Method</Form.Label>
              <Form.Control as="select" value={scoringMethod} onChange={(e) => setScoringMethod(e.target.value)}>
                <option value="Numeric">Numeric</option>
                <option value="Yes/No">Yes/No</option>
                <option value="Custom Scale">Custom Scale</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="minScore" className="mb-3">
              <Form.Label>Minimum Acceptable Score</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Minimum Acceptable Score"
                value={minScore}
                onChange={(e) => setMinScore(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddCriterion}>
          Add Criterion
        </Button>
      </Form>

      <h3 className="mt-4">Criteria List</h3>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Weight (%)</th>
            <th>Description</th>
            <th>Scoring Method</th>
            <th>Minimum Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {criteriaList.length > 0 ? (
            criteriaList.map((criterion, index) => (
              <tr key={index}>
                <td>{criterion.name}</td>
                <td>{criterion.type}</td>
                <td>{criterion.weight}</td>
                <td>{criterion.description}</td>
                <td>{criterion.scoringMethod}</td>
                <td>{criterion.minScore}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteCriterion(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No criteria added yet
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default EvaluationCriteria;
