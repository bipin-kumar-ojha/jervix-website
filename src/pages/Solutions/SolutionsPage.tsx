import SeoHead from "../../components/SEO/SeoHead";
import { siteUrl } from "../../data/services";
import "./SolutionsPage.scss";

const eyebrow = "Products";
const title =
  "Jervix One: Workforce, Project & Organization Management Platform";
const description =
  "An all-in-one business operations platform designed to help teams structure departments, manage tasks, record activity, track attendance, and scale workflows.";
const heroImage = "/assets/jervix-one-product-hero.png";
const heroImageAlt = "Jervix One platform interface showcase across devices";
const primaryAction = "Request Product Demo";
const secondaryAction = "Explore Product Fit";

const introTitle =
  "Built for modern organizations that need visibility and control.";
const introText =
  "Jervix One simplifies daily business operations by bringing team hierarchy, task coordination, performance visibility, and administrative controls into one connected environment.";

const cards = [
  {
    icon: "/assets/jervix-icon/structure-icon.png",
    title: "Workforce & team hierarchy",
    description:
      "Define departments, designations, permissions, and reporting lines so responsibilities stay clear across the company.",
  },
  {
    icon: "/assets/jervix-icon/task-management-icon.png",
    title: "Task & project execution",
    description:
      "Assign work, track module milestones, monitor delivery status, and reduce operational follow-up.",
  },
  {
    icon: "/assets/jervix-icon/reporting-icon.png",
    title: "Operational reporting",
    description:
      "Gain real-time visibility into attendance, logs, activity timelines, and overall team performance.",
  },
];

const stats = [
  { value: "1", label: "Unified management platform" },
  { value: "Role", label: "Based access control" },
  { value: "Live", label: "Activity tracking" },
];

const featureEyebrow = "Platform Capabilities";
const featureTitle =
  "Everything growing companies need to manage teams and workflows effectively.";
const featureDescription =
  "Bring people, responsibilities, activity, and workflow visibility into one clean operating layer for everyday team execution.";

const features = [
  {
    icon: "/assets/jervix-icon/role-management-icon.png",
    title: "Role-Based Access Control",
    description:
      "Manage permissions by designation, department, or administrative level with complete security.",
  },
  {
    icon: "/assets/jervix-icon/activity-logs-icon.png",
    title: "Activity & Work Logs",
    description:
      "Keep audit trails of project progress, operational tasks, and status changes across teams.",
  },
  {
    icon: "/assets/jervix-icon/task-management-icon.png",
    title: "Milestone Tracking",
    description:
      "Break complex business delivery into clear stages, review checkpoints, and deliverables.",
  },
  {
    icon: "/assets/workflow-icons/launch-color.svg",
    title: "Fast Organization Onboarding",
    description:
      "Set up company accounts, departments, and user roles quickly without complicated implementation.",
  },
];

const spotlightTitle = "Transform how your organization works every day.";
const spotlightText =
  "We currently highlight Jervix One as our product. For product demos, rollout questions, feature fit, or future product enquiries, contact our team and we will respond with the right guidance.";
const spotlightImage = "/assets/jervix-one-implementation.png";
const spotlightAlt =
  "Jervix One implementation journey with product modules and dashboard";

const ctaTitle = "Ask for a Jervix One enquiry or product consultation.";
const ctaText =
  "Our team can help you understand fit, implementation, and product possibilities.";

export function SolutionsPage() {
  const pageUrl = `${siteUrl}/solutions`;
  const pageTitle = `${title} | Jervix Technologies`;

  return (
    <main className="sol">
      <SeoHead
        title={pageTitle}
        description={description}
        canonicalUrl={pageUrl}
        ogImage={`${siteUrl}/assets/jervix-logo.png`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description,
          url: pageUrl,
        }}
      />

      {/* HERO */}
      <section className="sol-hero">
        <div className="sol-shell sol-hero__grid">
          <div className="sol-hero__copy">
            <span className="sol-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="sol-hero__actions">
              <a
                href="#demo"
                className="sol-btn sol-btn--primary"
                data-product-enquiry="true"
              >
                {primaryAction}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#demo"
                className="sol-btn sol-btn--ghost"
                data-product-enquiry="true"
              >
                {secondaryAction}
              </a>
            </div>

            <ul className="sol-hero__trust">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sol-hero__visual">
            <div className="sol-hero__frame">
              <img src={heroImage} alt={heroImageAlt} />
            </div>
            <div className="sol-hero__badge">
              <span className="sol-hero__badge-dot" aria-hidden="true" />
              One connected operating layer
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="sol-intro">
        <div className="sol-shell">
          <div className="sol-intro__head">
            <span className="sol-eyebrow">{eyebrow}</span>
            <h2>{introTitle}</h2>
            <p>{introText}</p>
          </div>
          <div className="sol-intro__stats">
            {stats.map((stat, i) => (
              <div className="sol-intro__stat" key={stat.label}>
                <span className="sol-intro__stat-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{stat.value}</strong>
                <span className="sol-intro__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR CARDS */}
      <section className="sol-pillars">
        <div className="sol-shell">
          <div className="sol-section-head">
            <span className="sol-eyebrow">What Jervix One Does</span>
            <h2>Three operating layers, one platform.</h2>
          </div>
          <div className="sol-pillars__grid">
            {cards.map((card, i) => (
              <article className="sol-pillar" key={card.title}>
                <span className="sol-pillar__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="sol-pillar__icon">
                  <img src={card.icon} alt="" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — dark centerpiece */}
      <section className="sol-caps">
        <div className="sol-shell">
          <div className="sol-section-head sol-section-head--light">
            <span className="sol-eyebrow sol-eyebrow--light">
              {featureEyebrow}
            </span>
            <h2>{featureTitle}</h2>
            <p>{featureDescription}</p>
          </div>
          <div className="sol-caps__grid">
            {features.map((feature, i) => (
              <article className="sol-cap" key={feature.title}>
                <div className="sol-cap__top">
                  <span className="sol-cap__icon">
                    <img src={feature.icon} alt="" />
                  </span>
                  <span className="sol-cap__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="sol-spotlight">
        <div className="sol-shell sol-spotlight__grid">
          <div className="sol-spotlight__visual">
            <div className="sol-spotlight__frame">
              <img src={spotlightImage} alt={spotlightAlt} />
            </div>
          </div>
          <div className="sol-spotlight__copy">
            <span className="sol-eyebrow">{eyebrow}</span>
            <h2>{spotlightTitle}</h2>
            <p>{spotlightText}</p>
            <a
              href="#demo"
              className="sol-btn sol-btn--primary"
              data-product-enquiry="true"
            >
              Send Enquiry
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sol-cta">
        <img
          className="sol-cta__art"
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="sol-shell sol-cta__inner">
          <div>
            <span className="sol-eyebrow sol-eyebrow--light">Next Step</span>
            <h2>{ctaTitle}</h2>
            <p>{ctaText}</p>
          </div>
          <a
            href="#demo"
            className="sol-btn sol-btn--invert"
            data-product-enquiry="true"
          >
            Submit Jervix One Enquiry
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

export default SolutionsPage;
