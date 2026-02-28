import "./InfoGrid.scss";


const blocks = [
  {
    iconClass: "corporate",
    category: "Corporate Enterprises",
    title: "Large & Mid-Sized Businesses",
    desc: "Maintain structured employee records, clear reporting hierarchies, and transparent task tracking across departments.",
    features: [
      "Department-level role management",
      "Multi-level reporting structure",
      "Internal task tracking",
      "Activity monitoring",
    ],
  },
  {
    iconClass: "startup",
    category: "Startups & Growing Teams",
    title: "Scaling Organizations",
    desc: "Build operational structure early with defined roles, organized workflows, and clear accountability.",
    features: [
      "Structured onboarding process",
      "Role clarity as teams grow",
      "Centralized employee data",
      "Task assignment visibility",
    ],
  },
  {
    iconClass: "services",
    category: "Professional Services",
    title: "Consulting & Service Firms",
    desc: "Improve coordination between managers and teams with structured task delegation and progress tracking.",
    features: [
      "Manager-to-team reporting",
      "Project-related task tracking",
      "Performance visibility",
      "Clear responsibility mapping",
    ],
  },
  {
    iconClass: "operations",
    category: "Operations-Driven Organizations",
    title: "Process-Focused Companies",
    desc: "Strengthen operational control with structured workflows, issue tracking, and real-time activity monitoring.",
    features: [
      "Incident tracking",
      "Workflow clarity",
      "Action transparency",
      "Operational reporting",
    ],
  },
];



const checkIcon = (
  <span className="info-grid__feature-check">
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill="currentColor"/>
      <path d="M5 8.5l2 2L11 6.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

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
      {blocks.map((block) => (
        <div className="info-grid__block" key={block.title}>
          <div className="info-grid__block-header">
            <div className={`info-grid__icon info-grid__icon--${block.iconClass}`} />
            <div className="info-grid__block-header-content">
              <span className="info-grid__category">{block.category}</span>
              <h3 className="info-grid__block-title">{block.title}</h3>
            </div>
          </div>
          <hr className="info-grid__divider" />
          <p className="info-grid__block-desc">{block.desc}</p>
          <ul className="info-grid__features info-grid__features--enterprise">
            {block.features.map((feature, i) => (
              <li key={i}>{checkIcon}{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default InfoGrid;