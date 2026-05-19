import "./subscription.scss";

const Subscription = () => (
  <section className="subscription">
    <div className="subscription__container">
      <div className="subscription__content">
        <span className="subscription__badge">Ready to get started?</span>
        <h2 className="subscription__title">
          Launch your organization workspace with Jervix.
        </h2>

        <p className="subscription__desc">
          Start with departments, designations, teams, users, roles, projects,
          task assignments, budgets, and performance tracking in one unified platform.
        </p>

        <div className="subscription__actions">
          <button className="subscription__btn subscription__btn--primary" data-request-demo>
            Request Demo <span className="subscription__btn-arrow">→</span>
          </button>

          <button className="subscription__btn subscription__btn--secondary">
            View Starter Plans
          </button>
        </div>
      </div>

      <aside className="subscription__panel">
        <span className="subscription__panel-label">Starter from</span>
        <strong>₹1,999</strong>
        <span className="subscription__panel-unit">per month for up to 50 employees</span>

        <div className="subscription__features">
          <div className="subscription__feature">
            <span className="subscription__check">✓</span> Organization setup
          </div>

          <div className="subscription__feature">
            <span className="subscription__check">✓</span> Project task management
          </div>

          <div className="subscription__feature">
            <span className="subscription__check">✓</span> Budget and performance tracking
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default Subscription;
