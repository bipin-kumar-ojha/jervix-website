import "./Price.scss";

const plans = [
  {
    name: "Starter",
    desc: "For small teams getting organized",
    price: "₹1,999",
    unit: "/month",
    cta: "Start with Starter",
    variant: "trial",
    features: [
      "Up to 50 employees",
      "Departments and designations",
      "Team and role management",
      "Project task assignment",
      "Monthly performance reports",
      "Email support",
    ],
  },
  {
    name: "Starter Plus",
    desc: "For growing teams with more employees",
    price: "₹2,999",
    unit: "/month",
    cta: "Choose Starter Plus",
    variant: "primary",
    popular: true,
    features: [
      "Up to 150 employees",
      "Advanced project management",
      "Budget tracking",
      "Performance dashboards",
      "Team productivity reports",
      "Priority support",
    ],
  },
  {
    name: "Custom",
    desc: "For organizations above 150 employees",
    price: "Custom",
    cta: "Contact Sales",
    variant: "sales",
    features: [
      "150+ employees",
      "Custom department structure",
      "Advanced role permissions",
      "Advanced analytics",
      "Custom deployment options",
      "Dedicated success manager",
    ],
  },
];

const Price = () => (
  <section className="pricing">
    <div className="pricing__header">
      <span className="pricing__badge">Pricing Plans</span>
      <h2 className="pricing__title">Simple Starter Plans for Growing Teams</h2>
      <p className="pricing__subtitle">
        Choose a monthly plan based on your employee count and the modules your organization needs.
      </p>
    </div>
    <div className="pricing__cards">
      {plans.map((plan) => (
        <article
          className={`pricing__card${plan.popular ? " pricing__card--popular" : ""}`}
          key={plan.name}
        >
          {plan.popular && <span className="pricing__popular-badge">Most Popular</span>}
          <div className="pricing__card-head">
            <span className="pricing__card-title">{plan.name}</span>
            <span className="pricing__card-desc">{plan.desc}</span>
          </div>
          <div className={`pricing__price${plan.price === "Custom" ? " pricing__price--custom" : ""}`}>
            {plan.price}
            {plan.unit && <span className="pricing__price-unit">{plan.unit}</span>}
          </div>
          <ul className="pricing__features">
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button className={`pricing__cta pricing__cta--${plan.variant}`}>{plan.cta}</button>
        </article>
      ))}
    </div>
    <div className="pricing__footer">
      All plans include <strong>organization setup</strong>, <strong>role-based access</strong>, and <strong>project task tracking</strong>. <a href="#" className="pricing__compare-link">Compare all features →</a>
    </div>
  </section>
);

export default Price;
