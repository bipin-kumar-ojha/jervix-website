import './HeroSection.scss';

export default function HeroSection() {
  return (
   <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__left-badge">
            Workforce Management Platform
          </div>

          <h1 className="hero__left__title">
            Manage Your Workforce with{' '}
            <span className="hero__left__title-highlight">Clarity & Control</span>
          </h1>

          <p className="hero__left__subtitle">
            Jervix centralizes employee records, structure, and daily operations 
            into one streamlined system built for modern organizations.
          </p>

          <div className="hero__left__buttons">
            <a href="/get-started" className="hero__button hero__button--primary">
              Get Early Access
            </a>
            <a href="/watch-demo" className="hero__button hero__button--outline">
              Explore Platform
            </a>
          </div>

          <div className="hero__left__certs">
            <div className="hero__cert">
              <span className="hero__cert-circle">
                <span className="hero__cert-tick">&#10003;</span>
              </span>
              Employee Lifecycle
            </div>

            <div className="hero__cert">
              <span className="hero__cert-circle">
                <span className="hero__cert-tick">&#10003;</span>
              </span>
              Structured Role Management
            </div>

            <div className="hero__cert">
              <span className="hero__cert-circle">
                <span className="hero__cert-tick">&#10003;</span>
              </span>
              Task & Issue Tracking
            </div>
          </div>

        </div>

        <div className="hero__right">
          <div className="hero__right-image-container">
            <img
              src="/assets/hero-banner.jpeg"
              alt="Jervix Workforce Management Dashboard"
              className="hero__right__image"
            />

            <div className="hero__right__card hero__right__card--top-right">
              Structured <span>Role Hierarchy</span>
            </div>

            <div className="hero__right__card hero__right__card--bottom-left">
              Real-Time <span>Task Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}