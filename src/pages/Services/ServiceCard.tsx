import { Link } from "react-router-dom";
import type { ServiceSummary } from "../../data/services";

type ServiceCardProps = {
  service: ServiceSummary;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service.slug}`} className="services-page__card">
      <div className="services-page__card-icon">
        <img src={service.icon} alt={`${service.title} service icon`} />
      </div>
      <div>
        <span>{service.keyword}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </Link>
  );
}
