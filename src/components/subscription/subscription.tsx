import "./subscription.scss";

const Subscription = () => (
  <section className="subscription">
    <div className="subscription__background"></div>

    <div className="subscription__container">
      <h2 className="subscription__title">
        Bring Structure to Your Workforce Management
      </h2>

      <p className="subscription__desc">
        Jervix helps organizations streamline employee management, 
        strengthen accountability, and build a clear operational structure — 
        all within one unified platform.
      </p>

      <div className="subscription__actions">
        <button className="subscription__btn subscription__btn--primary">
          Request Early Access <span className="subscription__btn-arrow">→</span>
        </button>

        <button className="subscription__btn subscription__btn--secondary">
          Schedule a Demo
        </button>
      </div>

      <div className="subscription__features">
        <div className="subscription__feature">
          <span className="subscription__check">✔</span> Structured employee lifecycle management
        </div>

        <div className="subscription__feature">
          <span className="subscription__check">✔</span> Clear reporting hierarchy & role control
        </div>

        <div className="subscription__feature">
          <span className="subscription__check">✔</span> Transparent task & activity tracking
        </div>
      </div>
    </div>
  </section>
);

export default Subscription;