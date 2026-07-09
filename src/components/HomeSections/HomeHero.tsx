export default function HomeHero() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__content">
        <h1>
          Jervix Powers Businesses with <span>AI & Digital Innovation</span>
        </h1>
        <p>
          Transform ideas into smart websites, mobile apps, blockchain products, AI systems,
          and marketing campaigns that help your business grow.
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

      <div className="home-hero__visual" aria-hidden="true">
        <img src="/assets/jervix-ai-hero.png" alt="" />
      </div>
    </section>
  );
}
