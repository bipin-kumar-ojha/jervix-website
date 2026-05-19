import '../layout/Header.scss';
import { useState } from 'react';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" aria-label="Jervix home">
          <img src="/assets/jervix-logo.png" alt="Jervix" />
        </a>

        <nav className="header__nav" aria-label="Primary navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#pricingSection" className="header__link-button">
            View Plans
          </a>
          <a href="#demo" className="header__button" data-request-demo>
            Request Demo
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
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMobileMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__mobile-card">
          <span>Starter from ₹1,999/month</span>
          <p>Manage organization setup, projects, tasks, budgets, and performance.</p>
        </div>

        <div className="header__mobile-actions">
          <a href="#pricing" className="header__link-button" onClick={closeMobileMenu}>
            View Plans
          </a>
          <a href="#demo" className="header__button" onClick={closeMobileMenu} data-request-demo>
            Request Demo
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
