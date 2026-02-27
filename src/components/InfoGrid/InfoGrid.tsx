import "./InfoGrid.scss";

const InfoGrid = () => (
  <section className="info-grid">
    <div className="info-grid__header">
      <span className="info-grid__badge">Industry Applications</span>
      <h2 className="info-grid__title">Designed for Structured Organizations</h2>
      <p className="info-grid__subtitle">
        Jervix adapts to different industries where employee structure, accountability, 
        and operational visibility are essential.
      </p>
    </div>

    <div className="info-grid__blocks">
      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--corporate" />
        <span className="info-grid__category">Corporate Enterprises</span>
        <h3 className="info-grid__block-title">Large & Mid-Sized Businesses</h3>
        <p className="info-grid__block-desc">
          Maintain structured employee records, clear reporting hierarchies, and transparent task tracking across departments.
        </p>
        <ul className="info-grid__features">
          <li>Department-level role management</li>
          <li>Multi-level reporting structure</li>
          <li>Internal task tracking</li>
          <li>Activity monitoring</li>
        </ul>
      </div>

      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--startup" />
        <span className="info-grid__category">Startups & Growing Teams</span>
        <h3 className="info-grid__block-title">Scaling Organizations</h3>
        <p className="info-grid__block-desc">
          Build operational structure early with defined roles, organized workflows, and clear accountability.
        </p>
        <ul className="info-grid__features">
          <li>Structured onboarding process</li>
          <li>Role clarity as teams grow</li>
          <li>Centralized employee data</li>
          <li>Task assignment visibility</li>
        </ul>
      </div>

      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--services" />
        <span className="info-grid__category">Professional Services</span>
        <h3 className="info-grid__block-title">Consulting & Service Firms</h3>
        <p className="info-grid__block-desc">
          Improve coordination between managers and teams with structured task delegation and progress tracking.
        </p>
        <ul className="info-grid__features">
          <li>Manager-to-team reporting</li>
          <li>Project-related task tracking</li>
          <li>Performance visibility</li>
          <li>Clear responsibility mapping</li>
        </ul>
      </div>

      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--operations" />
        <span className="info-grid__category">Operations-Driven Organizations</span>
        <h3 className="info-grid__block-title">Process-Focused Companies</h3>
        <p className="info-grid__block-desc">
          Strengthen operational control with structured workflows, issue tracking, and real-time activity monitoring.
        </p>
        <ul className="info-grid__features">
          <li>Incident tracking</li>
          <li>Workflow clarity</li>
          <li>Action transparency</li>
          <li>Operational reporting</li>
        </ul>
      </div>
    </div>
  </section>
);

export default InfoGrid;