import SeoHead from "../../components/SEO/SeoHead";
import { siteUrl } from "../../data/services";
import "./HeaderMenuPages.scss";

type PageCard = {
  title: string;
  description: string;
  icon?: string;
};

type PageStat = {
  value: string;
  label: string;
};

type HeaderMenuPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction: string;
  secondaryAction: string;
  introTitle: string;
  introText: string;
  cards: PageCard[];
  stats: PageStat[];
  featureEyebrow: string;
  featureTitle: string;
  featureDescription?: string;
  features: PageCard[];
  spotlightTitle: string;
  spotlightText: string;
  spotlightImage: string;
  spotlightAlt: string;
  ctaTitle: string;
  ctaText: string;
};

const sharedOgImage = `${siteUrl}/assets/jervix-logo.png`;

const pageData: Record<string, HeaderMenuPageData> = {
  about: {
    slug: "about",
    eyebrow: "About Jervix",
    title: "Engineering Digital Products & Intelligent Systems",
    description:
      "Jervix Technologies is an AI and Software Development company delivering scalable digital solutions for startups, SMEs and enterprises.",
    image: "/assets/jervix-who-we-are.png",
    imageAlt: "Jervix team planning digital product workflows",
    primaryAction: "Start a Conversation",
    secondaryAction: "Explore Services",
    introTitle: "We engineer software systems that help businesses operate, scale, and modernize.",
    introText:
      "Our work spans AI development, custom software, web applications, mobile applications, SaaS products, cloud solutions, enterprise software, IT consulting, and dedicated development teams. Alongside our client services, we foster a culture of continuous learning, professional development, and technical excellence.",
    cards: [
      {
        icon: "/assets/workflow-icons/discovery-color.svg",
        title: "AI and software engineering",
        description: "We design intelligent applications, automation systems, platforms, dashboards, and integrations for real business needs.",
      },
      {
        icon: "/assets/workflow-icons/build-color.svg",
        title: "Structured delivery",
        description: "Every project is planned around architecture, milestones, review cycles, quality checks, and launch readiness.",
      },
      {
        icon: "/assets/workflow-icons/launch-color.svg",
        title: "Long-term technology partner",
        description: "We support improvements after launch so your digital investment keeps becoming more stable, useful, and scalable.",
      },
    ],
    stats: [
      { value: "8+", label: "Technology capabilities" },
      { value: "360°", label: "Discovery to launch support" },
      { value: "AI", label: "Automation-ready engineering" },
    ],
    featureEyebrow: "How We Think",
    featureTitle: "Technology should make business systems clearer, faster, and easier to scale.",
    features: [
      {
        title: "Business-first planning",
        description: "We connect features, workflows, data, and integrations to outcomes your team can measure.",
      },
      {
        title: "Clean product engineering",
        description: "We keep user journeys simple while giving the architecture enough structure to grow.",
      },
      {
        title: "AI and cloud readiness",
        description: "We plan products with automation, data structure, hosting, security, and integration needs in mind.",
      },
      {
        title: "Reliable communication",
        description: "Clients get clear updates, practical recommendations, and realistic delivery expectations.",
      },
    ],
    spotlightTitle: "Built for businesses that need dependable software execution.",
    spotlightText:
      "Whether you are launching a new product, upgrading an enterprise system, or building an AI capability, Jervix Technologies brings structured execution to every phase of engineering.",
    spotlightImage: "/assets/jervix-execution-delivery.png",
    spotlightAlt: "Jervix delivery milestones, review cycles, and execution flow",
    ctaTitle: "Tell us about your product or software requirement.",
    ctaText: "We can help you evaluate scope, system design, timeline, and the most practical development roadmap.",
  },
  products: {
    slug: "products",
    eyebrow: "Products",
    title: "Jervix One: Workforce, Project & Organization Management Platform",
    description:
      "An all-in-one business operations platform designed to help teams structure departments, manage tasks, record activity, track attendance, and scale workflows.",
    image: "/assets/jervix-one-product-hero.png",
    imageAlt: "Jervix One platform interface showcase across devices",
    primaryAction: "Request Product Demo",
    secondaryAction: "Explore Product Fit",
    introTitle: "Built for modern organizations that need visibility and control.",
    introText:
      "Jervix One simplifies daily business operations by bringing team hierarchy, task coordination, performance visibility, and administrative controls into one connected environment.",
    cards: [
      {
        icon: "/assets/jervix-icon/structure-icon.png",
        title: "Workforce & team hierarchy",
        description: "Define departments, designations, permissions, and reporting lines so responsibilities stay clear across the company.",
      },
      {
        icon: "/assets/jervix-icon/task-management-icon.png",
        title: "Task & project execution",
        description: "Assign work, track module milestones, monitor delivery status, and reduce operational follow-up.",
      },
      {
        icon: "/assets/jervix-icon/reporting-icon.png",
        title: "Operational reporting",
        description: "Gain real-time visibility into attendance, logs, activity timelines, and overall team performance.",
      },
    ],
    stats: [
      { value: "1", label: "Unified management platform" },
      { value: "Role", label: "Based access control" },
      { value: "Live", label: "Activity tracking" },
    ],
    featureEyebrow: "Platform Capabilities",
    featureTitle: "Everything growing companies need to manage teams and workflows effectively.",
    featureDescription:
      "Bring people, responsibilities, activity, and workflow visibility into one clean operating layer for everyday team execution.",
    features: [
      {
        icon: "/assets/jervix-icon/role-management-icon.png",
        title: "Role-Based Access Control",
        description: "Manage permissions by designation, department, or administrative level with complete security.",
      },
      {
        icon: "/assets/jervix-icon/activity-logs-icon.png",
        title: "Activity & Work Logs",
        description: "Keep audit trails of project progress, operational tasks, and status changes across teams.",
      },
      {
        icon: "/assets/jervix-icon/task-management-icon.png",
        title: "Milestone Tracking",
        description: "Break complex business delivery into clear stages, review checkpoints, and deliverables.",
      },
      {
        icon: "/assets/workflow-icons/launch-color.svg",
        title: "Fast Organization Onboarding",
        description: "Set up company accounts, departments, and user roles quickly without complicated implementation.",
      },
    ],
    spotlightTitle: "Transform how your organization works every day.",
    spotlightText:
      "We currently highlight Jervix One as our product. For product demos, rollout questions, feature fit, or future product enquiries, contact our team and we will respond with the right guidance.",
    spotlightImage: "/assets/jervix-one-implementation.png",
    spotlightAlt: "Jervix One implementation journey with product modules and dashboard",
    ctaTitle: "Ask for a Jervix One enquiry or product consultation.",
    ctaText: "Our team can help you understand fit, implementation, and product possibilities.",
  },
  career: {
    slug: "career",
    eyebrow: "Careers",
    title: "Build Your Career With an AI and Software Engineering Team",
    description:
      "Join Jervix Technologies to work on AI solutions, custom software, web applications, SaaS products, cloud systems, and enterprise workflows.",
    image: "/assets/jervix-career-interns-hero.png",
    imageAlt: "Jervix technology team collaborating in a bright software workspace",
    primaryAction: "Apply as a Candidate",
    secondaryAction: "Explore Openings",
    introTitle: "Why join Jervix",
    introText:
      "We are building a practical engineering culture where developers, designers, consultants, and growth-focused team members can work on meaningful software systems for businesses. Our team values learning, ownership, clear communication, and steady career growth.",
    cards: [
      {
        icon: "/assets/generated-icons/web.svg",
        title: "Software engineering work",
        description: "Build frontend, backend, APIs, dashboards, integrations, automation systems, and scalable web applications.",
      },
      {
        icon: "/assets/mega-icons/ai-color.svg",
        title: "Learning environment",
        description: "Grow through project exposure, code reviews, technical discussions, documentation, and senior guidance.",
      },
      {
        icon: "/assets/workflow-icons/strategy-color.svg",
        title: "Career growth",
        description: "Develop stronger product thinking, communication, delivery habits, technical depth, and leadership readiness.",
      },
    ],
    stats: [
      { value: "AI", label: "Modern software projects" },
      { value: "360°", label: "Engineering and business exposure" },
      { value: "1:1", label: "Profile review process" },
    ],
    featureEyebrow: "Open Positions",
    featureTitle: "Open positions across engineering, product, design, growth, and operations.",
    features: [
      {
        icon: "/assets/mega-icons/web-color.svg",
        title: "Frontend Developer",
        description: "Build responsive interfaces, dashboards, product screens, and client-facing web application experiences.",
      },
      {
        icon: "/assets/generated-icons/web.svg",
        title: "Backend Developer",
        description: "Develop APIs, database models, business logic, integrations, authentication, and reliable service layers.",
      },
      {
        icon: "/assets/mega-icons/ai-color.svg",
        title: "AI Engineer",
        description: "Work on automation, assistants, data workflows, model integrations, and intelligent product features.",
      },
      {
        icon: "/assets/mega-icons/mobile-color.svg",
        title: "Mobile App Developer",
        description: "Create mobile applications and connected experiences for customers, employees, and field teams.",
      },
      {
        icon: "/assets/mega-icons/marketing-color.svg",
        title: "UI/UX Designer",
        description: "Design user flows, wireframes, product screens, design systems, and polished digital experiences.",
      },
      {
        icon: "/assets/workflow-icons/discovery-color.svg",
        title: "Business Development Executive",
        description: "Support lead research, outreach, client communication, proposal coordination, and sales follow-up.",
      },
    ],
    spotlightTitle: "Life & Growth at Jervix",
    spotlightText:
      "At Jervix Technologies, we foster a collaborative, high-learning engineering culture with modern technology stacks, mentorship, and opportunities to build impactful digital solutions.",
    spotlightImage: "/assets/jervix-who-we-are.png",
    spotlightAlt: "Collaborative Jervix work environment",
    ctaTitle: "Explore career opportunities at Jervix.",
    ctaText: "Share your profile, role interest, portfolio, resume link, and experience. Our team will review your application and connect with you.",
  },
  contact: {
    slug: "contact",
    eyebrow: "Contact",
    title: "Tell Us What You Want to Build",
    description:
      "Share your project, product, website, automation, AI, mobile app, blockchain, SaaS, or marketing requirement. We will help you plan the right next step.",
    image: "/assets/jervix-contact-consultation-hero.png",
    imageAlt: "Jervix technology consultant discussing a digital project with a client",
    primaryAction: "Request Consultation",
    secondaryAction: "Email Us",
    introTitle: "Start with a simple conversation.",
    introText:
      "You do not need a perfect brief. Send us your goal, current challenge, timeline, and expectations. We will help shape the scope and delivery direction.",
    cards: [
      {
        icon: "/assets/workflow-icons/discovery-color.svg",
        title: "Project Consultation",
        description: "Discuss a new website, app, AI tool, SaaS product, blockchain build, or campaign system.",
      },
      {
        icon: "/assets/workflow-icons/strategy-color.svg",
        title: "Product Enquiry",
        description: "Ask about Jervix One, product demos, rollout, fit, or custom product requirements.",
      },
      {
        icon: "/assets/workflow-icons/launch-color.svg",
        title: "Growth Support",
        description: "Plan landing pages, SEO, campaigns, WhatsApp, SMS, analytics, and follow-up workflows.",
      },
    ],
    stats: [
      { value: "48h", label: "Typical response window" },
      { value: "6+", label: "Services we can discuss" },
      { value: "1:1", label: "Consultation-led planning" },
    ],
    featureEyebrow: "How to Reach Us",
    featureTitle: "A clear enquiry helps us respond with the right direction.",
    features: [
      {
        title: "Share your business goal",
        description: "Tell us what you want to improve, launch, automate, or grow.",
      },
      {
        title: "Mention the service area",
        description: "Web, mobile, SaaS, AI, blockchain, marketing, Jervix One, or not sure yet.",
      },
      {
        title: "Add useful context",
        description: "Timeline, budget range, current tools, target users, and any reference examples help.",
      },
      {
        title: "Expect a practical reply",
        description: "We will suggest the next step, possible scope, and what information is needed.",
      },
    ],
    spotlightTitle: "Prefer email?",
    spotlightText:
      "Reach us at info@jervix.com with your requirement. For faster routing, include your name, company, service interest, and a short project brief.",
    spotlightImage: "/assets/jervix-contact-email-section.png",
    spotlightAlt: "Business professional composing a project enquiry email to Jervix",
    ctaTitle: "Ready to begin?",
    ctaText: "Request a consultation and we will help you convert the idea into a practical roadmap.",
  },
};

