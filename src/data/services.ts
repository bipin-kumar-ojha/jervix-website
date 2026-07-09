export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  keyword: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageData = ServiceSummary & {
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  whatIsTitle: string;
  whatIsBody: string[];
  processTitle: string;
  process: Array<{
    title: string;
    description: string;
  }>;
  differentiatorsTitle: string;
  differentiators: Array<{
    title: string;
    description: string;
  }>;
  toolsTitle: string;
  tools: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const siteUrl = "https://jervix.com";
export const serviceOgImage = "/assets/jervix-logo.png";

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS Development",
    keyword: "SaaS development company",
    icon: "/assets/jervix-icon/structure-icon.png",
    description:
      "Plan, build, and launch scalable SaaS platforms with product architecture, secure user management, subscriptions, and operational workflows.",
  },
  {
    slug: "ai-development",
    title: "AI Project Development",
    shortTitle: "AI Development",
    keyword: "AI project development",
    icon: "/assets/jervix-icon/reporting-icon.png",
    description:
      "Build practical AI tools, automation, assistants, and workflow intelligence around your real business data and operating needs.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    keyword: "web development services",
    icon: "/assets/jervix-icon/records-icon.png",
    description:
      "Create fast, responsive business websites and web applications with clean UX, maintainable code, and conversion-focused structure.",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortTitle: "WordPress",
    keyword: "WordPress development services",
    icon: "/assets/jervix-icon/onboarding-icon.png",
    description:
      "Design and develop WordPress websites, WooCommerce stores, landing pages, and CMS workflows that teams can manage confidently.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    keyword: "mobile app development services",
    icon: "/assets/jervix-icon/task-management-icon.png",
    description:
      "Ship mobile experiences for customers, employees, and field teams with thoughtful product flows and reliable backend integration.",
  },
  {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    shortTitle: "WhatsApp Marketing",
    keyword: "WhatsApp marketing services",
    icon: "/assets/jervix-icon/activity-logs-icon.png",
    description:
      "Run compliant WhatsApp campaigns, lead nurturing flows, customer updates, and sales follow-ups with clear audience segmentation.",
  },
  {
    slug: "bulk-sms-marketing",
    title: "Bulk SMS Marketing",
    shortTitle: "Bulk SMS",
    keyword: "bulk SMS marketing services",
    icon: "/assets/jervix-icon/access-control-icon.png",
    description:
      "Reach customers quickly with targeted SMS campaigns for promotions, alerts, reminders, and time-sensitive business communication.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    keyword: "digital marketing services",
    icon: "/assets/jervix-icon/transparency-icon.png",
    description:
      "Improve online visibility with SEO, content, paid campaigns, conversion tracking, and a practical growth plan for your business.",
  },
];

