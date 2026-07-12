import "./Footer.scss";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      ["Services", "/services"],
      ["Solutions", "/solutions"],
      ["Industries", "/industries"],
      ["About", "/about"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
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
    title: "Solutions",
    links: [
      ["Enterprise Software", "/contact"],
      ["Cloud Solutions", "/contact"],
      ["IT Consulting", "/contact"],
      ["Dedicated Teams", "/contact"],
      ["Digital Transformation", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Case Study", "/contact"],
      ["Technology Stack", "/services"],
      ["Service Pages", "/services"],
      ["Request Demo", "/contact"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Healthcare", "/industries"],
      ["Real Estate", "/industries"],
      ["Ecommerce", "/industries"],
      ["Finance", "/industries"],
      ["Education", "/industries"],
    ],
  },
  {
    title: "Launch",
    links: [
      ["MVP Planning", "/contact"],
      ["Product Strategy", "/contact"],
      ["Automation Roadmap", "/contact"],
      ["Growth Support", "/contact"],
      ["SaaS Consulting", "/contact"],
    ],
  },
];

const contactLinks = [
  {
    className: "footer__contact-button--phone",
    icon: "phone",
    label: "Request a Call",
    href: "#contact",
  },
  {
    className: "footer__contact-button--mail",
    icon: "mail",
    label: "info@jervix.com",
    href: "mailto:info@jervix.com",
  },
  {
    className: "footer__contact-button--chat",
    icon: "chat",
    label: "Start Consultation",
    href: "#contact",
  },
];

const socialLinks = [
  ["facebook", "#", "Facebook"],
  ["x", "#", "X"],
  ["youtube", "#", "YouTube"],
  ["instagram", "#", "Instagram"],
  ["linkedin", "#", "LinkedIn"],
];

function ContactIcon({ type }: { type: string }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4V7Zm1.4 1.4L12 13.2l6.6-4.8M5.4 15.6l4.4-3.2m8.8 3.2-4.4-3.2" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.5a7.4 7.4 0 0 0-6.4 11.1L4.8 20l4.1-1.1A7.4 7.4 0 1 0 12 4.5Z" />
        <path d="M8.8 10.2c.6 2 2.4 3.7 4.6 4.4l1.2-1.2 1.8.6c-.1 1.1-.9 2-2 2-3.2 0-6.4-3-6.4-6.2 0-1.1.8-1.9 1.9-2l.6 1.7-1.7.7Z" />
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
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.25 3h3.07l-6.7 7.66L22.5 21h-6.17l-4.83-6.32L5.97 21H2.9l7.16-8.19L2.5 3h6.33l4.37 5.78L18.25 3Zm-1.08 16.18h1.7L7.9 4.72H6.08l11.09 14.46Z" />
      </svg>
    );
  }

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
          <h2>Contact Us</h2>
          <div className="footer__contact-list">
            {contactLinks.map((item) => (
              <a
                className={`footer__contact-button ${item.className}`}
                href={item.href}
                key={item.label}
                data-request-demo={item.href === "#contact" ? true : undefined}
              >
                <span>
                  <ContactIcon type={item.icon} />
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__meta">
        <div className="footer__social" aria-label="Social links">
          {socialLinks.map(([type, href, name]) => (
            <a href={href} aria-label={name} key={name}>
              <SocialIcon type={type} />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <span>Made with care from India</span>
      <nav aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Help</a>
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
      <span>Copyright © 2026 Jervix. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
