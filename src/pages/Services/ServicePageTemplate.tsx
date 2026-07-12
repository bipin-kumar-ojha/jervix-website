import { Link } from "react-router-dom";
import SeoHead from "../../components/SEO/SeoHead";
import {
  serviceOgImage,
  serviceSummaries,
  siteUrl,
  type ServicePageData,
} from "../../data/services";
import "./Services.scss";

type ServicePageTemplateProps = {
  service: ServicePageData;
};

const processIcons = [
  "/assets/workflow-icons/discovery-color.svg",
  "/assets/workflow-icons/strategy-color.svg",
  "/assets/workflow-icons/build-color.svg",
  "/assets/workflow-icons/launch-color.svg",
];

const whyIcons = [
  "/assets/jervix-icon/structure-icon.png",
  "/assets/jervix-icon/transparency-icon.png",
  "/assets/jervix-icon/role-management-icon.png",
  "/assets/jervix-icon/reporting-icon.png",
  "/assets/jervix-icon/activity-logs-icon.png",
  "/assets/jervix-icon/task-management-icon.png",
];

function getToolIcon(tool: string) {
  const normalizedTool = tool.toLowerCase();

  if (normalizedTool.includes("ai") || normalizedTool.includes("openai") || normalizedTool.includes("automation")) {
    return "/assets/mega-icons/ai-color.svg";
  }

  if (normalizedTool.includes("mobile") || normalizedTool.includes("react native") || normalizedTool.includes("flutter")) {
    return "/assets/mega-icons/mobile-color.svg";
  }

  if (normalizedTool.includes("blockchain") || normalizedTool.includes("web3") || normalizedTool.includes("solidity")) {
    return "/assets/mega-icons/blockchain-color.svg";
  }

  if (normalizedTool.includes("marketing") || normalizedTool.includes("seo") || normalizedTool.includes("campaign")) {
    return "/assets/mega-icons/marketing-color.svg";
  }

  if (normalizedTool.includes("saas") || normalizedTool.includes("cloud") || normalizedTool.includes("api")) {
    return "/assets/mega-icons/saas-color.svg";
  }

  return "/assets/mega-icons/web-color.svg";
}

function buildServiceSchema(service: ServicePageData, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Jervix Technologies",
      url: siteUrl,
      logo: `${siteUrl}${serviceOgImage}`,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
    url: canonicalUrl,
  };
}

function buildFaqSchema(service: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(service: ServicePageData, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const canonicalUrl = `${siteUrl}/services/${service.slug}`;
  const relatedServices = service.relatedServices
    .map((slug) => serviceSummaries.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  return (
    <main className="service-detail">
      <SeoHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalUrl={canonicalUrl}
        ogImage={`${siteUrl}${serviceOgImage}`}
        schema={[
          buildServiceSchema(service, canonicalUrl),
          buildFaqSchema(service),
          buildBreadcrumbSchema(service, canonicalUrl),
        ]}
      />

      <section className="service-detail__hero">
        <div className="service-detail__hero-inner">
          <nav className="service-detail__breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>Services</span>
            <span>{service.title}</span>
          </nav>

          <span className="service-detail__badge">{service.keyword}</span>
          <h1>{service.heroTitle}</h1>
          <p>{service.heroDescription}</p>
          <div className="service-detail__actions">
            <a href="#demo" className="service-detail__button service-detail__button--primary" data-request-demo>
              Get a Free Consultation
            </a>
            <a href="#service-process" className="service-detail__button service-detail__button--secondary">
              View Process
            </a>
          </div>
        </div>
      </section>

      <section className="service-detail__section service-detail__section--intro">
        <div className="service-detail__section-copy">
          <span className="service-detail__eyebrow">Service Overview</span>
          <h2>{service.whatIsTitle}</h2>
        </div>
        <article className="service-detail__article">
          {service.whatIsBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section className="service-detail__section service-detail__section--process" id="service-process">
        <div className="service-detail__section-head">
          <span className="service-detail__eyebrow">How We Work</span>
          <h2>{service.processTitle}</h2>
        </div>
        <div className="service-detail__steps">
          {service.process.map((step, index) => (
            <article className="service-detail__step" key={step.title}>
              <div className="service-detail__step-top">
                <span className="service-detail__step-icon">
                  <img src={processIcons[index % processIcons.length]} alt="" />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail__section service-detail__section--why">
        <div className="service-detail__section-head">
          <span className="service-detail__eyebrow">Why Jervix</span>
          <h2>{service.differentiatorsTitle}</h2>
        </div>
        <div className="service-detail__grid">
          {service.differentiators.map((item, index) => (
            <article className="service-detail__info-card" key={item.title}>
              <span className="service-detail__info-icon">
                <img src={whyIcons[index % whyIcons.length]} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail__section service-detail__section--tools">
        <div className="service-detail__section-copy">
          <span className="service-detail__eyebrow">Technology Stack</span>
          <h2>{service.toolsTitle}</h2>
          <p>
            We choose tools around your goals, team needs, integration requirements,
            campaign plans, and the long-term maintainability of the service.
          </p>
        </div>
        <ul className="service-detail__tools">
          {service.tools.map((tool) => (
            <li key={tool}>
              <span className="service-detail__tool-icon">
                <img src={getToolIcon(tool)} alt="" />
              </span>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="service-detail__section service-detail__section--faq">
        <div className="service-detail__section-head">
          <span className="service-detail__eyebrow">FAQ</span>
          <h2>{service.title} Questions</h2>
        </div>
        <div className="service-detail__faqs">
          {service.faqs.map((faq) => (
            <details className="service-detail__faq" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="service-detail__faq-toggle" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-detail__section service-detail__section--links">
        <div>
          <span className="service-detail__eyebrow">Explore More</span>
          <h2>Related Jervix Services</h2>
        </div>
        <div className="service-detail__related">
          <Link to="/services">Services Hub</Link>
          {relatedServices.map((item) => (
            <Link to={`/services/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="service-detail__cta">
        <div>
          <span className="service-detail__eyebrow">Start the Conversation</span>
          <h2>Plan your {service.title.toLowerCase()} with a team that understands service delivery.</h2>
          <p>
            Share your goals, workflow, or growth challenge. We will help you identify
            the right first step and a practical path to launch, improve, and measure.
          </p>
        </div>
        <a href="#demo" className="service-detail__button service-detail__button--primary" data-request-demo>
          Talk to an Expert
        </a>
      </section>
    </main>
  );
}
