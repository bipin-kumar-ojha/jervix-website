import { industries } from "./homeSectionData";

export default function IndustriesSection() {
  return (
    <section className="section page-container industries-section" id="industries">
      <div className="section__intro">
        <p className="eyebrow">Industries</p>
        <h2>Digital solutions for modern, fast-moving teams.</h2>
        <p>
          We shape every solution around the workflows, customers, and growth goals of your industry.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <article className="industry-tile" key={industry.title}>
            <span>
              <img src={industry.icon} alt="" />
            </span>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
