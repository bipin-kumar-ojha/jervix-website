import { valuePillars } from "./homeSectionData";

export default function ValuePillarsSection() {
  return (
    <section className="value-pillars page-container" id="why-jervix">
      <div className="value-pillars__copy">
        <p className="eyebrow">Why Choose Jervix</p>
        <h2>Digital solutions shaped around business value, not just technology.</h2>
        <p>
          We combine product thinking, engineering depth, and growth strategy to help you build
          platforms that are practical, scalable, and ready for real customers.
        </p>
      </div>

      <div className="value-pillars-list">
        {valuePillars.map((step) => (
          <div className="value-pillars-list__item" key={step.title}>
            <span className="value-pillars-list__icon">
              <img src={step.icon} alt="" />
            </span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="value-pillars__image" aria-hidden="true">
        <img src="/assets/jervix-who-we-are.png" alt="" />
      </div>
    </section>
  );
}
