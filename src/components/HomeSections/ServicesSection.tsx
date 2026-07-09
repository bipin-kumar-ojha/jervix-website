import { services } from "./homeSectionData";

export default function ServicesSection() {
  return (
    <section className="section page-container services-section" id="services">
      <div className="section__intro">
        <p className="eyebrow">Services</p>
        <h2>What Services We Provide.</h2>
        <p>
          A focused set of digital services designed to help you attract customers, automate
          workflows, and build products that are ready for the future.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-card__icon">
              <img src={service.icon} alt="" />
            </span>
            <div>
              <small>{service.kicker}</small>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <a href="#contact" data-request-demo>
              Discuss this service
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
