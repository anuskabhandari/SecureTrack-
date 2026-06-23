export default function DashboardPreview() {
  return (
    <div className="container py-5 text-center">

      <h2 className="fw-bold mb-5">
        System Overview (Preview)
      </h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h3 className="text-danger">12</h3>
            <p>Critical Vulnerabilities</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h3 className="text-warning">25</h3>
            <p>Open Incidents</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h3 className="text-success">40</h3>
            <p>Resolved Issues</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h3 className="text-primary">AI</h3>
            <p>Risk Engine Active</p>
          </div>
        </div>

      </div>
    </div>
  );
}