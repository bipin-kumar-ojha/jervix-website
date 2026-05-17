import "./InfoGrid.scss";

const blocks = [
  {
    category: "Corporate Enterprises",
    title: "Large & Mid-Sized Businesses",
    desc: "Create structure, roles, projects, and budget visibility in one workspace.",
    features: [
      "Department setup",
      "Designation management",
      "Project task assignment",
      "Budget visibility",
    ],
  },
  {
    category: "Startups & Growing Teams",
    title: "Scaling Organizations",
    desc: "Build your operating structure early and keep ownership clear as teams grow.",
    features: [
      "Organization registration",
      "User and role creation",
      "Team ownership",
      "Performance tracking",
    ],
  },
  {
    category: "Professional Services",
    title: "Consulting & Service Firms",
    desc: "Track client work, employee responsibilities, progress, and project budgets.",
    features: [
      "Project setup",
      "Employee task assignment",
      "Budget tracking",
      "Performance visibility",
    ],
  },
  {
    category: "Operations-Driven Organizations",
    title: "Process-Focused Companies",
    desc: "Keep teams, task ownership, budgets, and performance aligned as work moves.",
    features: [
      "Team structure",
      "Role-based ownership",
      "Task progress tracking",
      "Budget and performance reports",
    ],
  },
];

const InfoGrid = () => (
  <section className="info-grid">
    <div className="info-grid__container">
      <div className="info-grid__header">
        <span className="info-grid__badge">Industry Applications</span>
        <h2 className="info-grid__title">Built for structured teams</h2>
        <p className="info-grid__subtitle">
          Jervix adapts to businesses that want clear ownership, organized work,
          and reliable performance visibility.
        </p>
      </div>

      <div className="info-grid__cards">
        {blocks.map((block) => (
          <article className="info-grid__card" key={block.title}>
            <div>
              <span className="info-grid__category">{block.category}</span>
              <h3 className="info-grid__card-title">{block.title}</h3>
            </div>

            <p className="info-grid__block-desc">{block.desc}</p>

            <ul className="info-grid__features">
              {block.features.slice(0, 3).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InfoGrid;
