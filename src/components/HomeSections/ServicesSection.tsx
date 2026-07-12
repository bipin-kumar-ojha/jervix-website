import { services } from "./homeSectionData";

export default function ServicesSection() {
  return (
    <section className="section page-container services-section" id="services">
      <div className="section__intro">
        <p className="eyebrow">Services</p>
        <h2>AI and software development services for serious business systems.</h2>
        <p>
          We plan, design, and engineer custom digital platforms for companies that need reliable
          software, modern user experiences, automation, cloud infrastructure, and dedicated
          development support.
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
