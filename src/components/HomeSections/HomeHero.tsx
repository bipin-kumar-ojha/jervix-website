import { stats } from "./homeSectionData";

const trustStats = stats.slice(0, 3);

export default function HomeHero() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__bg" aria-hidden="true">
        <span className="home-hero__grid" />
        <span className="home-hero__glow home-hero__glow--one" />
        <span className="home-hero__glow home-hero__glow--two" />
      </div>

      <div className="home-hero__content">
        <span className="home-hero__badge">
          <span className="home-hero__badge-dot" aria-hidden="true" />
          AI &amp; Software Engineering Partner
        </span>

        <h1>
          Build Future-Ready Digital Solutions with <span>AI & Software Engineering</span>
        </h1>

        <p>
          Jervix Technologies helps businesses design, build, and scale AI solutions, custom
          software, web applications, mobile apps, SaaS platforms, cloud systems, and enterprise
          workflows.
        </p>

        <div className="home-hero__actions">
          <a href="#services" className="primary-action">
            Explore Services
            <svg
              className="home-hero__arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="secondary-action" data-request-demo>
            Start a Project
          </a>
        </div>

        <div className="home-hero__trust" aria-label="Jervix highlights">
          {trustStats.map(([value, label]) => (
            <div className="home-hero__trust-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home-hero__visual">
        <div className="home-hero__frame">
          <img
            src="/assets/jervix-home-culture-trust-hero.png"
            alt="Jervix AI and software engineering team collaborating on digital solutions"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="home-hero__float-card home-hero__float-card--a">
          <span className="home-hero__float-icon">
            <img src="/assets/workflow-icons/build-color.svg" alt="" loading="lazy" />
          </span>
          <span className="home-hero__float-text">
            <strong>AI-Augmented Engineering</strong>
            <span>Embedded in every build</span>
          </span>
        </div>

        <div className="home-hero__float-card home-hero__float-card--b">
          <span className="home-hero__float-icon">
            <img src="/assets/workflow-icons/launch-color.svg" alt="" loading="lazy" />
          </span>
          <span className="home-hero__float-text">
            <strong>360° Delivery</strong>
            <span>Strategy through to launch</span>
          </span>
        </div>
      </div>
    </section>
  );
}
