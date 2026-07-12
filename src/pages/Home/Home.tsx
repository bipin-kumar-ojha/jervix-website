import AboutSection from "../../components/HomeSections/AboutSection";
import ClientStrip from "../../components/HomeSections/ClientStrip";
import HomeHero from "../../components/HomeSections/HomeHero";
import IndustriesSection from "../../components/HomeSections/IndustriesSection";
import ProcessSection from "../../components/HomeSections/ProcessSection";
import ServicesSection from "../../components/HomeSections/ServicesSection";
import StatsBand from "../../components/HomeSections/StatsBand";
import TechStackSection from "../../components/HomeSections/TechStackSection";
import ValuePillarsSection from "../../components/HomeSections/ValuePillarsSection";
import SeoHead from "../../components/SEO/SeoHead";
import { siteUrl } from "../../data/services";
import "./Home.scss";

const caseStudies = [
  {
    label: "SaaS operations",
    title: "Role-based work management platform",
    text: "Structured teams, tasks, records, reporting, and admin workflows for growing business operations.",
  },
  {
    label: "AI automation",
    title: "Workflow intelligence for service teams",
    text: "AI-assisted process mapping, data visibility, and automation opportunities for repetitive business tasks.",
  },
  {
    label: "Enterprise web",
    title: "Custom portals and dashboards",
    text: "Secure web applications with clean UX, integrations, and maintainable architecture for internal teams.",
  },
];

export default function Home() {
  return (
    <main className="home-redesign">
      <SeoHead
        title="AI & Software Development Company | Jervix Technologies"
        description="Jervix Technologies delivers AI solutions, web applications, SaaS platforms, enterprise software and digital transformation services for businesses worldwide."
        canonicalUrl={siteUrl}
        ogImage={`${siteUrl}/assets/jervix-logo.png`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Jervix Technologies",
          url: siteUrl,
          description:
            "AI and Software Development company delivering web applications, mobile apps, SaaS platforms, cloud solutions, enterprise software, IT consulting, and dedicated development teams.",
        }}
      />
      <HomeHero />
      <ClientStrip />
      <AboutSection />
      <StatsBand />
      <ServicesSection />
      <ValuePillarsSection />
      <IndustriesSection />
      <TechStackSection />
      <ProcessSection />

      <section className="section page-container proof-section" id="case-studies">
        <div className="section__intro">
          <p className="eyebrow">Case Studies</p>
          <h2>Software outcomes shaped around real business requirements.</h2>
          <p>
            We work across product planning, custom software, AI automation, SaaS platforms,
            enterprise workflows, and cloud-ready systems.
          </p>
        </div>
        <div className="proof-grid">
          {caseStudies.map((item) => (
            <article className="proof-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-mini page-container" id="careers">
        <div>
          <p className="eyebrow">Careers at Jervix</p>
          <h2>We build software for businesses and talent for the future.</h2>
          <p>
            Alongside our client engineering work, Jervix invests in young software professionals
            through mentorship, learning culture, and early career development initiatives.
          </p>
        </div>
        <a href="/careers" className="secondary-action">
          Explore Careers
        </a>
      </section>

    </main>
  );
}