export const saasDevelopmentPage: ServicePageData = {
  ...serviceSummaries[0],
  seoTitle: "SaaS Development Company | Jervix Technologies",
  metaDescription:
    "Build scalable SaaS products with Jervix Technologies, from architecture and UX to secure workflows, subscriptions, integrations, and launch support.",
  heroTitle: "SaaS Development Company for Scalable Products",
  heroDescription:
    "Jervix Technologies helps founders and growing businesses turn SaaS ideas into structured, secure, and usable software products. From product planning to launch, we build platforms that support real teams, real customers, and long-term operations.",
  whatIsTitle: "What is SaaS Development?",
  whatIsBody: [
    "SaaS development is the process of designing, building, launching, and improving a cloud-based software product that customers access through a subscription or recurring service model. A strong SaaS product needs more than screens and features. It needs dependable architecture, secure user access, data structure, billing logic, onboarding flows, reporting, integrations, and a product experience that remains simple as the customer base grows.",
    "For business owners, SaaS development also means turning an operational problem into a repeatable digital product. The product must be easy for customers to adopt, practical for internal teams to support, and flexible enough to evolve after launch. Jervix Technologies approaches SaaS development with that full lifecycle in mind, including roles, permissions, workflows, dashboards, customer onboarding, and long-term maintenance.",
  ],
  processTitle: "Our SaaS Development Process",
  process: [
    {
      title: "Product Discovery",
      description:
        "We clarify the users, workflows, business model, must-have features, success metrics, and launch priorities before writing code.",
    },
    {
      title: "Architecture Planning",
      description:
        "We map the database, roles, permissions, integrations, hosting approach, and scaling needs so the product has a dependable foundation.",
    },
    {
      title: "UX and Interface Design",
      description:
        "We design clear product flows for onboarding, dashboards, forms, tables, and core actions so users can complete work without confusion.",
    },
    {
      title: "Full-Stack Development",
      description:
        "We build the frontend, backend APIs, authentication, business logic, admin tools, and product modules in structured development cycles.",
    },
    {
      title: "Testing and Launch",
      description:
        "We test key workflows, fix usability issues, prepare production deployment, and support the release with careful launch checks.",
    },
    {
      title: "Iteration and Support",
      description:
        "After launch, we help improve features, review product feedback, strengthen performance, and plan the next version of the SaaS platform.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for SaaS Development",
  differentiators: [
    {
      title: "Structured SaaS Delivery",
      description:
        "We plan SaaS products with clear architecture, user roles, onboarding flows, dashboards, integrations, and maintainable release cycles.",
    },
    {
      title: "Business-First Planning",
      description:
        "We connect every feature to a user need, workflow, or revenue goal so the product remains focused instead of becoming a crowded feature list.",
    },
    {
      title: "Secure User and Role Design",
      description:
        "We understand multi-user products, role-based access, team structures, admin control, and the privacy expectations of business software.",
    },
    {
      title: "Scalable Technical Foundation",
      description:
        "We plan for clean APIs, database structure, maintainable code, and deployment practices that can support product growth after launch.",
    },
    {
      title: "Clear Communication",
      description:
        "We keep the product roadmap, sprint priorities, and delivery status visible so founders and business teams can make decisions with confidence.",
    },
    {
      title: "Launch and Improvement Mindset",
      description:
        "We help you release a useful first version, learn from users, and continue improving the platform instead of treating launch as the finish line.",
    },
  ],
  toolsTitle: "Technologies and Tools We Use",
  tools: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "AWS",
    "Vercel",
    "Stripe",
    "Razorpay",
    "GitHub",
    "Figma",
  ],
  faqs: [
    {
      question: "How much does SaaS development cost?",
      answer:
        "SaaS development cost depends on product scope, user roles, integrations, billing needs, dashboards, and launch timeline. After discovery, Jervix Technologies can estimate a practical first version and future roadmap.",
    },
    {
      question: "How long does it take to build a SaaS product?",
      answer:
        "A focused MVP can often be built in phases, while a larger SaaS platform may need a longer roadmap. We usually start by defining the smallest useful release, then plan improvements around real user feedback.",
    },
    {
      question: "Can you build a SaaS MVP for a startup?",
      answer:
        "Yes. We help startups shape the SaaS MVP, prioritize core workflows, build the product foundation, and prepare a launch version that can be tested with early users or paying customers.",
    },
    {
      question: "Do you support SaaS products after launch?",
      answer:
        "Yes. We can support feature improvements, bug fixes, performance checks, integrations, and roadmap planning after launch so the product continues to grow with customer needs.",
    },
    {
      question: "Can Jervix build role-based SaaS platforms?",
      answer:
        "Yes. Role-based products are a strong fit for our team. We can design users, teams, permissions, dashboards, workflow rules, and admin controls around your business model.",
    },
  ],
  relatedServices: ["ai-development", "web-development", "mobile-app-development"],
};

export const aiDevelopmentPage: ServicePageData = {
  ...serviceSummaries[1],
  seoTitle: "AI Project Development Services | Jervix Technologies",
  metaDescription:
    "Build practical AI projects with Jervix Technologies, including assistants, automation, RAG workflows, dashboards, secure integrations, and launch support.",
  heroTitle: "AI Project Development for Practical Business Automation",
  heroDescription:
    "Jervix Technologies builds AI tools that solve real workflow problems instead of chasing novelty. We help businesses plan, prototype, integrate, and improve AI systems that support teams, customers, and decision-making.",
  whatIsTitle: "What is AI Project Development?",
  whatIsBody: [
    "AI project development is the process of turning business data, repetitive work, customer questions, or decision workflows into useful software powered by artificial intelligence. A good AI project may include chat assistants, document search, lead qualification, reporting automation, content workflows, recommendation systems, or internal tools that help teams work faster with better context.",
    "The strongest AI projects begin with a clear business use case. Jervix Technologies starts by identifying where AI can reduce manual effort, improve response quality, or make information easier to use. We design AI around roles, permissions, workflows, dashboards, and secure operational systems so it fits the way your organization actually works.",
  ],
  processTitle: "Our AI Development Process",
  process: [
    {
      title: "Use Case Discovery",
      description:
        "We identify where AI can create measurable value, then define the users, data sources, risks, and workflow outcomes.",
    },
    {
      title: "Data and System Review",
      description:
        "We review documents, databases, APIs, and current tools so the AI solution can work with trusted business context.",
    },
    {
      title: "Prototype Build",
      description:
        "We create a focused proof of concept for the core AI workflow before expanding into a full production feature.",
    },
    {
      title: "Integration and Guardrails",
      description:
        "We connect the AI layer with your app, website, CRM, or internal system and add controls for safer, more reliable output.",
    },
    {
      title: "Testing and Evaluation",
      description:
        "We test prompts, retrieval quality, edge cases, response accuracy, and human handoff flows before release.",
    },
    {
      title: "Optimization",
      description:
        "We improve speed, cost, relevance, and workflow adoption after the AI tool starts being used by real teams.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for AI Project Development",
  differentiators: [
    {
      title: "AI Built Around Workflows",
      description:
        "We do not build isolated demos. We connect AI to the exact business process, team role, or customer journey it needs to support.",
    },
    {
      title: "Software Delivery Credibility",
      description:
        "We understand how AI features must live inside secure, multi-user products with clear workflows, access rules, and measurable outcomes.",
    },
    {
      title: "Strong Data Thinking",
      description:
        "We pay attention to source quality, retrieval logic, permissions, and context so your AI system is useful and responsible.",
    },
    {
      title: "Practical Tool Selection",
      description:
        "We choose models, frameworks, and vector databases based on your use case, budget, privacy expectations, and maintenance needs.",
    },
    {
      title: "Human-in-the-Loop Design",
      description:
        "For sensitive workflows, we design review, approval, escalation, and fallback flows so teams stay in control.",
    },
    {
      title: "Launch and Learning",
      description:
        "We help you release a focused AI tool, observe real usage, and improve prompts, retrieval, and interface behavior over time.",
    },
  ],
  toolsTitle: "AI Technologies and Tools We Use",
  tools: [
    "OpenAI",
    "LangChain",
    "LangGraph",
    "Vector Databases",
    "Pinecone",
    "Supabase",
    "Python",
    "Node.js",
    "React",
    "REST APIs",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Figma",
  ],
  faqs: [
    {
      question: "What types of AI projects can Jervix build?",
      answer:
        "We can build AI assistants, document search tools, RAG systems, internal automation, lead qualification flows, reporting helpers, and AI features inside SaaS or web applications.",
    },
    {
      question: "Can you connect AI with our existing business data?",
      answer:
        "Yes. We can connect AI workflows with documents, databases, APIs, websites, CRM exports, and internal knowledge sources while planning permissions and data quality carefully.",
    },
    {
      question: "How do you reduce inaccurate AI answers?",
      answer:
        "We use better source data, retrieval logic, prompt design, evaluation checks, fallback rules, and human review flows where accuracy matters.",
    },
    {
      question: "Do we need a custom AI model?",
      answer:
        "Not always. Many business AI projects work well with existing models plus strong context, retrieval, and workflow design. We recommend custom training only when it clearly adds value.",
    },
    {
      question: "Can AI be added to an existing web app?",
      answer:
        "Yes. We can add AI features to existing apps through APIs, embedded chat, admin tools, dashboards, and backend workflows.",
    },
  ],
  relatedServices: ["saas-development", "web-development", "digital-marketing"],
};

export const webDevelopmentPage: ServicePageData = {
  ...serviceSummaries[2],
  seoTitle: "Web Development Services | Jervix Technologies",
  metaDescription:
    "Build fast, responsive websites and web apps with Jervix Technologies, focused on UX, SEO structure, performance, reliable code, and conversions.",
  heroTitle: "Web Development Services for Fast, Useful Websites",
  heroDescription:
    "Jervix Technologies designs and develops websites that explain your business clearly, load quickly, and support real customer action. We combine clean frontend engineering with practical SEO structure and maintainable code.",
  whatIsTitle: "What is Web Development?",
  whatIsBody: [
    "Web development is the planning, design, coding, testing, and improvement of websites and browser-based applications. For a business, strong web development is not only about visual design. It includes page structure, performance, responsive layouts, accessible content, conversion paths, analytics readiness, and a codebase that can be updated without creating friction every time the company changes.",
    "Jervix Technologies builds websites and web apps around business goals. We think about how visitors arrive, what they need to understand, which action they should take, and how the site will support future pages, campaigns, and service growth. We bring structured delivery thinking to web development: clear flows, reusable components, useful content, and reliable user experiences.",
  ],
  processTitle: "Our Web Development Process",
  process: [
    {
      title: "Website Strategy",
      description:
        "We define the audience, page goals, sitemap, service priorities, and conversion actions before design or development begins.",
    },
    {
      title: "UX and Content Structure",
      description:
        "We organize content into clear sections, headings, CTAs, and internal links so visitors can understand the offer quickly.",
    },
    {
      title: "Responsive UI Development",
      description:
        "We build polished layouts that work across desktop, tablet, and mobile while matching your brand and user expectations.",
    },
    {
      title: "Performance and SEO Setup",
      description:
        "We improve page structure, metadata, image behavior, semantic HTML, and technical basics that help users and search engines.",
    },
    {
      title: "Testing and Launch",
      description:
        "We test navigation, forms, responsiveness, browser behavior, and deployment details before publishing the website.",
    },
    {
      title: "Ongoing Improvements",
      description:
        "After launch, we help improve pages based on analytics, campaigns, service changes, and customer feedback.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for Web Development",
  differentiators: [
    {
      title: "Product-Level UX Thinking",
      description:
        "Our software and service delivery experience helps us design web experiences that are structured, clear, and easy to use.",
    },
    {
      title: "SEO-Friendly Foundations",
      description:
        "We plan descriptive URLs, page titles, headings, internal links, and service content so your website has a stronger organic base.",
    },
    {
      title: "Clean Responsive Design",
      description:
        "We build layouts that feel polished on real screens, with careful spacing, readable content, and touch-friendly interactions.",
    },
    {
      title: "Modern Frontend Engineering",
      description:
        "We use maintainable component patterns, reusable sections, and performance-conscious code for websites that can grow.",
    },
    {
      title: "Conversion Awareness",
      description:
        "We design CTAs, forms, service cards, and page flows around the actions your business actually needs from visitors.",
    },
    {
      title: "Reliable Handoff and Support",
      description:
        "We keep implementation clear and can support future service pages, landing pages, analytics updates, and feature additions.",
    },
  ],
  toolsTitle: "Web Technologies and Tools We Use",
  tools: [
    "React",
    "TypeScript",
    "Vite",
    "Next.js",
    "Node.js",
    "SCSS",
    "Tailwind",
    "REST APIs",
    "Figma",
    "GitHub",
    "Vercel",
    "Netlify",
    "Google Analytics",
    "Search Console",
  ],
  faqs: [
    {
      question: "Can Jervix build a business website from scratch?",
      answer:
        "Yes. We can plan, design, develop, launch, and improve a complete business website with service pages, contact forms, responsive layouts, and SEO-ready structure.",
    },
    {
      question: "Do your websites support SEO?",
      answer:
        "Yes. We include semantic page structure, metadata planning, internal links, responsive design, clean content hierarchy, and performance-minded implementation.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We can audit your current website, preserve what works, improve the layout and messaging, and rebuild pages in a cleaner technical structure.",
    },
    {
      question: "Can you build web apps as well as websites?",
      answer:
        "Yes. We can build browser-based applications, dashboards, portals, admin tools, and workflow systems using modern frontend and backend technologies.",
    },
    {
      question: "Will the website be mobile responsive?",
      answer:
        "Yes. We design and test layouts across mobile and desktop breakpoints so text, navigation, cards, and CTAs remain clear and usable.",
    },
  ],
  relatedServices: ["saas-development", "wordpress-development", "digital-marketing"],
};

export const wordpressDevelopmentPage: ServicePageData = {
  ...serviceSummaries[3],
  seoTitle: "WordPress Development Services | Jervix Technologies",
  metaDescription:
    "Get WordPress websites, landing pages, WooCommerce stores, and CMS workflows built by Jervix Technologies for performance, SEO, and easy updates.",
  heroTitle: "WordPress Development Services for Business Websites",
  heroDescription:
    "Jervix Technologies builds WordPress websites that are easy to manage, clear for customers, and structured for growth. We create CMS experiences that help your team publish confidently without sacrificing performance or design quality.",
  whatIsTitle: "What is WordPress Development?",
  whatIsBody: [
    "WordPress development is the process of designing, building, customizing, and maintaining websites on the WordPress content management system. A strong WordPress site can support service pages, blogs, landing pages, ecommerce, lead forms, SEO plugins, analytics, and content updates without requiring a developer for every small change.",
    "For businesses, WordPress works best when it is planned carefully. The theme, plugins, page builder, hosting, security, performance, and content structure all affect how easy the site is to manage. Jervix Technologies combines CMS thinking with structured delivery discipline, so we care about clear user roles, maintainable structure, performance, and a website your team can actually operate after launch.",
  ],
  processTitle: "Our WordPress Development Process",
  process: [
    {
      title: "CMS Planning",
      description:
        "We define the pages, content types, admin needs, plugin requirements, and editing workflow for your WordPress site.",
    },
    {
      title: "Design System Setup",
      description:
        "We create a consistent page style for headings, cards, CTAs, forms, service sections, and reusable layout blocks.",
    },
    {
      title: "Theme and Page Build",
      description:
        "We build pages using the right mix of theme customization, page builder tools, and custom code when needed.",
    },
    {
      title: "SEO and Performance Basics",
      description:
        "We configure metadata, clean URLs, image handling, caching, forms, and essential technical SEO foundations.",
    },
    {
      title: "Testing and Training",
      description:
        "We test the site across screens, review forms and admin workflows, and help your team understand how to update content.",
    },
    {
      title: "Maintenance Support",
      description:
        "We can support plugin updates, landing pages, content changes, speed improvements, and ongoing website enhancements.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for WordPress Development",
  differentiators: [
    {
      title: "CMS with Business Structure",
      description:
        "We organize pages, sections, and admin workflows so WordPress supports your business rather than becoming a messy page collection.",
    },
    {
      title: "SaaS-Informed Discipline",
      description:
        "We bring disciplined delivery to WordPress projects: clarity, roles, reusable patterns, performance, and maintainability.",
    },
    {
      title: "Performance-Aware Builds",
      description:
        "We avoid unnecessary plugin bloat and plan images, caching, scripts, and layouts with speed and usability in mind.",
    },
    {
      title: "SEO-Ready Pages",
      description:
        "We structure service pages, internal links, page titles, headings, and content blocks so the site is easier for search engines to understand.",
    },
    {
      title: "Easy Editing Experience",
      description:
        "We build with the future editor in mind, so your team can update common sections without breaking the layout.",
    },
    {
      title: "Ecommerce and Lead Capture",
      description:
        "We can support WooCommerce, contact forms, quote requests, booking flows, and landing pages that connect to your sales process.",
    },
  ],
  toolsTitle: "WordPress Tools We Use",
  tools: [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "Gutenberg",
    "ACF",
    "Yoast SEO",
    "Rank Math",
    "WP Rocket",
    "Cloudflare",
    "PHP",
    "MySQL",
    "Figma",
    "Google Analytics",
    "Search Console",
  ],
  faqs: [
    {
      question: "Can Jervix build a custom WordPress website?",
      answer:
        "Yes. We can build custom WordPress websites using a theme, page builder, custom fields, and custom code depending on the design and editing needs.",
    },
    {
      question: "Do you build WooCommerce stores?",
      answer:
        "Yes. We can create WooCommerce stores with product pages, checkout setup, payment configuration, and performance-aware page structure.",
    },
    {
      question: "Can my team update the website after launch?",
      answer:
        "Yes. We design WordPress admin workflows and reusable sections so common content changes are easy for your team to manage.",
    },
    {
      question: "Can you improve an existing WordPress site?",
      answer:
        "Yes. We can improve layout, speed, plugin setup, SEO structure, forms, content organization, and mobile responsiveness.",
    },
    {
      question: "Is WordPress good for SEO?",
      answer:
        "WordPress can be strong for SEO when the site has clean structure, useful content, good performance, metadata, internal links, and responsible plugin use.",
    },
  ],
  relatedServices: ["web-development", "digital-marketing", "whatsapp-marketing"],
};

export const mobileAppDevelopmentPage: ServicePageData = {
  ...serviceSummaries[4],
  seoTitle: "Mobile App Development Services | Jervix Technologies",
  metaDescription:
    "Build mobile apps for customers, teams, and field operations with Jervix Technologies, from UX and APIs to testing, launch, and ongoing improvements.",
  heroTitle: "Mobile App Development Services for Real Workflows",
  heroDescription:
    "Jervix Technologies builds mobile apps that help customers, employees, and field teams complete important actions from anywhere. We focus on clear product flows, dependable backend integration, and experiences that feel simple on small screens.",
  whatIsTitle: "What is Mobile App Development?",
  whatIsBody: [
    "Mobile app development is the process of planning, designing, building, testing, and launching applications for smartphones and tablets. A business app may support customer accounts, bookings, ecommerce, field reporting, team communication, service requests, dashboards, notifications, or internal operations. The best mobile apps are not just smaller versions of websites; they are designed around touch behavior, speed, offline realities, and repeated daily use.",
    "Jervix Technologies approaches mobile app development with a product mindset. We clarify the role of the app, the users it serves, the backend systems it must connect with, and the actions that need to be fast. We plan role-based access, workflow logic, reporting needs, and stable APIs behind every user-facing feature.",
  ],
  processTitle: "Our Mobile App Development Process",
  process: [
    {
      title: "App Discovery",
      description:
        "We define the target users, app goals, required features, platforms, integrations, and first launch scope.",
    },
    {
      title: "User Flow Design",
      description:
        "We map onboarding, navigation, forms, notifications, dashboards, and core actions for a smooth mobile experience.",
    },
    {
      title: "Backend and API Planning",
      description:
        "We plan authentication, data models, APIs, admin tools, and integrations needed to support the app reliably.",
    },
    {
      title: "App Development",
      description:
        "We build the mobile interface and connect it with backend services, notifications, analytics, and business logic.",
    },
    {
      title: "Device Testing",
      description:
        "We test layouts, performance, permissions, forms, error states, and real usage flows across target devices.",
    },
    {
      title: "Launch Support",
      description:
        "We help prepare app assets, deployment steps, release checks, and the roadmap for post-launch improvements.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for Mobile App Development",
  differentiators: [
    {
      title: "Workflow-First Product Thinking",
      description:
        "We focus on the actions users need to complete quickly, not just on screens that look attractive in isolation.",
    },
    {
      title: "SaaS and Backend Experience",
      description:
        "Our work building Jervix gives us practical experience with APIs, roles, dashboards, users, projects, and secure operational data.",
    },
    {
      title: "Clear Mobile UX",
      description:
        "We design mobile flows with readable content, focused actions, predictable navigation, and fewer unnecessary steps.",
    },
    {
      title: "Integration Capability",
      description:
        "We can connect apps with websites, SaaS platforms, CRMs, payment systems, notification services, and internal APIs.",
    },
    {
      title: "Scalable App Foundation",
      description:
        "We plan architecture and backend contracts so the app can support new modules and more users after launch.",
    },
    {
      title: "Practical Launch Roadmap",
      description:
        "We help define a useful first version and a realistic improvement path instead of overloading the initial release.",
    },
  ],
  toolsTitle: "Mobile Technologies and Tools We Use",
  tools: [
    "React Native",
    "Flutter",
    "TypeScript",
    "Node.js",
    "Firebase",
    "REST APIs",
    "Push Notifications",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Google Play",
    "App Store",
    "Figma",
    "GitHub",
  ],
  faqs: [
    {
      question: "Can Jervix build both Android and iOS apps?",
      answer:
        "Yes. We can build cross-platform apps for Android and iOS using technologies such as React Native or Flutter depending on project needs.",
    },
    {
      question: "Can a mobile app connect to my existing website or software?",
      answer:
        "Yes. We can connect mobile apps to existing APIs, databases, admin panels, CRMs, payment systems, and internal tools.",
    },
    {
      question: "How do you decide the first app version?",
      answer:
        "We identify the smallest useful release by prioritizing the workflows users need most and delaying lower-value features for later versions.",
    },
    {
      question: "Do you help with app launch?",
      answer:
        "Yes. We can support release preparation, store assets, testing, deployment checks, and post-launch improvements.",
    },
    {
      question: "Can you build internal employee apps?",
      answer:
        "Yes. Internal apps for field teams, reporting, tasks, approvals, attendance, or dashboards are a strong fit for our product and workflow experience.",
    },
  ],
  relatedServices: ["saas-development", "web-development", "ai-development"],
};

export const whatsappMarketingPage: ServicePageData = {
  ...serviceSummaries[5],
  seoTitle: "WhatsApp Marketing Services | Jervix Technologies",
  metaDescription:
    "Run WhatsApp marketing campaigns, customer updates, lead follow-ups, and compliant messaging workflows with Jervix Technologies for better conversions.",
  heroTitle: "WhatsApp Marketing Services for Customer Conversations",
  heroDescription:
    "Jervix Technologies helps businesses use WhatsApp for lead follow-up, customer updates, campaign communication, and conversational workflows. We focus on compliant, useful messaging that supports trust instead of noisy outreach.",
  whatIsTitle: "What is WhatsApp Marketing?",
  whatIsBody: [
    "WhatsApp marketing uses WhatsApp as a business communication channel for customer updates, promotional messages, lead nurturing, reminders, support flows, and sales conversations. For many businesses, WhatsApp is where prospects are most responsive, but successful marketing depends on segmentation, consent, message quality, timing, and a clear handoff between automation and human follow-up.",
    "Jervix Technologies plans WhatsApp marketing around customer journeys rather than bulk blasts. We help define message templates, campaign segments, lead sources, response flows, and reporting needs. We also plan how communication connects with customer data, team ownership, tasks, and follow-up processes so campaigns are easier to manage after the first send.",
  ],
  processTitle: "Our WhatsApp Marketing Process",
  process: [
    {
      title: "Audience and Goal Mapping",
      description:
        "We define campaign goals, audience segments, opt-in sources, customer stages, and the action each message should drive.",
    },
    {
      title: "Message Flow Planning",
      description:
        "We write concise message flows for awareness, lead follow-up, reminders, offers, support, or re-engagement campaigns.",
    },
    {
      title: "Template and Setup Support",
      description:
        "We help prepare business messaging assets, approved templates, campaign structure, and response routing.",
    },
    {
      title: "Campaign Launch",
      description:
        "We launch campaigns with careful segmentation, timing, CTA planning, and tracking so results can be reviewed.",
    },
    {
      title: "Response Management",
      description:
        "We plan how incoming replies move to sales, support, or operations so conversations do not get lost.",
    },
    {
      title: "Reporting and Improvement",
      description:
        "We review delivery, replies, lead quality, conversions, and customer feedback to improve future messaging.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for WhatsApp Marketing",
  differentiators: [
    {
      title: "Conversation-First Strategy",
      description:
        "We design WhatsApp campaigns to start useful conversations, qualify interest, and support customer decisions.",
    },
    {
      title: "Operational Follow-Through",
      description:
        "Our experience building Jervix helps us connect campaigns with tasks, owners, follow-ups, and team accountability.",
    },
    {
      title: "Compliant Messaging Mindset",
      description:
        "We plan around consent, template quality, audience relevance, and responsible sending practices for business communication.",
    },
    {
      title: "Clear Campaign Segmentation",
      description:
        "We separate prospects, customers, dormant leads, and service groups so each audience receives more relevant messaging.",
    },
    {
      title: "Automation with Human Handoff",
      description:
        "We can plan automated replies and routing while keeping room for sales or support teams to step in when needed.",
    },
    {
      title: "Performance Review",
      description:
        "We look beyond sends and clicks to understand replies, lead quality, appointment interest, and business outcomes.",
    },
  ],
  toolsTitle: "WhatsApp Marketing Tools We Use",
  tools: [
    "WhatsApp Business",
    "WhatsApp Cloud API",
    "Business Manager",
    "Message Templates",
    "Webhook Flows",
    "CRM Lists",
    "Google Sheets",
    "Landing Pages",
    "UTM Tracking",
    "Analytics",
    "Zapier",
    "Node.js",
    "REST APIs",
    "Figma",
  ],
  faqs: [
    {
      question: "Is WhatsApp marketing good for lead generation?",
      answer:
        "Yes. WhatsApp can work well for lead follow-up, appointment reminders, offer communication, customer support, and nurturing when campaigns are consent-based and relevant.",
    },
    {
      question: "Can Jervix help with WhatsApp message templates?",
      answer:
        "Yes. We can help plan and write concise templates for customer updates, promotions, reminders, and follow-up flows.",
    },
    {
      question: "Do you support WhatsApp automation?",
      answer:
        "Yes. We can plan automated replies, routing, webhook flows, and handoff paths depending on the business process.",
    },
    {
      question: "How do you avoid spammy WhatsApp campaigns?",
      answer:
        "We focus on opt-in audiences, relevant segmentation, clear CTAs, message timing, and useful content instead of generic mass messaging.",
    },
    {
      question: "Can WhatsApp marketing connect with our sales process?",
      answer:
        "Yes. We can structure campaigns so replies and leads are assigned to team members, CRMs, sheets, or follow-up workflows.",
    },
  ],
  relatedServices: ["digital-marketing", "bulk-sms-marketing", "web-development"],
};

export const bulkSmsMarketingPage: ServicePageData = {
  ...serviceSummaries[6],
  seoTitle: "Bulk SMS Marketing Services | Jervix Technologies",
  metaDescription:
    "Send targeted bulk SMS campaigns for alerts, promotions, reminders, customer updates, lead follow-ups, and time-sensitive offers with Jervix Technologies.",
  heroTitle: "Bulk SMS Marketing Services for Fast Customer Reach",
  heroDescription:
    "Jervix Technologies helps businesses use SMS for time-sensitive promotions, alerts, reminders, and customer communication. We build campaigns around clear targeting, short messages, and measurable follow-up.",
  whatIsTitle: "What is Bulk SMS Marketing?",
  whatIsBody: [
    "Bulk SMS marketing is the practice of sending text messages to selected customer or prospect lists for promotions, alerts, reminders, confirmations, and business updates. SMS remains useful because it is direct, short, and widely accessible, but results depend on list quality, message clarity, compliance, timing, and how well the campaign connects to the next customer action.",
    "Jervix Technologies treats SMS as part of a broader communication workflow. We help businesses define audience segments, write concise copy, plan links or phone CTAs, schedule campaigns, and review responses. We also plan how communication should connect with customers, teams, tasks, reports, and structured follow-up instead of disappearing after a message is sent.",
  ],
  processTitle: "Our Bulk SMS Marketing Process",
  process: [
    {
      title: "Campaign Planning",
      description:
        "We define the purpose, audience, offer, timing, and response path for each SMS campaign.",
    },
    {
      title: "List Segmentation",
      description:
        "We organize contacts by customer type, interest, location, lifecycle stage, or campaign source for better relevance.",
    },
    {
      title: "Message Writing",
      description:
        "We write short, clear SMS copy with a direct CTA, brand context, and tracking link when useful.",
    },
    {
      title: "Delivery Setup",
      description:
        "We help prepare sender details, campaign scheduling, landing page links, and tracking parameters.",
    },
    {
      title: "Launch and Monitor",
      description:
        "We send campaigns with attention to timing, delivery, link behavior, and immediate response handling.",
    },
    {
      title: "Results Review",
      description:
        "We review clicks, replies, inquiries, conversions, and list quality to improve the next campaign.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for Bulk SMS Marketing",
  differentiators: [
    {
      title: "Clear Message Strategy",
      description:
        "We write SMS campaigns for quick understanding and action, not long messages that customers ignore.",
    },
    {
      title: "Workflow Connection",
      description:
        "Our Jervix SaaS experience helps us connect campaign responses to follow-ups, owners, tasks, and reporting.",
    },
    {
      title: "Audience Relevance",
      description:
        "We segment lists so customers receive messages that match their context, interest, or lifecycle stage.",
    },
    {
      title: "Landing Page Alignment",
      description:
        "When SMS drives clicks, we align the landing page or contact path so the campaign has a stronger chance to convert.",
    },
    {
      title: "Compliance Awareness",
      description:
        "We encourage responsible list use, clear identification, opt-out planning, and message relevance.",
    },
    {
      title: "Performance Improvement",
      description:
        "We review campaign data and customer responses so future SMS campaigns become sharper and more effective.",
    },
  ],
  toolsTitle: "Bulk SMS Tools We Use",
  tools: [
    "SMS Gateways",
    "DLT Templates",
    "Contact Lists",
    "CRM Exports",
    "Google Sheets",
    "UTM Tracking",
    "Landing Pages",
    "Analytics",
    "Short Links",
    "Zapier",
    "REST APIs",
    "Node.js",
    "Reports",
    "Figma",
  ],
  faqs: [
    {
      question: "What can bulk SMS marketing be used for?",
      answer:
        "Bulk SMS can be used for promotions, appointment reminders, payment alerts, event updates, lead follow-ups, service notifications, and time-sensitive customer communication.",
    },
    {
      question: "Can Jervix write SMS campaign copy?",
      answer:
        "Yes. We can write concise SMS copy with clear CTAs, campaign context, and tracking links where appropriate.",
    },
    {
      question: "Can SMS campaigns include links?",
      answer:
        "Yes. SMS campaigns can include landing page, WhatsApp, call, or payment links, and we can add tracking parameters to review performance.",
    },
    {
      question: "How do you improve bulk SMS results?",
      answer:
        "We improve results through list segmentation, better timing, clear offers, short copy, relevant landing pages, and post-campaign review.",
    },
    {
      question: "Can SMS work with WhatsApp marketing?",
      answer:
        "Yes. SMS and WhatsApp can support each other, with SMS handling urgent reach and WhatsApp supporting richer conversation and follow-up.",
    },
  ],
  relatedServices: ["whatsapp-marketing", "digital-marketing", "web-development"],
};

export const digitalMarketingPage: ServicePageData = {
  ...serviceSummaries[7],
  seoTitle: "Digital Marketing Services | Jervix Technologies",
  metaDescription:
    "Grow online with Jervix Technologies through SEO, content, paid campaigns, landing pages, analytics, WhatsApp, and practical lead-generation systems.",
  heroTitle: "Digital Marketing Services for Measurable Business Growth",
  heroDescription:
    "Jervix Technologies helps businesses improve visibility, generate leads, and turn campaigns into structured follow-up. We connect SEO, content, paid traffic, landing pages, analytics, and messaging into one practical growth system.",
  whatIsTitle: "What is Digital Marketing?",
  whatIsBody: [
    "Digital marketing is the use of online channels to attract, educate, convert, and retain customers. It can include SEO, content marketing, paid ads, social media, landing pages, WhatsApp follow-up, email, SMS, analytics, and conversion optimization. Strong digital marketing is not just posting content or running ads; it is building a clear path from discovery to trust to inquiry.",
    "Jervix Technologies approaches digital marketing with a structured delivery mindset. We plan campaigns around business goals, service positioning, customer questions, landing page quality, lead capture, and follow-up workflows. Growth efforts need systems behind them: data, ownership, tasks, reports, and repeatable processes.",
  ],
  processTitle: "Our Digital Marketing Process",
  process: [
    {
      title: "Growth Audit",
      description:
        "We review your website, offers, audience, competitors, current traffic, lead sources, and conversion gaps.",
    },
    {
      title: "Strategy and Channel Plan",
      description:
        "We choose the right mix of SEO, content, paid ads, social, messaging, and landing pages based on your goals.",
    },
    {
      title: "Content and Campaign Build",
      description:
        "We create service pages, landing pages, ad copy, campaign assets, and follow-up messages with clear positioning.",
    },
    {
      title: "Tracking Setup",
      description:
        "We set up analytics, conversion events, UTMs, reporting views, and lead source tracking where possible.",
    },
    {
      title: "Launch and Optimize",
      description:
        "We launch campaigns, monitor performance, improve weak points, and refine targeting, content, or landing pages.",
    },
    {
      title: "Reporting and Next Steps",
      description:
        "We review leads, traffic, rankings, campaign results, and next actions so marketing remains accountable.",
    },
  ],
  differentiatorsTitle: "Why Choose Jervix for Digital Marketing",
  differentiators: [
    {
      title: "Strategy Before Promotion",
      description:
        "We clarify offer, audience, page structure, lead path, and follow-up before spending effort on traffic.",
    },
    {
      title: "Technical and Marketing Blend",
      description:
        "Because we build websites, SaaS platforms, and campaign systems, we can improve both marketing content and the workflows behind it.",
    },
    {
      title: "SEO-Friendly Content",
      description:
        "We create useful service content with clear headings, searcher language, internal links, FAQs, and unique positioning.",
    },
    {
      title: "Conversion-Focused Pages",
      description:
        "We align landing pages, CTAs, forms, WhatsApp links, and follow-up flows so marketing activity has a path to revenue.",
    },
    {
      title: "Practical Reporting",
      description:
        "We focus on traffic quality, leads, inquiries, conversion signals, and next decisions instead of vanity metrics alone.",
    },
    {
      title: "Multi-Channel Follow-Up",
      description:
        "We can connect digital campaigns with WhatsApp, SMS, forms, and sales workflows so leads are handled quickly.",
    },
  ],
  toolsTitle: "Digital Marketing Tools We Use",
  tools: [
    "Google Search Console",
    "Google Analytics",
    "Google Ads",
    "Meta Ads",
    "SEO Tools",
    "Keyword Research",
    "Landing Pages",
    "UTM Tracking",
    "Content Planning",
    "WhatsApp",
    "Bulk SMS",
    "CRM Sheets",
    "Canva",
    "Figma",
  ],
  faqs: [
    {
      question: "What digital marketing services does Jervix provide?",
      answer:
        "We support SEO content, service pages, landing pages, paid campaign planning, analytics setup, lead tracking, WhatsApp follow-up, SMS campaigns, and conversion improvement.",
    },
    {
      question: "Can digital marketing help generate leads?",
      answer:
        "Yes. Lead generation improves when the offer, audience, landing page, CTA, tracking, and follow-up workflow are planned together.",
    },
    {
      question: "Do you provide SEO content for service pages?",
      answer:
        "Yes. We can create SEO-friendly service page content with unique positioning, useful explanations, process sections, FAQs, and internal links.",
    },
    {
      question: "Can you run paid ads and landing pages together?",
      answer:
        "Yes. We can plan paid campaigns and build landing pages that match the ad promise, audience intent, and lead capture goal.",
    },
    {
      question: "How soon can digital marketing show results?",
      answer:
        "Paid campaigns can produce data quickly, while SEO and content usually need more time. We recommend measuring early signals, improving weak points, and building momentum consistently.",
    },
  ],
  relatedServices: ["web-development", "whatsapp-marketing", "bulk-sms-marketing"],
};

export const servicePages: Record<string, ServicePageData> = {
  "saas-development": saasDevelopmentPage,
  "ai-development": aiDevelopmentPage,
  "web-development": webDevelopmentPage,
  "wordpress-development": wordpressDevelopmentPage,
  "mobile-app-development": mobileAppDevelopmentPage,
  "whatsapp-marketing": whatsappMarketingPage,
  "bulk-sms-marketing": bulkSmsMarketingPage,
  "digital-marketing": digitalMarketingPage,
};
