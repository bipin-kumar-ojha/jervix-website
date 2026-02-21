import "./InfoGrid.scss";

const InfoGrid = () => (
  <section className="info-grid">
    <div className="info-grid__header">
      <span className="info-grid__badge">Industry Solutions</span>
      <h2 className="info-grid__title">Tailored for Your Industry</h2>
      <p className="info-grid__subtitle">
        Industry-specific security and compliance solutions that meet regulatory requirements
      </p>
    </div>
    <div className="info-grid__blocks">
      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--finance" />
        <span className="info-grid__category">Financial Services</span>
        <h3 className="info-grid__block-title">Banking & Finance</h3>
        <p className="info-grid__block-desc">
          Comprehensive security and compliance solutions for financial institutions with automated regulatory reporting.
        </p>
        <ul className="info-grid__features">
          <li>PCI-DSS compliance</li>
          <li>Fraud detection</li>
          <li>SOX compliance</li>
          <li>Transaction monitoring</li>
        </ul>
      </div>
      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--healthcare" />
        <span className="info-grid__category">Healthcare</span>
        <h3 className="info-grid__block-title">Healthcare & Life Sciences</h3>
        <p className="info-grid__block-desc">
          HIPAA-compliant security platform with patient data protection and medical device security.
        </p>
        <ul className="info-grid__features">
          <li>HIPAA compliance</li>
          <li>Medical IoT security</li>
          <li>PHI protection</li>
          <li>Breach prevention</li>
        </ul>
      </div>
      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--technology" />
        <span className="info-grid__category">Technology</span>
        <h3 className="info-grid__block-title">Technology & SaaS</h3>
        <p className="info-grid__block-desc">
          Cloud-native security solutions for technology companies with DevSecOps integration.
        </p>
        <ul className="info-grid__features">
          <li>Cloud security</li>
          <li>API security</li>
          <li>DevSecOps</li>
          <li>Container security</li>
        </ul>
      </div>
      <div className="info-grid__block">
        <div className="info-grid__icon info-grid__icon--legal" />
        <span className="info-grid__category">Legal & Professional</span>
        <h3 className="info-grid__block-title">Legal Services</h3>
        <p className="info-grid__block-desc">
          Attorney-client privilege protection with document security and confidentiality controls.
        </p>
        <ul className="info-grid__features">
          <li>Document encryption</li>
          <li>Audit trails</li>
          <li>Access controls</li>
          <li>Data residency</li>
        </ul>
      </div>
    </div>
  </section>
);

export default InfoGrid;
