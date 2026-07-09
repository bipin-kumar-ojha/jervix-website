import { clientSolutions } from "./homeSectionData";

export default function ClientStrip() {
  const carouselItems = [...clientSolutions, ...clientSolutions];

  return (
    <section className="client-strip" aria-label="Client growth solutions">
      <div className="client-strip__inner page-container">
        <div className="client-strip__intro">
          <span>Trusted capabilities</span>
          <strong>Built to attract, automate, and scale</strong>
        </div>

        <div className="client-strip__carousel" aria-hidden="true">
          <div className="client-strip__track">
            {carouselItems.map(({ icon, label }, index) => (
              <a href="#services" key={`${label}-${index}`} tabIndex={-1}>
                <span className="client-strip__icon">
                  <img src={icon} alt="" />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="client-strip__sr-list">
          {clientSolutions.map(({ label }) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
