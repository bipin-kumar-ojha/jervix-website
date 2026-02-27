import './services.scss';

const Services = () => {
  const services = [
    {
      id: 'implementation',
      icon: '🚀',
      title: 'Structured Implementation',
      description:
        'A smooth setup process designed to align the platform with your organization’s structure and operational workflow.',
    },
    {
      id: 'configuration',
      icon: '⚙️',
      title: 'Custom Role Configuration',
      description:
        'Define roles, reporting managers, and multi-level hierarchy structures tailored to your company’s internal framework.',
    },
    {
      id: 'workflow',
      icon: '📋',
      title: 'Workflow Optimization',
      description:
        'Organize task assignments and internal issue tracking to reduce delays and improve operational clarity.',
    },
    {
      id: 'data-management',
      icon: '📁',
      title: 'Centralized Data Management',
      description:
        'Maintain accurate employee records and structured documentation in a single, controlled environment.',
    },
    {
      id: 'reporting-support',
      icon: '📊',
      title: 'Performance & Activity Reporting',
      description:
        'Gain visibility into employee actions, task progress, and operational performance through structured reports.',
    },
    {
      id: 'ongoing-support',
      icon: '🎧',
      title: 'Ongoing Platform Support',
      description:
        'Reliable assistance to ensure your team continues to operate efficiently as your organization grows.',
    },
  ];

  return (
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
            <div key={service.id} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;