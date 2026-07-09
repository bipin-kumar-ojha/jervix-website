import { Link } from "react-router-dom";
import { serviceSummaries } from "../../data/services";
import "./HomeServices.scss";

const proofPoints = [
  "Software, AI, web, mobile, and marketing under one plan",
  "SEO-friendly service pages, campaigns, and lead workflows",
  "Structured delivery from planning to launch and improvement",
];

export default function HomeServices() {
  return (
    <section className="home-services" id="services" aria-labelledby="home-services-title">
      <div className="home-services__container">
        <div className="home-services__header">
          <div>
            <span className="home-services__badge">Our Services</span>
            <h2 id="home-services-title">Technology and Marketing Services for Growing Businesses</h2>
          </div>
          <p>
            Jervix Technologies helps businesses build software, launch digital
            products, improve websites, and run practical marketing systems that
            connect traffic, leads, conversations, and follow-up.
          </p>
        </div>

        <div className="home-services__content">
          <div className="home-services__grid">
            {serviceSummaries.map((service) => (
              <Link to={`/services/${service.slug}`} className="home-services__card" key={service.slug}>
                <span className="home-services__card-icon">
                  <img src={service.icon} alt={`${service.title} service icon`} />
                </span>
                <span className="home-services__card-keyword">{service.keyword}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>

          <aside className="home-services__proof" aria-labelledby="home-services-proof-title">
            <span className="home-services__proof-label">Why Jervix</span>
            <h3 id="home-services-proof-title">We build services with structured delivery.</h3>
            <p>
              Jervix Technologies brings software engineering, design, SEO, and
              campaign execution into one practical service model. That structure
              helps us plan, build, launch, and improve client work with clear ownership.
            </p>
            <ul>
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="home-services__actions">
              <Link to="/services">Explore Services</Link>
              <a href="#demo" data-request-demo>
                Talk to an Expert
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
