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
    title: "A Digital Partner for Practical Business Growth",
    description:
      "Jervix Technologies helps growing teams plan, build, launch, and improve digital products, websites, automation systems, and customer growth workflows.",
    image: "/assets/jervix-who-we-are.png",
    imageAlt: "Jervix team planning digital product workflows",
    primaryAction: "Start a Conversation",
    secondaryAction: "Explore Services",
    introTitle: "We connect strategy, engineering, and growth execution.",
    introText:
      "Our work starts with business goals, user needs, and operational reality. From there we shape clean digital systems that can be launched, measured, and improved with confidence.",
    cards: [
      {
        icon: "/assets/workflow-icons/discovery-color.svg",
        title: "Discovery First",
        description: "We understand your goals, users, current systems, and constraints before proposing a solution.",
      },
      {
        icon: "/assets/workflow-icons/build-color.svg",
        title: "Structured Delivery",
        description: "Every project is planned around scope, milestones, feedback cycles, and launch readiness.",
      },
      {
        icon: "/assets/workflow-icons/launch-color.svg",
        title: "Long-Term Support",
        description: "We support improvements after launch so your digital investment keeps becoming more useful.",
      },
    ],
    stats: [
      { value: "6+", label: "Digital service capabilities" },
      { value: "360°", label: "Strategy to launch support" },
      { value: "100%", label: "Custom-built approach" },
    ],
    featureEyebrow: "How We Think",
    featureTitle: "Technology should make work clearer, faster, and easier to scale.",
    features: [
      {
        title: "Business-first planning",
        description: "We connect features, content, and workflows to outcomes your team can actually measure.",
      },
      {
        title: "Clean product thinking",
        description: "We keep user journeys simple while giving the backend enough structure to grow.",
      },
      {
        title: "Marketing-aware builds",
        description: "We consider SEO, analytics, campaigns, conversion paths, and follow-up workflows early.",
      },
      {
        title: "Reliable communication",
        description: "You get clear updates, practical recommendations, and realistic delivery expectations.",
      },
    ],
    spotlightTitle: "Built for businesses that need execution, not just ideas.",
    spotlightText:
      "Whether you need a website, SaaS platform, AI workflow, mobile app, blockchain solution, or campaign system, Jervix brings the same calm delivery discipline to the work.",
    spotlightImage: "/assets/jervix-execution-delivery.png",
    spotlightAlt: "Digital product delivery team planning websites, AI workflows, mobile apps, and campaign systems",
    ctaTitle: "Want to know how Jervix can support your next project?",
    ctaText: "Tell us what you want to build and we will help you shape the right roadmap.",
  },
  products: {
    slug: "products",
    eyebrow: "Products",
    title: "Jervix One: Our Current Product for Modern Teams",
    description:
      "Jervix One is built to help organizations structure work, manage teams, track activity, and improve operational visibility from one practical platform.",
    image: "/assets/jervix-one-product-hero.png",
    imageAlt: "Jervix One product dashboard shown on laptop and tablet devices",
    primaryAction: "Enquire About Jervix One",
    secondaryAction: "Discuss More Products",
    introTitle: "One product today, more solutions shaped around real business needs.",
    introText:
      "Jervix One is our current product focus. If you need product details, demos, pricing, implementation support, or want to discuss a new product idea, send us an enquiry and our team will guide you.",
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
    featureEyebrow: "Jervix One",
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
    spotlightTitle: "Interested in Jervix One or another product idea?",
    spotlightText:
      "We currently highlight Jervix One as our product. For product demos, rollout questions, feature fit, or future product enquiries, contact our team and we will respond with the right guidance.",
    spotlightImage: "/assets/jervix-one-implementation.png",
    spotlightAlt: "Jervix One implementation journey with product modules and dashboard",
    ctaTitle: "Ask for a Jervix One enquiry or product consultation.",
    ctaText: "Our team can help you understand fit, implementation, and product possibilities.",
  },
  career: {
    slug: "career",
    eyebrow: "Career",
    title: "Build Useful Digital Products With a Practical Team",
    description:
      "Jervix is hiring interns across business development, full-stack development, blockchain, Solidity, UI/UX, social media marketing, HR, and accounts.",
    image: "/assets/jervix-career-interns-hero.png",
    imageAlt: "Interns and mentors collaborating in a bright technology workspace",
    primaryAction: "Send Career Enquiry",
    secondaryAction: "Learn About Jervix",
    introTitle: "Current internship openings at Jervix.",
    introText:
      "We are looking for curious interns who want hands-on exposure to real projects, team workflows, client communication, product thinking, marketing execution, and business operations.",
    cards: [
      {
        icon: "/assets/generated-icons/web.svg",
        title: "Full Stack Developer Intern",
        description: "Work on frontend, backend, APIs, dashboards, and practical web application features.",
      },
      {
        icon: "/assets/mega-icons/blockchain-color.svg",
        title: "Blockchain Developer Intern",
        description: "Support blockchain concepts, Web3 integrations, decentralized workflows, and project research.",
      },
      {
        icon: "/assets/generated-icons/blockchain.svg",
        title: "Solidity Developer Intern",
        description: "Learn and assist with smart contract logic, Solidity basics, testing, and blockchain documentation.",
      },
    ],
    stats: [
      { value: "8", label: "Current intern openings" },
      { value: "360°", label: "Technology and business exposure" },
      { value: "1:1", label: "Application enquiry review" },
    ],
    featureEyebrow: "Open Roles",
    featureTitle: "Internship roles currently open at Jervix.",
    features: [
      {
        icon: "/assets/generated-icons/strategy.svg",
        title: "Business Development Executive Intern",
        description: "Support lead research, outreach, client communication, proposal coordination, and sales follow-up.",
      },
      {
        icon: "/assets/mega-icons/mobile-color.svg",
        title: "UI/UX Designer Intern",
        description: "Assist with user flows, wireframes, interface layouts, design systems, and product screens.",
      },
      {
        icon: "/assets/mega-icons/marketing-color.svg",
        title: "Social Media Marketing Intern",
        description: "Help plan posts, captions, content calendars, campaign ideas, and brand communication.",
      },
      {
        icon: "/assets/workflow-icons/discovery-color.svg",
        title: "HR Intern",
        description: "Assist with hiring coordination, candidate communication, onboarding support, and team records.",
      },
      {
        icon: "/assets/jervix-icon/reporting-icon.png",
        title: "Account Intern",
        description: "Support invoices, expense records, basic reporting, documentation, and account coordination.",
      },
      {
        icon: "/assets/mega-icons/web-color.svg",
        title: "Full Stack, Blockchain & Solidity Interns",
        description: "Technical interns can apply for full-stack development, blockchain development, or Solidity-focused work.",
      },
    ],
    spotlightTitle: "Looking for your next role or internship?",
    spotlightText:
      "Share your profile, area of interest, portfolio, and availability. If there is a fit, our team will reach out with next steps.",
    spotlightImage: "/assets/jervix-who-we-are.png",
    spotlightAlt: "Collaborative Jervix work environment",
    ctaTitle: "Send your career enquiry to Jervix.",
    ctaText: "Tell us your skills, interests, and the kind of work you want to grow into.",
  },
  contact: {
    slug: "contact",
    eyebrow: "Contact",
    title: "Tell Us What You Want to Build",
    description:
      "Share your project, product, website, automation, AI, mobile app, blockchain, SaaS, or marketing requirement. We will help you plan the right next step.",
    image: "/assets/jervix-ai-hero.png",
    imageAlt: "Digital project consultation visual",
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
    spotlightImage: "/assets/hero-banner.jpeg",
    spotlightAlt: "Contact and consultation workspace",
    ctaTitle: "Ready to begin?",
    ctaText: "Request a consultation and we will help you convert the idea into a practical roadmap.",
  },
};

function HeaderMenuPage({ data }: { data: HeaderMenuPageData }) {
  const pageUrl = `${siteUrl}/${data.slug}`;
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
              href={data.slug === "contact" ? "mailto:info@jervix.com" : data.slug === "about" ? "/services" : "#demo"}
              className="menu-page__button menu-page__button--secondary"
              data-career-enquiry={data.slug === "career" ? true : undefined}
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

      <section className="menu-page__features">
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
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-page__spotlight">
        <div className="menu-page__spotlight-image">
          <img src={data.spotlightImage} alt={data.spotlightAlt} />
        </div>
        <div className="menu-page__spotlight-copy">
          <span>{data.eyebrow}</span>
          <h2>{data.spotlightTitle}</h2>
          <p>{data.spotlightText}</p>
          <a
            href="#demo"
            data-request-demo={data.slug === "career" || data.slug === "products" ? undefined : true}
            data-career-enquiry={data.slug === "career" ? true : undefined}
            data-product-enquiry={data.slug === "products" ? true : undefined}
          >
            Send Enquiry
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
