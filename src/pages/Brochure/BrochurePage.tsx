import type { ReactNode } from "react";
import SeoHead from "../../components/SEO/SeoHead";
import { siteUrl } from "../../data/services";
import "./BrochurePage.scss";

const prospectusPdfUrl = "/assets/jervix-technologies-prospectus.pdf";
const prospectusFileName = "Jervix-Technologies-Prospectus.pdf";

const heroTags = ["Business-first thinking", "Scalable engineering", "AI-ready architecture"];

const aboutPillars = [
  {
    icon: "target",
    title: "Business-First Thinking",
    description:
      "We connect every feature to business goals, users, operations, cost and measurable impact.",
  },
  {
    icon: "layers",
    title: "Scalable Engineering",
    description:
      "We build maintainable applications, APIs and cloud foundations that can grow with your company.",
  },
  {
    icon: "cpu",
    title: "AI-Ready Architecture",
    description:
      "We apply AI, data and automation where they reduce manual work and unlock new capability.",
  },
  {
    icon: "users",
    title: "Dedicated Delivery Teams",
    description:
      "Focused engineers, clear communication and delivery discipline on every engagement.",
  },
  {
    icon: "globe",
    title: "Global Delivery",
    description:
      "We work with clients across time zones and continents, adapting communication and delivery to fit how your team works.",
  },
  {
    icon: "clock",
    title: "On-Time, With Ongoing Feedback",
    description:
      "Committed timelines tracked to completion, with continuous feedback assistance at every stage of the project.",
  },
];

const aboutStats: Array<[string, string]> = [
  ["8+", "Technology service capabilities"],
  ["360°", "Strategy-to-launch support"],
  ["100%", "Custom software approach"],
];

const services = [
  {
    icon: "spark",
    title: "AI Development",
    description:
      "AI assistants, automation, prediction tools and workflow intelligence built around your real business data.",
  },
  {
    icon: "code",
    title: "Custom Software Development",
    description:
      "Tailored web applications, portals, dashboards, APIs and workflow systems — from Figma designs to custom WordPress, WooCommerce and Shopify platforms.",
  },
  {
    icon: "devices",
    title: "Web & Mobile App Development",
    description:
      "Responsive web apps in React, Next.js or Angular, and mobile apps in React Native, with clean UX and release-ready engineering.",
  },
  {
    icon: "box",
    title: "SaaS Product Development",
    description:
      "Subscription platforms, admin systems, user roles, dashboards, integrations and billing workflows.",
  },
  {
    icon: "cloud",
    title: "Cloud & Enterprise Solutions",
    description:
      "Cloud deployment, enterprise software, integrations, reporting systems and scalable infrastructure.",
  },
  {
    icon: "compass",
    title: "IT Consulting & Dedicated Teams",
    description:
      "Technology roadmaps, architecture guidance and dedicated developers for long-term delivery.",
  },
];

const appliedAi = [
  "GenAI application development — from prototype to deployed, user-facing product",
  "Retrieval-Augmented Generation (RAG) for knowledge assistants grounded in your data",
  "Vector database integration for efficient embedding storage and retrieval",
  "Model fine-tuning, adapting foundation models to domain-specific tasks",
  "Hallucination mitigation — evaluation, grounding & guardrails for trustworthy output",
];

const customSoftwareCms = [
  "Figma-to-code — pixel-perfect, semantic HTML/CSS built directly from your design files",
  "Custom WordPress theme, plugin & functionality development",
  "Dynamic builds with Advanced Custom Fields (ACF), Custom Post Types & Elementor",
  "WooCommerce management, security hardening & payment gateway integration",
  "Shopify storefronts and custom apps built in Liquid for product, collection & content pages",
  "Core Web Vitals optimization for speed, UX and search performance",
];

