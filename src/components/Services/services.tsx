import './services.scss';

const services = [
  {
    id: 'implementation',
    icon: '🚀',
    title: 'Organization Registration',
    features: [
      'Company workspace',
      'Business profile',
      'Admin setup',
      'Quick launch',
    ],
  },
  {
    id: 'configuration',
    icon: '⚙️',
    title: 'Department & Role Setup',
    features: [
      'Departments',
      'Designations',
      'User roles',
      'Access control',
    ],
  },
  {
    id: 'workflow',
    icon: '📋',
    title: 'Project Task Management',
    features: [
      'Create projects',
      'Assign tasks',
      'Track progress',
      'Improve ownership',
    ],
  },
  {
    id: 'data-management',
    icon: '📁',
    title: 'Team & User Management',
    features: [
      'Create teams',
      'Add employees',
      'Manage users',
      'Controlled access',
    ],
  },
  {
    id: 'reporting-support',
    icon: '📊',
    title: 'Budget & Performance Tracking',
    features: [
      'Project budgets',
      'Task progress',
      'Employee performance',
      'Clear reports',
    ],
  },
  {
    id: 'ongoing-support',
    icon: '🎧',
    title: 'Platform Support',
    features: [
      'Reliable assistance',
      'Launch guidance',
      'Module updates',
      'Growth support',
    ],
  },
];

const Services = () => (
  <section className="services">
    <div className="services__container">
      <div className="services__header">
        <div className="services__badge">Platform Capabilities</div>
        <h2 className="services__title">Core Modules for Growing Organizations</h2>
        <p className="services__subtitle">
          Jervix helps teams register their organization, create departments,
          designations, teams, users and roles, manage projects, assign tasks,
          and track budgets and performance.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <article key={service.id} className="services__card">
            <div className="services__card-index">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="services__card-icon">{service.icon}</div>
            </div>
            <div className="services__card-content">
              <h3 className="services__card-title">{service.title}</h3>
            </div>
            <ul className="services__features-list">
              {service.features.map((feature) => (
                <li key={feature} className="services__feature-item">
                  <span className="services__feature-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);


export default Services;
