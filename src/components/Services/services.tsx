import './services.scss';

const services = [
  {
    id: 'implementation',
    icon: '🚀',
    title: 'Structured Implementation',
    features: [
      'Smooth setup process',
      'Aligns with your workflow',
      'Quick onboarding',
      'Minimal disruption',
    ],
  },
  {
    id: 'configuration',
    icon: '⚙️',
    title: 'Custom Role Configuration',
    features: [
      'Define custom roles',
      'Multi-level hierarchy',
      'Reporting managers',
      'Flexible permissions',
    ],
  },
  {
    id: 'workflow',
    icon: '📋',
    title: 'Workflow Optimization',
    features: [
      'Task assignments',
      'Internal issue tracking',
      'Reduce delays',
      'Improve clarity',
    ],
  },
  {
    id: 'data-management',
    icon: '📁',
    title: 'Centralized Data Management',
    features: [
      'Accurate records',
      'Structured documentation',
      'Single environment',
      'Controlled access',
    ],
  },
  {
    id: 'reporting-support',
    icon: '📊',
    title: 'Performance & Activity Reporting',
    features: [
      'Employee actions',
      'Task progress',
      'Operational performance',
      'Structured reports',
    ],
  },
  {
    id: 'ongoing-support',
    icon: '🎧',
    title: 'Ongoing Platform Support',
    features: [
      'Reliable assistance',
      'Continuous updates',
      'Efficient operation',
      'Growth support',
    ],
  },
];

const Services = () => (
  <section className="services">
    <div className="services__container">
      <div className="services__header">
        <div className="services__badge">Platform Capabilities</div>
        <h2 className="services__title">Built to Support Growing Organizations</h2>
        <p className="services__subtitle">
          Jervix is designed to strengthen internal structure, improve accountability, 
          and simplify workforce management across departments.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service) => (
          <div key={service.id} className="services__card services__card--simple">
            <div className="services__card-icon services__card-icon--large">{service.icon}</div>
            <h3 className="services__card-title">{service.title}</h3>
            <ul className="services__features-list">
              {service.features.map((feature, idx) => (
                <li key={idx} className="services__feature-item">
                  <span className="services__feature-icon">✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default Services;