import SeoHead from "../../components/SEO/SeoHead";
import { siteUrl } from "../../data/services";
import "./BrochurePage.scss";

const prospectusPdfUrl = "/assets/jervix-technologies-prospectus.pdf";
const prospectusFileName = "Jervix-Technologies-Prospectus.pdf";

const heroTags = ["Business-first thinking", "Scalable engineering", "AI-ready architecture"];

const aboutPillars = [
  {
    title: "Business-First Thinking",
    description:
      "We connect every feature to business goals, users, operations, cost and measurable impact.",
  },
  {
    title: "Scalable Engineering",
    description:
      "We build maintainable applications, APIs and cloud foundations that can grow with your company.",
  },
  {
    title: "AI-Ready Architecture",
    description:
      "We apply AI, data and automation where they reduce manual work and unlock new capability.",
  },
  {
    title: "Dedicated Delivery Teams",
    description:
      "Focused engineers, clear communication and delivery discipline on every engagement.",
  },
  {
    title: "Global Delivery",
    description:
      "We work with clients across time zones and continents, adapting communication and delivery to fit how your team works.",
  },
  {
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
    title: "AI Development",
    description:
      "AI assistants, automation, prediction tools and workflow intelligence built around your real business data.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored web applications, portals, dashboards, APIs and workflow systems — from Figma designs to custom WordPress, WooCommerce and Shopify platforms.",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Responsive web apps in React, Next.js or Angular, and mobile apps in React Native, with clean UX and release-ready engineering.",
  },
  {
    title: "SaaS Product Development",
    description:
      "Subscription platforms, admin systems, user roles, dashboards, integrations and billing workflows.",
  },
  {
    title: "Cloud & Enterprise Solutions",
    description:
      "Cloud deployment, enterprise software, integrations, reporting systems and scalable infrastructure.",
  },
  {
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
  { label: "Design to Code", tools: ["Figma", "HTML5", "CSS3", "JavaScript"] },
  { label: "CMS & Ecommerce", tools: ["WordPress", "Elementor", "ACF", "WooCommerce", "Shopify (Liquid)"] },
  { label: "Frontend", tools: ["React", "Next.js", "Angular"] },
  { label: "Backend & APIs", tools: ["Node.js", "Express", "Laravel", "PHP"] },
  { label: "Data & Caching", tools: ["MongoDB", "PostgreSQL", "Redis"] },
  { label: "Mobile", tools: ["React Native"] },
  { label: "AI & ML", tools: ["Python", "Vector Databases", "LLM APIs"] },
  { label: "Cloud & DevOps", tools: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD Pipelines"] },
];

const whatWeBuild = [
  {
    title: "Business & Corporate Websites",
    description:
      "Custom-built or WordPress-powered websites that present your company clearly and convert visitors into leads.",
  },
  {
    title: "Ecommerce Stores",
    description:
      "Shopify and WooCommerce storefronts — product catalogues, checkout, payments and inventory that scale with sales.",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description:
      "Figma-to-code builds and campaign-ready pages engineered for speed, SEO and conversion.",
  },
  {
    title: "SaaS Platforms & Dashboards",
    description:
      "Multi-tenant subscription products with user roles, billing, analytics and admin consoles.",
  },
  {
    title: "AI-Powered Products & Assistants",
    description:
      "RAG-based chatbots, GenAI features and workflow automation built around your own data.",
  },
  {
    title: "Mobile Applications",
    description:
      "React Native apps for iOS and Android, built from a shared, maintainable codebase.",
  },
  {
    title: "Enterprise Portals & Internal Tools",
    description:
      "Reporting systems, admin panels and internal software that streamline day-to-day operations.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack products on React, Next.js or Angular with Node.js or Laravel APIs and a database layer to match the workload.",
  },
];

const cloudEnterpriseDesign = [
  {
    title: "Cloud & Enterprise Solutions",
    description:
      "Cloud deployment, enterprise software, integrations, reporting systems and scalable infrastructure planning.",
  },
  {
    title: "IT Consulting & Dedicated Teams",
    description:
      "Technology roadmaps, architecture guidance, product planning and dedicated developers for long-term delivery.",
  },
  {
    title: "Brand & Identity Design",
    description:
      "Distinct, defensible marks with a visual system behind them — not just a logo.",
  },
  {
    title: "UI/UX & Marketing Design",
    description:
      "Interface design for web & mobile products, plus campaign-ready marketing and presentation design.",
  },
];

const workStages = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We listen first, understand your goals, users, challenges and success expectations, then define what needs to be built.",
  },
  {
    number: "02",
    title: "Estimate & Approval",
    description:
      "You receive a clear scope, timeline, cost estimate and delivery plan before the project moves forward.",
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "After approval, we create the user flow, UI direction, feature structure and technical foundation for scalable delivery.",
  },
  {
    number: "04",
    title: "Agile Development",
    description:
      "Our team builds the product in short, planned sprints with clean code, regular updates and room for practical feedback.",
  },
  {
    number: "05",
    title: "Testing & QA",
    description:
      "We test features, usability, performance, security and device compatibility so the release feels stable and ready.",
  },
  {
    number: "06",
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
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF Prospectus
              </a>

              <a
                href="#demo"
                className="brochure-btn brochure-btn--accent"
                data-request-demo
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a Free Technical Scoping Call
              </a>

              <a
                href="https://wa.me/918920278132"
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-btn brochure-btn--outline"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 8920278132
              </a>
            </div>

            <p className="brochure-hero__tagline">Jervix Technologies · From idea to impact.</p>
          </div>
        </div>
      </section>

      {/* ABOUT JERVIX */}
      <section className="brochure-section" id="about">
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
              <h3>Applied AI</h3>
              <ul className="brochure-check-list">
                {appliedAi.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="brochure-split__col">
              <h3>Custom Software &amp; CMS</h3>
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
              <div className="brochure-stack-row" key={row.label}>
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
            <strong>SaaS Product Development</strong>
            <p>
              Subscription platforms, admin systems, user roles, dashboards, third-party
              integrations and billing workflows — built as a product, with a roadmap in mind.
            </p>
          </div>

          <p className="brochure-note">
            Every stack decision is made for the project in front of us — performance,
            scalability and total cost of ownership guide the choice, not trend.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="brochure-section" id="what-we-build">
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
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD, ENTERPRISE & DESIGN */}
      <section className="brochure-section brochure-section--tint" id="cloud-enterprise-design">
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
              <div className="brochure-stage-card" key={stage.number}>
                <div className="brochure-stage-card__header">
                  <span className="brochure-stage-number">{stage.number}</span>
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
                  <span className="brochure-contact-icon">📞</span>
                  <div>
                    <label>Phone</label>
                    <a href="tel:+918920278132">+91 89202 78132</a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">🌐</span>
                  <div>
                    <label>Website</label>
                    <a href="https://www.jervix.com" target="_blank" rel="noopener noreferrer">
                      www.jervix.com
                    </a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">✉️</span>
                  <div>
                    <label>General Enquiries</label>
                    <a href="mailto:info@jervix.com">info@jervix.com</a>
                  </div>
                </li>
                <li>
                  <span className="brochure-contact-icon">✉️</span>
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
