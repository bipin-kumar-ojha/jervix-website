export default function AboutSection() {
  return (
    <section className="section page-container about-section" id="about">
      <div className="about-section__image">
        <img
          src="/assets/jervix-who-we-are.png"
          alt="Jervix team collaborating on digital strategy and technology solutions"
        />
      </div>
      <div className="about-section__content">
        <p className="eyebrow">Who We Are</p>
        <h2>Engineering Digital Products. Building Future Talent.</h2>
        <p>
          Jervix Technologies is an AI and Software Development company delivering scalable digital
          solutions for startups, SMEs and enterprises. We build business software, web
          applications, mobile apps, SaaS products, cloud solutions, and automation systems with a
          practical engineering mindset.
        </p>
        <p>
          Alongside our client services, we invest in developing future software professionals
          through structured internship and mentorship programs.
        </p>
        <div className="about-section__tags" aria-label="Jervix capabilities">
          <span>AI Development</span>
          <span>Custom Software</span>
          <span>SaaS Products</span>
          <span>Cloud Solutions</span>
          <span>Mobile Apps</span>
        </div>
      </div>
    </section>
  );
}
