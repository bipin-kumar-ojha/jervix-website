export default function HomeHero() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__content">
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
          </a>
          <a href="#contact" className="secondary-action" data-request-demo>
            Start a Project
          </a>
        </div>
      </div>

      <div className="home-hero__visual">
        <img
          src="/assets/jervix-home-culture-trust-hero.png"
          alt="Jervix AI and software engineering team collaborating on digital solutions"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
