import './FourBlock.scss';

const FourBlock = () => {
  const features = [
    {
      id: 'threat',
      icon: '🛡️',
      title: 'Advanced Threat Protection',
      description:
        'AI-powered security monitoring with real-time threat detection and automated response capabilities.',
    },
    {
      id: 'compliance',
      icon: '⚡',
      title: 'Automated Compliance',
      description:
        'Streamline compliance with automated monitoring, reporting, and audit-ready documentation.',
    },
    {
      id: 'trust',
      icon: '🔒',
      title: 'Zero Trust Architecture',
      description:
        'Implement zero trust security with granular access controls and continuous verification.',
    },
    {
      id: 'governance',
      icon: '👤',
      title: 'Unified Governance',
      description:
        'Centralized platform for security policies, risk management, and compliance frameworks.',
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <div className="features__badge">Why Jervix</div>
          <h2 className="features__title">
            Enterprise-Grade Security Made Simple
          </h2>
          <p className="features__subtitle">
            Comprehensive security and compliance solutions designed for modern enterprises.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <div key={feature.id} className={`features__card features__card--${feature.id}`}>
              <div className={`features__card-icon features__card-icon--${feature.id}`}>
                {feature.icon}
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourBlock;
