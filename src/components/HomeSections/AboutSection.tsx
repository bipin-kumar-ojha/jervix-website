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
        <h2>Your strategic partner for intelligent digital solutions.</h2>
        <p>
          Jervix brings product thinking, engineering discipline, and growth strategy together. From
          first idea to launch and optimization, we shape practical technology solutions that are built
          around your customers, your operations, and your next stage of growth.
        </p>
        <div className="about-section__tags" aria-label="Jervix capabilities">
          <span>Web Development</span>
          <span>AI Development</span>
          <span>Mobile Apps</span>
        </div>
      </div>
    </section>
  );
}
