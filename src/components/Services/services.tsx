import './services.scss';

const Services = () => {
  const services = [
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud Security',
      description:
        'Comprehensive security solutions for AWS, Azure, and Google Cloud with automated posture management and compliance monitoring.',
    },
    {
      id: 'managed',
      icon: '⚙️',
      title: 'Managed Security Services',
      description:
        'Expert security operations team providing 24/7 monitoring, threat hunting, and incident response services.',
    },
    {
      id: 'compliance',
      icon: '📋',
      title: 'Compliance Advisory',
      description:
        'Strategic guidance and support for achieving SOC 2, ISO 27001, HIPAA, and other compliance certifications.',
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'Security Training',
      description:
        'Comprehensive training programs for employees and security teams to build a culture of security awareness.',
    },
    {
      id: 'incident',
      icon: '⚡',
      title: 'Incident Response',
      description:
        'Rapid incident response services with forensic analysis, containment, and remediation support.',
    },
    {
      id: 'enterprise',
      icon: '🎧',
      title: 'Enterprise Support',
      description:
        'Dedicated account management, priority support, and custom SLAs for enterprise customers.',
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <div className="services__badge">Professional Services</div>
          <h2 className="services__title">Expert Services & Support</h2>
          <p className="services__subtitle">
            Comprehensive services to help you maximize security and maintain compliance.
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
