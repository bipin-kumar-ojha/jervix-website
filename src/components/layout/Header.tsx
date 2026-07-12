import '../layout/Header.scss';
import { useState } from 'react';

const services = [
  {
    icon: '/assets/mega-icons/ai-color.svg',
    label: 'AI Development',
    href: '/services/ai-development',
    description: 'AI assistants, automation, workflow intelligence, and data-driven tools.',
  },
  {
    icon: '/assets/mega-icons/web-color.svg',
    label: 'Custom Software',
    href: '/services/web-development',
    description: 'Business applications, portals, dashboards, APIs, and integrations.',
  },
  {
    icon: '/assets/generated-icons/web.svg',
    label: 'Web Applications',
    href: '/services/web-development',
    description: 'Modern web apps with clean UX, secure architecture, and scalable code.',
  },
  {
    icon: '/assets/mega-icons/mobile-color.svg',
    label: 'Mobile Applications',
    href: '/services/mobile-app-development',
    description: 'Mobile experiences for customers, employees, and field teams.',
  },
  {
    icon: '/assets/mega-icons/saas-color.svg',
    label: 'SaaS Development',
    href: '/services/saas-development',
    description: 'Subscription platforms, portals, admin systems, and cloud apps.',
  },
  {
    icon: '/assets/workflow-icons/launch-color.svg',
    label: 'Cloud & Enterprise',
    href: '/contact',
    description: 'Cloud solutions, enterprise software, IT consulting, and dedicated teams.',
  },
];

const careerLinks = [
  {
    icon: '/assets/workflow-icons/build-color.svg',
    label: 'Current Openings',
    href: '/careers#open-positions',
    description: 'Explore software, product, design, marketing, and operations roles.',
  },
  {
    icon: '/assets/industry-icons/education.svg',
    label: 'Internship Program',
    href: '/careers/internship',
    description: 'Early career development through mentorship and project exposure.',
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" aria-label="Jervix home">
          <img src="/assets/logo.png" alt="Jervix" />
        </a>

        <nav className="header__nav" aria-label="Primary navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="header__nav-item--mega">
              <a href="/services" aria-haspopup="true">
                Services
                <span className="header__chevron" aria-hidden="true" />
              </a>
              <div className="header__mega-menu" role="menu">
                <div className="header__mega-intro">
                  <span>Services</span>
                  <p>AI and software engineering services for business systems.</p>
                </div>
                <div className="header__mega-links">
                  {services.map((service) => (
                    <a href={service.href} key={service.label} role="menuitem">
                      <span className="header__mega-icon">
                        <img src={service.icon} alt="" />
                      </span>
                      <span>
                        <strong>{service.label}</strong>
                        <small>{service.description}</small>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/industries">Industries</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="header__nav-item--mega header__nav-item--careers">
              <a href="/careers" aria-haspopup="true">
                Careers
                <span className="header__chevron" aria-hidden="true" />
              </a>
              <div className="header__dropdown" role="menu">
                {careerLinks.map((link) => (
                  <a href={link.href} key={link.label} role="menuitem">
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#demo" className="header__button" data-request-demo>
            Get Quote
          </a>
        </div>

        <button
          className={`header__hamburger${mobileMenuOpen ? ' header__hamburger--open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__mobile-overlay${mobileMenuOpen ? ' header__mobile-overlay--active' : ''}`}
        onClick={closeMobileMenu}
      />

      <nav
        className={`header__mobile-menu${mobileMenuOpen ? ' header__mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="header__mobile-top">
          <a href="/" className="header__mobile-logo" onClick={closeMobileMenu}>
            <img src="/assets/logo.png" alt="Jervix" />
          </a>
          <button className="header__mobile-close" aria-label="Close menu" onClick={closeMobileMenu} type="button">
            ×
          </button>
        </div>

        <ul className="header__mobile-list">
          <li>
            <a href="/" onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <details className="header__mobile-services" open>
              <summary>
                Services
                <span className="header__chevron" aria-hidden="true" />
              </summary>
              <div>
                {services.map((service) => (
                  <a href={service.href} key={service.label} onClick={closeMobileMenu}>
                    <img src={service.icon} alt="" />
                    {service.label}
                  </a>
                ))}
              </div>
            </details>
          </li>
          <li>
            <a href="/solutions" onClick={closeMobileMenu}>Solutions</a>
          </li>
          <li>
            <a href="/industries" onClick={closeMobileMenu}>Industries</a>
          </li>
          <li>
            <a href="/about" onClick={closeMobileMenu}>About</a>
          </li>
          <li>
            <details className="header__mobile-services">
              <summary>
                Careers
                <span className="header__chevron" aria-hidden="true" />
              </summary>
              <div>
                {careerLinks.map((link) => (
                  <a href={link.href} key={link.label} onClick={closeMobileMenu}>
                    <img src={link.icon} alt="" />
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          </li>
          <li>
            <a href="/contact" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>

        <div className="header__mobile-card">
          <span>AI and software development partner</span>
          <p>Custom software, web apps, mobile apps, SaaS, cloud solutions, enterprise software, and dedicated teams.</p>
        </div>

        <div className="header__mobile-actions">
          <a href="#demo" className="header__button" onClick={closeMobileMenu} data-request-demo>
            Get Quote
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
