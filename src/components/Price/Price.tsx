import "./Price.scss";

const Price = () => (
  <section className="pricing">
    <div className="pricing__header">
      <span className="pricing__badge">Pricing Plans</span>
      <h2 className="pricing__title">Simple, Transparent Pricing</h2>
      <p className="pricing__subtitle">
        Choose the plan that fits your needs. All plans include a 14-day free trial.
      </p>
    </div>
    <div className="pricing__cards">
      <div className="pricing__card">
        <span className="pricing__card-title">Professional</span>
        <span className="pricing__card-desc">Perfect for growing businesses</span>
        <div className="pricing__price">$499<span className="pricing__price-unit">/month</span></div>
        <ul className="pricing__features">
          <li>Up to 50 users</li>
          <li>Core security monitoring</li>
          <li>Compliance templates</li>
          <li>Email support</li>
          <li>API access</li>
          <li>Monthly reports</li>
        </ul>
        <button className="pricing__cta pricing__cta--trial">Start Free Trial</button>
      </div>
      <div className="pricing__card pricing__card--popular">
        <span className="pricing__card-title">Business</span>
        <span className="pricing__card-desc">For established enterprises</span>
        <div className="pricing__price">$1,299<span className="pricing__price-unit">/month</span></div>
        <span className="pricing__popular-badge">Most Popular</span>
        <ul className="pricing__features">
          <li>Up to 500 users</li>
          <li>Advanced threat detection</li>
          <li>Multi-framework compliance</li>
          <li>Priority support 24/7</li>
          <li>Custom integrations</li>
          <li>Real-time dashboards</li>
          <li>Security training</li>
          <li>Dedicated account manager</li>
        </ul>
        <button className="pricing__cta pricing__cta--primary">Get Started</button>
      </div>
      <div className="pricing__card">
        <span className="pricing__card-title">Enterprise</span>
        <span className="pricing__card-desc">For large organizations</span>
        <div className="pricing__price pricing__price--custom">Custom</div>
        <ul className="pricing__features">
          <li>Unlimited users</li>
          <li>AI-powered security</li>
          <li>Custom compliance frameworks</li>
          <li>White-glove support</li>
          <li>White-label options</li>
          <li>Advanced analytics</li>
          <li>On-premise deployment</li>
          <li>Custom SLAs</li>
          <li>Dedicated security team</li>
        </ul>
        <button className="pricing__cta pricing__cta--sales">Contact Sales</button>
      </div>
    </div>
    <div className="pricing__footer">
      All plans include <strong>SSL encryption</strong>, <strong>automatic backups</strong>, and <strong>99.99% uptime SLA</strong>. <a href="#" className="pricing__compare-link">Compare all features →</a>
    </div>
  </section>
);

export default Price;