const techStack = [
  { icon: "figma", label: "Design to Code", tools: ["Figma", "HTML5", "CSS3", "JavaScript"] },
  {
    icon: "cart",
    label: "CMS & Ecommerce",
    tools: ["WordPress", "Elementor", "ACF", "WooCommerce", "Shopify (Liquid)"],
  },
  { icon: "window", label: "Frontend", tools: ["React", "Next.js", "Angular"] },
  { icon: "server", label: "Backend & APIs", tools: ["Node.js", "Express", "Laravel", "PHP"] },
  { icon: "database", label: "Data & Caching", tools: ["MongoDB", "PostgreSQL", "Redis"] },
  { icon: "smartphone", label: "Mobile", tools: ["React Native"] },
  { icon: "brain", label: "AI & ML", tools: ["Python", "Vector Databases", "LLM APIs"] },
  {
    icon: "cloud",
    label: "Cloud & DevOps",
    tools: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD Pipelines"],
  },
];

const whatWeBuild = [
  {
    icon: "building",
    title: "Business & Corporate Websites",
    description:
      "Custom-built or WordPress-powered websites that present your company clearly and convert visitors into leads.",
  },
  {
    icon: "cart",
    title: "Ecommerce Stores",
    description:
      "Shopify and WooCommerce storefronts — product catalogues, checkout, payments and inventory that scale with sales.",
  },
  {
    icon: "rocket",
    title: "Landing Pages & Marketing Sites",
    description:
      "Figma-to-code builds and campaign-ready pages engineered for speed, SEO and conversion.",
  },
  {
    icon: "dashboard",
    title: "SaaS Platforms & Dashboards",
    description:
      "Multi-tenant subscription products with user roles, billing, analytics and admin consoles.",
  },
  {
    icon: "robot",
    title: "AI-Powered Products & Assistants",
    description:
      "RAG-based chatbots, GenAI features and workflow automation built around your own data.",
  },
  {
    icon: "smartphone",
    title: "Mobile Applications",
    description:
      "React Native apps for iOS and Android, built from a shared, maintainable codebase.",
  },
  {
    icon: "grid",
    title: "Enterprise Portals & Internal Tools",
    description:
      "Reporting systems, admin panels and internal software that streamline day-to-day operations.",
  },
  {
    icon: "code",
    title: "Custom Web Applications",
    description:
      "Full-stack products on React, Next.js or Angular with Node.js or Laravel APIs and a database layer to match the workload.",
  },
];

const cloudEnterpriseDesign = [
  {
    icon: "cloud",
    title: "Cloud & Enterprise Solutions",
    description:
      "Cloud deployment, enterprise software, integrations, reporting systems and scalable infrastructure planning.",
  },
  {
    icon: "compass",
    title: "IT Consulting & Dedicated Teams",
    description:
      "Technology roadmaps, architecture guidance, product planning and dedicated developers for long-term delivery.",
  },
  {
    icon: "palette",
    title: "Brand & Identity Design",
    description:
      "Distinct, defensible marks with a visual system behind them — not just a logo.",
  },
  {
    icon: "pen",
    title: "UI/UX & Marketing Design",
    description:
      "Interface design for web & mobile products, plus campaign-ready marketing and presentation design.",
  },
];

const workStages = [
  {
    number: "01",
    icon: "search",
    title: "Requirement Analysis",
    description:
      "We listen first, understand your goals, users, challenges and success expectations, then define what needs to be built.",
  },
  {
    number: "02",
    icon: "fileCheck",
    title: "Estimate & Approval",
    description:
      "You receive a clear scope, timeline, cost estimate and delivery plan before the project moves forward.",
  },
  {
    number: "03",
    icon: "ruler",
    title: "Design & Architecture",
    description:
      "After approval, we create the user flow, UI direction, feature structure and technical foundation for scalable delivery.",
  },
  {
    number: "04",
    icon: "sprint",
    title: "Agile Development",
    description:
      "Our team builds the product in short, planned sprints with clean code, regular updates and room for practical feedback.",
  },
  {
    number: "05",
    icon: "shieldCheck",
    title: "Testing & QA",
    description:
      "We test features, usability, performance, security and device compatibility so the release feels stable and ready.",
  },
  {
    number: "06",
    icon: "rocket",
    title: "Deployment & Support",
    description:
      "We handle launch, monitor the release, fix issues quickly and continue supporting improvements after deployment.",
  },
];

