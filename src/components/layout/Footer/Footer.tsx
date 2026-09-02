import "./Footer.scss";

const footerColumns = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Solutions", "/solutions"],
      ["Industries", "/industries"],
      ["About", "/about"],
      ["Careers", "/careers"],
    ],
  },
  {
    title: "Services",
    links: [
      ["AI Development", "/services/ai-development"],
      ["Custom Software", "/services/web-development"],
      ["Web Applications", "/services/web-development"],
      ["Mobile Applications", "/services/mobile-app-development"],
      ["SaaS Development", "/services/saas-development"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Brochure & Capability Deck", "/brochure"],
      ["Case Study", "/contact"],
      ["Technology Stack", "/services"],
      ["Healthcare", "/industries"],
      ["Real Estate", "/industries"],
      ["Contact us", "/contact"],
    ],
  },
];

const contactDetails = [
  {
    icon: "phone",
    label: "Call Us",
    value: "+91 89202 78132",
    href: "tel:+918920278132",
  },
  {
    icon: "mail",
    label: "General Enquiries",
    value: "info@jervix.com",
    href: "mailto:info@jervix.com",
  },
  {
    icon: "mail",
    label: "Sales",
    value: "sales@jervix.com",
    href: "mailto:sales@jervix.com",
  },
];

const socialLinks = [
  ["youtube", "https://www.youtube.com/@JervixTechnologies", "YouTube"],
  ["instagram", "https://www.instagram.com/jervix_technologies", "Instagram"],
  ["linkedin", "https://www.linkedin.com/company/jervix/", "LinkedIn"],
];

function ContactIcon({ type }: { type: string }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4V7Zm1.4 1.4L12 13.2l6.6-4.8M5.4 15.6l4.4-3.2m8.8 3.2-4.4-3.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 4.8 9.8 4l2 4-1.7 1.3a12 12 0 0 0 4.6 4.6l1.3-1.7 4 2-.8 2.6c-.3 1-1.2 1.6-2.2 1.4C11 17.2 6.8 13 5.8 7c-.2-1 .4-1.9 1.4-2.2Z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: string }) {
  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.7 28.7 0 0 0 1.96 12c0 1.67.16 3.32.46 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.3-1.49.46-3.14.46-4.81s-.16-3.32-.46-4.81ZM10 15.27V8.73L15.45 12 10 15.27Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.75 2.15a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.01 2.5 2.5 0 0 1 0-5.01ZM3 9.5h4v11H3v-11Zm6.25 0h3.84v1.5h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13v5.42h-4v-4.81c0-1.15-.02-2.63-1.6-2.63-1.61 0-1.86 1.25-1.86 2.54v4.9h-4.03v-11Z" />
    </svg>
  );
}

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Jervix home">
            <img src="/assets/logo-white.png" alt="Jervix" />
          </a>
          <p>
            AI and software engineering partner for growing businesses — from idea to impact.
          </p>
          <div className="footer__social" aria-label="Social links">
            {socialLinks.map(([type, href, name]) => (
              <a href={href} aria-label={name} key={name} target="_blank" rel="noreferrer">
                <SocialIcon type={type} />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__directory" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__contact" aria-label="Contact Jervix">
          <h2>Get in Touch</h2>
          <ul className="footer__contact-list">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <span className="footer__contact-icon">
                  <ContactIcon type={item.icon} />
                </span>
                <span>
                  <span className="footer__contact-label">{item.label}</span>
                  <a href={item.href}>{item.value}</a>
                </span>
              </li>
            ))}
          </ul>
          <a className="footer__cta" href="#demo" data-request-demo>
            Book a free consultation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <span>© {new Date().getFullYear()} Jervix Technologies. All rights reserved.</span>
      <nav aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Help</a>
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
      <span>Made with care from India</span>
    </div>
  </footer>
);

export default Footer;
