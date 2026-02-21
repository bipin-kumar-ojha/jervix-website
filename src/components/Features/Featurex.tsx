import React from 'react';
import './Featurex.scss';

const Featurex: React.FC = () => {
  const features = [
    {
      id: 'risk',
      icon: '⚠️',
      title: 'Risk Assessment',
      description:
        'Continuous risk monitoring with AI-powered threat intelligence and predictive analytics.',
    },
    {
      id: 'compliance',
      icon: '📋',
      title: 'Compliance Management',
      description:
        'Automated compliance tracking for SOC 2, ISO 27001, HIPAA, GDPR, and more.',
    },
    {
      id: 'asset',
      icon: '📦',
      title: 'Asset Discovery',
      description:
        'Automatic discovery and inventory of all digital assets across your infrastructure.',
    },
    {
      id: 'identity',
      icon: '👥',
      title: 'Identity & Access',
      description:
        'Role-based access control with multi-factor authentication and SSO integration.',
    },
    {
      id: 'monitoring',
      icon: '📈',
      title: 'Security Monitoring',
      description:
        '24/7 real-time monitoring with instant alerts and incident response automation.',
    },
    {
      id: 'data',
      icon: '🔒',
      title: 'Data Protection',
      description:
        'End-to-end encryption, data loss prevention, and secure backup solutions.',
    },
    {
      id: 'vulnerability',
      icon: '🔍',
      title: 'Vulnerability Management',
      description:
        'Continuous vulnerability scanning with prioritized remediation workflows.',
    },
    {
      id: 'analytics',
      icon: '📊',
      title: 'Analytics & Insights',
      description:
        'Executive dashboards with comprehensive security metrics and compliance reports.',
    },
  ];

  return (
    <section className="platform-features">
      <div className="platform-features__container">
        <div className="platform-features__header">
          <div className="platform-features__badge">Platform Features</div>
          <h2 className="platform-features__title">
            Complete Security Platform
          </h2>
          <p className="platform-features__subtitle">
            Everything you need to secure, monitor, and manage your enterprise infrastructure.
          </p>
        </div>

        <div className="platform-features__grid">
          {features.map((feature) => (
            <div key={feature.id} className="platform-features__card">
              <div className="platform-features__card-icon">{feature.icon}</div>
              <h3 className="platform-features__card-title">{feature.title}</h3>
              <p className="platform-features__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurex;
