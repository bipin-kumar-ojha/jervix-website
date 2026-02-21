import './HeroSection.scss';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__left-badge">Trusted by 500+ Global Enterprises</div>
          <h1 className="hero__left__title">
            Enterprise Security,{' '}
            <span className="hero__left__title-highlight">Simplified</span>
          </h1>
          <p className="hero__left__subtitle">
            Comprehensive security, compliance, and governance platform. Protect your organization with
            AI-powered threat detection and automated compliance management.
          </p>

          <div className="hero__left__buttons">
            <a href="/get-started" className="hero__button hero__button--primary">
              Get Started Free
            </a>
            <a href="/watch-demo" className="hero__button hero__button--outline">
              Watch Demo
            </a>
          </div>

          <div className="hero__left__certs">
            <div className="hero__cert">
              <span className="hero__cert-circle"><span className="hero__cert-tick">&#10003;</span></span>
              SOC 2 Certified
            </div>
            <div className="hero__cert">
              <span className="hero__cert-circle"><span className="hero__cert-tick">&#10003;</span></span>
              ISO 27001
            </div>
            <div className="hero__cert">
              <span className="hero__cert-circle"><span className="hero__cert-tick">&#10003;</span></span>
              GDPR Compliant
            </div>
          </div>
          {/* achievements start */}
          <div className="hero__achievements">
            <div className="hero__achievement-grid">
              <div className="hero__achievement-col">
                <div className="hero__achievement-number">99.99%</div>
                <div className="hero__achievement-label">Uptime</div>
              </div>
              <div className="hero__achievement-col">
                <div className="hero__achievement-number">500+</div>
                <div className="hero__achievement-label">Enterprises</div>
              </div>
              <div className="hero__achievement-col">
                <div className="hero__achievement-number">24/7</div>
                <div className="hero__achievement-label">Support</div>
              </div>
            </div>
          </div>  
          {/* achievements end */}
        </div>

        <div className="hero__right">
          <div className="hero__right-image-container">
            <img
              src="/assets/hero-banner.jpeg"
              alt="Illustration of platform"
              className="hero__right__image"
            />
            <div className="hero__right__card hero__right__card--top-right">
              Real-time <span>Threat Detection</span>
            </div>
            <div className="hero__right__card hero__right__card--bottom-left">
              100% <span>Compliance Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
