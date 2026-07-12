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
    title: "Engineering Digital Products. Building Future Talent.",
    description:
      "Jervix Technologies is an AI and Software Development company delivering scalable digital solutions for startups, SMEs and enterprises.",
    image: "/assets/jervix-who-we-are.png",
    imageAlt: "Jervix team planning digital product workflows",
    primaryAction: "Start a Conversation",
    secondaryAction: "Explore Services",
    introTitle: "We engineer software systems that help businesses operate, scale, and modernize.",
    introText:
      "Our work spans AI development, custom software, web applications, mobile applications, SaaS products, cloud solutions, enterprise software, IT consulting, and dedicated development teams. Alongside our client services, we invest in developing future software professionals through structured internship and mentorship programs.",
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
      "Whether you need AI automation, custom software, a SaaS platform, enterprise workflow, web application, mobile app, or dedicated development support, Jervix brings structured engineering discipline to the work.",
    spotlightImage: "/assets/jervix-execution-delivery.png",
    spotlightAlt: "Digital product delivery team planning websites, AI workflows, mobile apps, and campaign systems",
    ctaTitle: "Want to know how Jervix can support your next software project?",
    ctaText: "Tell us what you want to build and we will help you shape the right technology roadmap.",
  },
  products: {
    slug: "products",
    eyebrow: "Solutions",
    title: "Software Solutions for Modern Business Teams",
    description:
      "Jervix Technologies builds software solutions and product platforms that help organizations structure work, improve visibility, and modernize operations.",
    image: "/assets/jervix-one-product-hero.png",
    imageAlt: "Jervix One product dashboard shown on laptop and tablet devices",
    primaryAction: "Discuss a Solution",
    secondaryAction: "Ask About Jervix One",
    introTitle: "Product platforms and custom solutions shaped around real business needs.",
    introText:
      "Jervix One is our current flagship solution. We also help companies plan custom platforms, dashboards, workflow systems, and business software around their operational requirements.",
    cards: [
      {
        icon: "/assets/jervix-icon/structure-icon.png",
        title: "Organization Structure",
        description: "Set up departments, teams, roles, and reporting clarity for growing operations.",
      },
      {
        icon: "/assets/jervix-icon/task-management-icon.png",
        title: "Task Management",
        description: "Track work, responsibilities, progress, and handoffs without losing context.",
      },
      {
        icon: "/assets/jervix-icon/reporting-icon.png",
        title: "Reports & Visibility",
        description: "Give leaders cleaner insight into work activity, performance, and execution gaps.",
      },
    ],
    stats: [
      { value: "1", label: "Current flagship product" },
      { value: "24/7", label: "Operational visibility mindset" },
      { value: "100%", label: "Enquiry-led product guidance" },
    ],
    featureEyebrow: "Solutions",
    featureTitle: "A platform for structure, accountability, and day-to-day execution.",
    featureDescription:
      "Bring people, responsibilities, activity, and workflow visibility into one clean operating layer for everyday team execution.",
    features: [
      {
        icon: "/assets/jervix-icon/role-management-icon.png",
        title: "Team and role clarity",
        description: "Create cleaner ownership across departments, teams, designations, and workflows.",
      },
      {
        icon: "/assets/jervix-icon/activity-logs-icon.png",
        title: "Activity tracking",
        description: "Keep important work visible with records, logs, updates, and useful operational context.",
      },
      {
        icon: "/assets/jervix-icon/task-management-icon.png",
        title: "Workflow support",
        description: "Bring task management, reporting, and process transparency into a single operating system.",
      },
      {
        icon: "/assets/workflow-icons/launch-color.svg",
        title: "Custom product enquiries",
        description: "Need a different product or module? Share your requirement and we will discuss the next step.",
      },
    ],
    spotlightTitle: "Interested in Jervix One or a custom software solution?",
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
    secondaryAction: "View Internship Program",
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
    spotlightTitle: "Industry Internship Program",
    spotlightText:
      "At Jervix Technologies we believe in nurturing future software professionals through structured mentorship, practical learning and project exposure.",
    spotlightImage: "/assets/jervix-who-we-are.png",
    spotlightAlt: "Collaborative Jervix work environment",
    ctaTitle: "Explore careers or early career initiatives at Jervix.",
    ctaText: "Share your profile, role interest, portfolio, resume link, and availability. Our team will review your enquiry and respond when there is a relevant fit.",
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
                      ? "/careers/internship"
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

      <section className="menu-page__spotlight" id={data.slug === "career" ? "internship-program" : undefined}>
        <div className="menu-page__spotlight-image">
          <img src={data.spotlightImage} alt={data.spotlightAlt} />
        </div>
        <div className="menu-page__spotlight-copy">
          <span>{data.eyebrow}</span>
          <h2>{data.spotlightTitle}</h2>
          <p>{data.spotlightText}</p>
          <a
            href={data.slug === "career" ? "/careers/internship" : "#demo"}
            data-request-demo={data.slug === "career" || data.slug === "products" ? undefined : true}
            data-career-enquiry={undefined}
            data-product-enquiry={data.slug === "products" ? true : undefined}
          >
            {data.slug === "career" ? "Learn More" : "Send Enquiry"}
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