function HeaderMenuPage({ data }: { data: HeaderMenuPageData }) {
  const pagePath = data.slug === "career" ? "careers" : data.slug === "products" ? "solutions" : data.slug;
  const pageUrl = `${siteUrl}/${pagePath}`;
  const title = `${data.title} | Jervix Technologies`;

  return (
    <main className={`menu-page menu-page--${data.slug}`}>
      <SeoHead
        title={title}
        description={data.description}
        canonicalUrl={pageUrl}
        ogImage={sharedOgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description: data.description,
          url: pageUrl,
        }}
      />

      <section className="menu-page__hero">
        <div className="menu-page__hero-copy">
          <span>{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="menu-page__actions">
            <a
              href="#demo"
              className="menu-page__button menu-page__button--primary"
              data-request-demo={data.slug === "career" || data.slug === "products" ? undefined : true}
              data-career-enquiry={data.slug === "career" ? true : undefined}
              data-product-enquiry={data.slug === "products" ? true : undefined}
            >
              {data.primaryAction}
            </a>
            <a
              href={
                data.slug === "contact"
                  ? "mailto:info@jervix.com"
                  : data.slug === "about"
                    ? "/services"
                    : data.slug === "career"
                      ? "#open-positions"
                      : "#demo"
              }
              className="menu-page__button menu-page__button--secondary"
              data-product-enquiry={data.slug === "products" ? true : undefined}
            >
              {data.secondaryAction}
            </a>
          </div>
        </div>
        <div className="menu-page__hero-image">
          <img src={data.image} alt={data.imageAlt} />
        </div>
      </section>

      <section className="menu-page__intro">
        <div className="menu-page__intro-copy">
          <span>{data.eyebrow}</span>
          <h2>{data.introTitle}</h2>
          <p>{data.introText}</p>
        </div>
        <div className="menu-page__stats">
          {data.stats.map((stat) => (
            <div className="menu-page__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-page__cards" aria-label={`${data.eyebrow} highlights`}>
        {data.cards.map((card) => (
          <article className="menu-page__card" key={card.title}>
            {card.icon ? (
              <span className="menu-page__card-icon">
                <img src={card.icon} alt="" />
              </span>
            ) : null}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="menu-page__features" id={data.slug === "career" ? "open-positions" : undefined}>
        <div className="menu-page__section-head">
          <span>{data.featureEyebrow}</span>
          <h2>{data.featureTitle}</h2>
          {data.featureDescription ? <p>{data.featureDescription}</p> : null}
        </div>
        <div className="menu-page__feature-grid">
          {data.features.map((feature) => (
            <article className="menu-page__feature" key={feature.title}>
              {feature.icon ? (
                <span className="menu-page__feature-icon">
                  <img src={feature.icon} alt="" />
                </span>
              ) : null}
              {data.slug === "career" ? <span className="menu-page__role-type">Open role</span> : null}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {data.slug === "career" ? (
                <a className="menu-page__role-action" href="#demo" data-career-enquiry>
                  Apply now <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="menu-page__spotlight" id={data.slug === "career" ? "life-at-jervix" : undefined}>
        <div className="menu-page__spotlight-image">
          <img src={data.spotlightImage} alt={data.spotlightAlt} />
        </div>
        <div className="menu-page__spotlight-copy">
          <span>{data.eyebrow}</span>
          <h2>{data.spotlightTitle}</h2>
          <p>{data.spotlightText}</p>
          <a
            href={data.slug === "career" ? "#open-positions" : "#demo"}
            data-request-demo={data.slug === "career" || data.slug === "products" ? undefined : true}
            data-career-enquiry={undefined}
            data-product-enquiry={data.slug === "products" ? true : undefined}
          >
            {data.slug === "career" ? "View Openings" : "Send Enquiry"}
          </a>
        </div>
      </section>

      <section className="menu-page__cta">
        <div>
          <span>Next Step</span>
          <h2>{data.ctaTitle}</h2>
          <p>{data.ctaText}</p>
        </div>
        <a
          href="#demo"
          data-request-demo={data.slug === "career" || data.slug === "products" ? undefined : true}
          data-career-enquiry={data.slug === "career" ? true : undefined}
          data-product-enquiry={data.slug === "products" ? true : undefined}
        >
          {data.slug === "career"
            ? "Submit Career Enquiry"
            : data.slug === "products"
              ? "Submit Jervix One Enquiry"
              : "Request Consultation"}
        </a>
      </section>
    </main>
  );
}

export function AboutPage() {
  return <HeaderMenuPage data={pageData.about} />;
}

export function ProductsPage() {
  return <HeaderMenuPage data={pageData.products} />;
}

export function CareerPage() {
  return <HeaderMenuPage data={pageData.career} />;
}

export function ContactPage() {
  return <HeaderMenuPage data={pageData.contact} />;
}
