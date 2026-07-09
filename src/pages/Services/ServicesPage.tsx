import SeoHead from "../../components/SEO/SeoHead";
import {
  serviceOgImage,
  serviceSummaries,
  siteUrl,
} from "../../data/services";
import ServiceCard from "./ServiceCard";
import "./Services.scss";

const servicesPageTitle = "Services | Jervix Technologies";
const servicesPageDescription =
  "Explore Jervix Technologies services for SaaS development, AI projects, websites, mobile apps, WordPress, WhatsApp, SMS, and digital marketing.";

const whyJervixItems = [
  {
    title: "Built on structured delivery",
    description:
      "We plan services with clear scope, ownership, launch steps, and improvement cycles so work moves from idea to execution.",
  },
  {
    title: "Technology and marketing together",
    description:
      "Your website, software, campaigns, landing pages, WhatsApp, SMS, and analytics can work as one connected growth system.",
  },
  {
    title: "SEO-friendly service structure",
    description:
      "We create descriptive pages, clear headings, useful FAQs, internal links, and content that speaks to real customer searches.",
  },
  {
    title: "Execution with accountability",
    description:
      "We plan the goal, build the asset, connect the workflow, measure the outcome, and improve based on what customers do next.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <SeoHead
        title={servicesPageTitle}
        description={servicesPageDescription}
        canonicalUrl={`${siteUrl}/services`}
        ogImage={`${siteUrl}${serviceOgImage}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Jervix Technologies Services",
          description: servicesPageDescription,
          url: `${siteUrl}/services`,
          publisher: {
            "@type": "Organization",
            name: "Jervix Technologies",
            url: siteUrl,
            logo: `${siteUrl}${serviceOgImage}`,
          },
        }}
      />

      <section className="services-page__hero">
        <div className="services-page__hero-inner">
          <span className="services-page__badge">Services</span>
          <h1>Technology and Marketing Services for Growing Businesses</h1>
          <p>
            Jervix Technologies builds practical software, automation, websites,
            mobile experiences, and digital growth systems for businesses that
            need clear execution and reliable technical support.
          </p>
        </div>
      </section>

      <section className="services-page__grid-section" aria-labelledby="services-grid-title">
        <div className="services-page__section-head">
          <span className="services-page__badge">What We Do</span>
          <h2 id="services-grid-title">Services Built Around Your Next Growth Step</h2>
          <p>
            Choose a focused service or combine software, web, AI, and marketing
            support into one execution plan for your business.
          </p>
        </div>
        <div className="services-page__grid-wrap">
          {serviceSummaries.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </section>

      <section className="services-page__why" aria-labelledby="why-jervix-services">
        <div className="services-page__why-copy">
          <span className="services-page__badge">Why Jervix</span>
          <h2 id="why-jervix-services">Why Choose Jervix Technologies for Your Services?</h2>
          <p>
            Jervix Technologies brings software engineering, design, automation,
            SEO, and campaign execution into one practical service model. That
            makes our advice focused and our implementation easier to connect
            with real business operations.
          </p>
          <a href="#demo" data-request-demo>
            Get a Free Consultation
          </a>
        </div>
        <div className="services-page__why-grid">
          {whyJervixItems.map((item) => (
            <article className="services-page__why-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