const agilePractices = [
  "Iterative, milestone-based delivery in short, manageable sprints",
  "Delivery timelines committed upfront and tracked closely, so your launch date stays on schedule",
  "Daily status reports — clear updates on progress, priorities and next steps",
  "Module demonstrations and reviews at each significant milestone",
  "Ongoing feedback assistance during development and after launch, so support is never limited to a formal review cycle",
];

const globalReach = ["North America", "Europe", "Middle East", "Asia-Pacific", "United Kingdom", "Australia"];

const industries = [
  "Startups",
  "Ecommerce",
  "Finance",
  "Healthcare",
  "Education",
  "Real Estate",
  "Logistics",
  "Professional Services",
];

/* -------------------------------------------------------------------------- */
/* Inline icon set                                                            */
/* -------------------------------------------------------------------------- */
const ICONS: Record<string, ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M4 9.5h3M4 14.5h3M17 9.5h3M17 14.5h3M9.5 4v3M14.5 4v3M9.5 17v3M14.5 17v3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3 2.7-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 6M20.5 20c0-2.6-1.7-4.4-4-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4.5 4L8 16M16 8l4.5 4L16 16M13.5 5l-3 14" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="13" height="10" rx="1.5" />
      <path d="M6 19h8M9.5 15v4" />
      <rect x="16.5" y="9" width="5" height="10" rx="1.2" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.2" />
      <path d="M10.5 18h3" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.4v9L12 21l-8-4.6v-9L12 3Z" />
      <path d="M12 12 4 7.6M12 12l8-4.4M12 12v9" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.4-8A5.2 5.2 0 0 1 16.7 8.6 3.7 3.7 0 0 1 18 18H7Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2Z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.6 0 2.2-1 2.2-2.1 0-.6-.4-1.1-.4-1.7 0-.7.6-1.2 1.4-1.2H18a3 3 0 0 0 3-3c0-4.4-4-6.9-9-6.9Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="12" cy="7.8" r="1" />
      <circle cx="16.4" cy="11" r="1" />
    </>
  ),
  pen: (
    <>
      <path d="m14.5 4 5.5 5.5M4 20l1.5-4.8L15.2 5.4 18.6 8.8 8.8 18.5 4 20Z" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M7.5 7.5h.01M7.5 16.5h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-5.6-1.5A3 3 0 0 0 4 8.5a3 3 0 0 0 .6 5.2A3 3 0 0 0 8 18.5a3 3 0 0 0 4 1.3Z" />
      <path d="M12 5a3 3 0 0 1 5.6-1.5A3 3 0 0 1 20 8.5a3 3 0 0 1-.6 5.2A3 3 0 0 1 16 18.5a3 3 0 0 1-4 1.3Z" />
    </>
  ),
  figma: (
    <>
      <path d="M8.5 3H12v6H8.5a3 3 0 0 1 0-6Z" />
      <path d="M12 3h3.5a3 3 0 0 1 0 6H12V3Z" />
      <path d="M12 9H8.5a3 3 0 0 0 0 6H12V9Z" />
      <path d="M12 15H8.7A3 3 0 1 0 12 18.4Z" />
      <circle cx="15.5" cy="12" r="3" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.3 11.4a1.2 1.2 0 0 0 1.2 1H18a1.2 1.2 0 0 0 1.2-1L21 7.5H6" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.4 4.8 4.4 4.8 8.2L14.4 14H9.6L7.2 11.2C7.2 7.4 9 4.4 12 3Z" />
      <path d="M9.6 14 7 17l1.6 1.6M14.4 14 17 17l-1.6 1.6" />
      <circle cx="12" cy="9.4" r="1.6" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.2" />
      <path d="M3 9.5h18M9.5 21V9.5" />
    </>
  ),
  robot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="2.2" />
      <path d="M12 3v5M8.5 13h.02M15.5 13h.02M2.5 12v3M21.5 12v3" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.4" />
      <path d="M9 7h.02M15 7h.02M9 11h.02M15 11h.02M9 15h.02M15 15h.02M10 21v-3.2h4V21" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.4" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.4" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.4" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.4" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.2" />
      <path d="M3 9h18M7 6.5h.02M10 6.5h.02" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.2" />
      <path d="m20 20-4.6-4.6" />
    </>
  ),
  fileCheck: (
    <>
      <path d="M14 3H7.5A2 2 0 0 0 5.5 5v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8Z" />
      <path d="M13.5 3v5H19M8.7 14.5l2 2 4-4.2" />
    </>
  ),
  ruler: (
    <>
      <path d="m4.5 15 10.5-10.5 4 4L8.5 19l-4-4Z" />
      <path d="m8 12 1.6 1.6M11 9l1.6 1.6M14 6l1.6 1.6" />
    </>
  ),
  sprint: (
    <>
      <path d="M4 12h9M8 8a4 4 0 0 0 0 8" />
      <circle cx="17.5" cy="12" r="3.2" />
      <path d="M17.5 4.5v2M17.5 17.5v2" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3 5.5 5.6v5.1c0 4.4 2.8 7.9 6.5 9.7 3.7-1.8 6.5-5.3 6.5-9.7V5.6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </>
  ),
  phone: (
    <>
      <path d="M6.8 4.6 9.4 4l2 4-1.7 1.3a12 12 0 0 0 4.6 4.6L15.6 16l4 2-.8 2.6c-.3 1-1.2 1.6-2.2 1.4C10.6 21 6.4 16.8 5.4 10.8c-.2-1 .4-1.9 1.4-2.2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7 7.5 5.4L19.5 7" />
    </>
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.spark}
    </svg>
  );
}

