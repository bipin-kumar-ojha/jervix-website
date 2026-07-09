import { Link, useParams } from "react-router-dom";
import { servicePages } from "../../data/services";
import ServicePageTemplate from "./ServicePageTemplate";
import "./Services.scss";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? servicePages[slug] : undefined;

  if (!service) {
    return (
      <main className="services-page">
        <section className="services-page__hero">
          <div className="services-page__hero-inner">
            <span className="services-page__badge">Service coming soon</span>
            <h1>This service page is being prepared.</h1>
            <p>
              The Services hub is live and the SaaS Development page is ready for
              review. The remaining service pages will be generated after approval.
            </p>
            <div className="service-detail__actions">
              <Link to="/services" className="service-detail__button service-detail__button--primary">
                Back to Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return <ServicePageTemplate service={service} />;
}
