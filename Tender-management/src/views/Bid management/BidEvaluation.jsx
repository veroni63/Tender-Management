import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';



const BidEvaluationScreen = () => {
  const [technicalScore, setTechnicalScore] = useState(0);
  const [financialScore, setFinancialScore] = useState(0);
  const [complianceScore, setComplianceScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);

  useEffect(() => {
    // Calculate overall score as an example, you can adjust the calculation logic
    const calculateOverallScore = (technical, financial, compliance) => {
      return (technical + financial + compliance) / 3;
    };
    setOverallScore(calculateOverallScore(technicalScore, financialScore, complianceScore));
  }, [technicalScore, financialScore, complianceScore]);

  return (
    <Container className="bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-center page-title">Bid Evaluation</h3>

      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTenderTitle">
              <Form.Label>Tender Title</Form.Label>
              <Form.Control type="text" readOnly value="Sample Tender Title" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formVendorName">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control type="text" readOnly value="Sample Vendor Name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBidAmount">
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control type="text" readOnly value="$50,000" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formOverallScore">
              <Form.Label>Overall Score</Form.Label>
              <Form.Control type="text" readOnly value={overallScore.toFixed(2)} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formTechnicalScore">
              <Form.Label>Technical Score</Form.Label>
              <Form.Control type="number" min="0" max="100" value={technicalScore} onChange={(e) => setTechnicalScore(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formFinancialScore">
              <Form.Label>Financial Score</Form.Label>
              <Form.Control type="number" min="0" max="100" value={financialScore} onChange={(e) => setFinancialScore(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formComplianceScore">
              <Form.Label>Compliance Score</Form.Label>
              <Form.Control type="number" min="0" max="100" value={complianceScore} onChange={(e) => setComplianceScore(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formStrengths">
              <Form.Label>Strengths</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter strengths here..." />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formWeaknesses">
              <Form.Label>Weaknesses</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter weaknesses here..." />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formRecommendations">
              <Form.Label>Recommendations</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter recommendations here..." />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <Form.Group controlId="formAttachments">
              <Form.Label>Attachments</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <Button type="submit">Submit Evaluation</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default BidEvaluationScreen;