function SectionArt({ src }: { src: string }) {
  return (
    <img className="brochure-section__art" src={src} alt="" aria-hidden="true" loading="lazy" />
  );
}

export default function BrochurePage() {
  return (
    <main className="brochure-page">
      <SeoHead
        title="Company Prospectus | Jervix Technologies"
        description="Jervix Technologies Company Prospectus — AI development, custom software, web & mobile apps, SaaS platforms, technology stack and delivery process for growing businesses."
        canonicalUrl={`${siteUrl}/brochure`}
        ogImage={`${siteUrl}/assets/jervix-who-we-are.png`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Company Prospectus | Jervix Technologies",
          description:
            "Jervix Technologies Company Prospectus — services, technology stack and delivery process for growing businesses.",
          url: `${siteUrl}/brochure`,
        }}
      />

      {/* HERO / COVER */}
      <section className="brochure-hero">
        <div className="brochure-shell">
          <span className="brochure-hero__sub-kicker">Company Prospectus · 2026</span>

          <div className="brochure-hero__layout">
            <div className="brochure-hero__content">
              <h1 className="brochure-hero__title">
                Future-ready software and AI engineering for growing businesses.
              </h1>

              <p className="brochure-hero__subtitle">
                Jervix Technologies designs, builds and scales AI solutions, custom software, web
                and mobile applications, SaaS platforms and cloud systems — for startups, SMEs and
                enterprises across global markets.
              </p>

              <div className="brochure-chip-list">
                {heroTags.map((tag) => (
                  <span className="brochure-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="brochure-hero__actions">
                <a
                  href={prospectusPdfUrl}
                  download={prospectusFileName}
                  className="brochure-btn brochure-btn--primary"
                >
                  <Icon name="fileCheck" />
                  Download PDF Prospectus
                </a>

                <a href="#demo" className="brochure-btn brochure-btn--accent" data-request-demo>
                  <Icon name="spark" />
                  Book a Free Technical Scoping Call
                </a>

                <a
                  href="https://wa.me/918920278132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brochure-btn brochure-btn--outline"
                >
                  <Icon name="phone" />
                  +91 8920278132
                </a>
              </div>

              <p className="brochure-hero__tagline">Jervix Technologies · From idea to impact.</p>
            </div>

            <div className="brochure-hero__visual">
              <div className="brochure-hero__frame">
                <img src="/assets/jervix-ai-hero.png" alt="Jervix AI engineering" />
              </div>
              <div className="brochure-hero__badge">
                <span className="brochure-hero__badge-icon">
                  <Icon name="layers" />
                </span>
                <span>
                  <strong>360°</strong>
                  Strategy-to-launch support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT JERVIX */}
      <section className="brochure-section" id="about">
        <SectionArt src="/assets/jervix-who-we-are.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">About Jervix</span>
            <h2>From idea to impact.</h2>
            <p>
              We help clients turn a promising idea into a useful product through careful
              analysis, transparent execution and dependable delivery. Every engagement is a
              shared responsibility: you bring the vision and knowledge of your business, we
              bring analysis, technology and structured execution.
            </p>
          </header>

          <div className="brochure-cards-grid">
            {aboutPillars.map((item) => (
              <article className="brochure-info-card" key={item.title}>
                <span className="brochure-info-card__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="brochure-stats-row">
            {aboutStats.map(([value, label]) => (
              <div className="brochure-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="brochure-section brochure-section--tint" id="services">
        <SectionArt src="/assets/jervix-ai-hero.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">Services</span>
            <h2>AI and software engineering for serious business systems.</h2>
            <p>
              We plan, design and engineer custom digital platforms for companies that need
              reliable software, modern user experiences, automation and dependable delivery
              support.
            </p>
          </header>

          <div className="brochure-cards-grid">
            {services.map((item) => (
              <article className="brochure-info-card" key={item.title}>
                <span className="brochure-info-card__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="brochure-note">
            Every engagement is shaped around your business value — not just the technology — so
            what we build stays practical, scalable and ready for real customers.
          </p>
        </div>
      </section>

      {/* AI DEVELOPMENT & CUSTOM SOFTWARE */}
      <section className="brochure-section" id="ai-custom-software">
        <SectionArt src="/assets/jervix-one-implementation.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">AI Development &amp; Custom Software</span>
            <h2>Depth where it matters most.</h2>
            <p>
              Two of our most requested capabilities, in more detail — applied AI built around
              your own data, and custom software that fits the way your business actually
              operates.
            </p>
          </header>

          <div className="brochure-split">
            <div className="brochure-split__col">
              <h3>
                <span className="brochure-split__icon">
                  <Icon name="brain" />
                </span>
                Applied AI
              </h3>
              <ul className="brochure-check-list">
                {appliedAi.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="brochure-split__col">
              <h3>
                <span className="brochure-split__icon">
                  <Icon name="code" />
                </span>
                Custom Software &amp; CMS
              </h3>
              <ul className="brochure-check-list">
                {customSoftwareCms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="brochure-section brochure-section--tint" id="tech-stack">
        <SectionArt src="/assets/jervix-one-product-hero.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">Technology Stack</span>
            <h2>The technologies behind every build.</h2>
            <p>
              We choose tools for maintainability and fit, not novelty — a consistent,
              production-tested stack that spans design, engineering, data and infrastructure.
            </p>
          </header>

          <div className="brochure-stack">
            {techStack.map((row) => (
              <div className="brochure-stack-card" key={row.label}>
                <span className="brochure-stack-card__icon">
                  <Icon name={row.icon} />
                </span>
                <span className="brochure-mono-label">{row.label}</span>
                <div className="brochure-tech-tags">
                  {row.tools.map((tool) => (
                    <code className="brochure-tech-badge" key={tool}>
                      {tool}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="brochure-callout">
            <span className="brochure-callout__icon">
              <Icon name="box" />
            </span>
            <div>
              <strong>SaaS Product Development</strong>
              <p>
                Subscription platforms, admin systems, user roles, dashboards, third-party
                integrations and billing workflows — built as a product, with a roadmap in mind.
              </p>
            </div>
          </div>

          <p className="brochure-note">
            Every stack decision is made for the project in front of us — performance,
            scalability and total cost of ownership guide the choice, not trend.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="brochure-section" id="what-we-build">
        <SectionArt src="/assets/jervix-execution-delivery.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">What We Build</span>
            <h2>Types of projects we deliver.</h2>
            <p>
              A cross-section of the work clients bring to us most often — each one engineered
              end to end, from first sketch to production support.
            </p>
          </header>

          <div className="brochure-cards-grid">
            {whatWeBuild.map((item) => (
              <article className="brochure-info-card" key={item.title}>
                <span className="brochure-info-card__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD, ENTERPRISE & DESIGN */}
      <section className="brochure-section brochure-section--tint" id="cloud-enterprise-design">
        <SectionArt src="/assets/jervix-home-culture-trust-hero.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">Cloud, Enterprise &amp; Design</span>
            <h2>Infrastructure and design that support the product.</h2>
            <p>
              Reliable systems at scale, guidance when you need to plan ahead, and design work
              that carries the engineering through to how it looks and feels.
            </p>
          </header>

          <div className="brochure-cards-grid">
            {cloudEnterpriseDesign.map((item) => (
              <article className="brochure-info-card" key={item.title}>
                <span className="brochure-info-card__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="brochure-note">
            The same team that builds the product designs how it looks and feels, so brand,
            interface and code stay in sync instead of arriving from three different places.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="brochure-section" id="how-we-work">
        <SectionArt src="/assets/jervix-one-implementation.png" />
        <div className="brochure-shell">
          <header className="brochure-section-head">
            <span className="brochure-kicker">How We Work</span>
            <h2>Agile delivery, backed by a clear SDLC.</h2>
            <p>
              We follow agile methodology paired with a structured software development
              lifecycle, so every project stays predictable — with visible progress, milestone
              approvals and quality checks at each phase.
            </p>
          </header>

          <div className="brochure-lifecycle-grid">
            {workStages.map((stage) => (
              <div className="brochure-stage-card" data-step={stage.number} key={stage.number}>
                <div className="brochure-stage-card__header">
                  <span className="brochure-stage-number">{stage.number}</span>
                  <span className="brochure-stage-card__icon">
                    <Icon name={stage.icon} />
                  </span>
                </div>
                <h3 className="brochure-stage-card__title">{stage.title}</h3>
                <p className="brochure-stage-card__desc">{stage.description}</p>
              </div>
            ))}
          </div>

          <div className="brochure-agile-block">
            <span className="brochure-mono-label">Agile Practices We Follow</span>
            <ul className="brochure-check-list">
              {agilePractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HAVE AN IDEA? / GLOBAL REACH / INDUSTRIES / GET IN TOUCH */}
      <section className="brochure-contact-center" id="contact-center">
        <div className="brochure-shell">
          <div className="brochure-contact-card">
            <img
              className="brochure-contact-card__art"
              src="/assets/jervix-contact-consultation-hero.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <div className="brochure-contact-card__main">
              <span className="brochure-contact-badge">Have An Idea?</span>
              <h2>Let&rsquo;s explore the impact it can create.</h2>
              <p>
                Share your vision with us, and we will help you understand the practical path
                from requirement to execution. You do not need a perfect brief — just your goal,
                timeline and expectations.
              </p>

              <div className="brochure-footprint brochure-footprint--inline">
                <span className="brochure-footprint__label">Global Reach</span>
                <div className="brochure-footprint__list">
                  {globalReach.map((region) => (
                    <span className="brochure-footprint__item" key={region}>
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brochure-footprint brochure-footprint--inline">
                <span className="brochure-footprint__label">Industries We Serve</span>
                <div className="brochure-footprint__list">
                  {industries.map((industry) => (
                    <span className="brochure-footprint__item" key={industry}>
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brochure-contact-actions">
                <a
                  href="#demo"
                  className="brochure-btn brochure-btn--cta-primary"
                  data-request-demo
                >
                  Book a Free Technical Scoping Call
                </a>
                <a
                  href={prospectusPdfUrl}
                  download={prospectusFileName}
                  className="brochure-btn brochure-btn--cta-secondary"
                >
                  Download PDF Prospectus
                </a>
              </div>
            </div>

            <div className="brochure-contact-details">
              <h3>Get in Touch</h3>
              <ul className="brochure-contact-list">
                <li>
                  <span className="brochure-contact-icon">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <label>Phone</label>
                    <a href="tel:+918920278132">+91 89202 78132</a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">
                    <Icon name="globe" />
                  </span>
                  <div>
                    <label>Website</label>
                    <a href="https://www.jervix.com" target="_blank" rel="noopener noreferrer">
                      www.jervix.com
                    </a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <label>General Enquiries</label>
                    <a href="mailto:info@jervix.com">info@jervix.com</a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <label>Sales</label>
                    <a href="mailto:sales@jervix.com">sales@jervix.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
