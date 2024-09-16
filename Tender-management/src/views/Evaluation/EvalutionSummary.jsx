import React, { useState } from 'react';


const EvaluationSummary = () => {
  const bids = [
    {
      vendorName: 'Vendor A',
      technicalScore: 85,
      financialScore: 90,
      complianceScore: 80,
      overallScore: 85,
      status: 'Qualified'
    },
    {
      vendorName: 'Vendor B',
      technicalScore: 75,
      financialScore: 88,
      complianceScore: 85,
      overallScore: 82,
      status: 'Qualified'
    },
    {
      vendorName: 'Vendor C',
      technicalScore: 65,
      financialScore: 70,
      complianceScore: 75,
      overallScore: 70,
      status: 'Disqualified'
    }
  ];

  const [evaluationProgress, setEvaluationProgress] = useState(75);

  const generateReport = () => {
     console.log("generateReport")
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Evaluation Summary</h2>


      <div className="mb-3">
        <strong>Tender Title:</strong> <span className="text-muted">Project ABC</span>
      </div>


      <div className="mb-3">
        <strong>Number of Bids:</strong> <span className="text-muted">{bids.length}</span>
      </div>

      <div className="mb-4">
        <strong>Evaluation Progress:</strong>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${evaluationProgress}%` }}
            aria-valuenow={evaluationProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {evaluationProgress}%
          </div>
        </div>
      </div>

      {/* Bid List Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Vendor Name</th>
              <th scope="col">Technical Score</th>
              <th scope="col">Financial Score</th>
              <th scope="col">Compliance Score</th>
              <th scope="col">Overall Score</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={index}>
                <td>{bid.vendorName}</td>
                <td>{bid.technicalScore}</td>
                <td>{bid.financialScore}</td>
                <td>{bid.complianceScore}</td>
                <td>{bid.overallScore}</td>
                <td>{bid.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Generate Evaluation Report Button */}
      <div className="mt-4">
        <button className="btn btn-primary" onClick={generateReport}>
          Generate Evaluation Report
        </button>
      </div>
    </div>
  );
};

export default EvaluationSummary;
