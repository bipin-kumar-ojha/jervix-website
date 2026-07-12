import SeoHead from "../../components/SEO/SeoHead";
import { industries } from "../../components/HomeSections/homeSectionData";
import "./IndustriesPage.scss";

const approach = [
  { number: "01", title: "Understand your operations", text: "We learn how your teams, customers, data and existing systems work before recommending technology." },
  { number: "02", title: "Design for industry reality", text: "We shape workflows around practical constraints, compliance needs, user expectations and growth priorities." },
  { number: "03", title: "Build for measurable progress", text: "We deliver secure, scalable solutions that reduce friction and create clearer business outcomes." },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page">
      <SeoHead
        title="Industries We Serve | Jervix Technologies"
        description="Explore digital solutions built by Jervix Technologies for startups, ecommerce, finance, healthcare, education, real estate, logistics and professional services."
        canonicalUrl="https://jervix.com/industries"
        ogImage="/assets/jervix-home-culture-trust-hero.png"
      />

      <section className="industries-hero">
        <div className="industries-shell industries-hero__grid">
          <div className="industries-hero__copy">
            <span className="industries-eyebrow">Industries</span>
            <h1>Technology shaped around how your industry works</h1>
            <p>We combine software engineering, AI and practical business thinking to create solutions that fit real workflows, customer expectations and growth goals.</p>
            <div className="industries-hero__actions">
              <a href="#industries-list">Explore industries</a>
              <a href="#demo" data-request-demo>Discuss your requirement</a>
            </div>
          </div>
          <div className="industries-hero__visual">
            <img src="/assets/jervix-home-culture-trust-hero.png" alt="Jervix team planning digital solutions for different industries" />
            <div className="industries-hero__note">
              <strong>Industry-aware delivery</strong>
              <span>Technology, workflows and growth aligned in one practical roadmap.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-list" id="industries-list">
        <div className="industries-shell">
          <header className="industries-heading">
            <span className="industries-eyebrow">Where we create value</span>
            <h2>Digital capabilities for ambitious organizations</h2>
            <p>Every engagement begins with your operating context—not a one-size-fits-all technology package.</p>
          </header>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article className="industries-card" key={industry.title}>
                <span className="industries-card__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="industries-card__icon"><img src={industry.icon} alt="" /></span>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <a href="#demo" data-request-demo>Discuss a solution <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-approach">
        <div className="industries-shell">
          <header className="industries-heading industries-heading--light">
            <span className="industries-eyebrow">Our approach</span>
            <h2>From industry context to working software</h2>
          </header>
          <div className="industries-approach__grid">
            {approach.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-cta industries-shell">
        <div>
          <span className="industries-eyebrow">Your industry, your roadmap</span>
          <h2>Let&apos;s plan a solution around your business.</h2>
          <p>Tell us what is slowing your team down or where you want to grow next.</p>
        </div>
        <a href="#demo" data-request-demo>Start a conversation</a>
      </section>
    </main>
  );
}
