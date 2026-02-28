
import '../layout/Header.scss';
import { useState } from 'react';

const navLinks = ['Platform', 'Solutions', 'Customers', 'Resources', 'Pricing'];



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" >
            <img src="/assets/logo.png" alt="" />
          </a>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((label) => (
              <li key={label} className="header__nav-item">
                <a href={`/${label.toLowerCase()}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hide actions on mobile, show only on desktop */}
        <div className="header__actions">
          <a href="/" className="header__sign-in">
            Sign In
          </a>
          <button className="header__button header__button--primary">
            Request Demo
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`header__hamburger${mobileMenuOpen ? ' header__hamburger--open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-overlay${mobileMenuOpen ? ' header__mobile-overlay--active' : ''}`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Menu Drawer */}
      <nav className={`header__mobile-menu${mobileMenuOpen ? ' header__mobile-menu--open' : ''}`}>
        <div className="header__mobile-menu-row">
          <div className="header__mobile-logo">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/assets/logo.png" alt="Logo" />
            </a>
          </div>
          <button className="header__mobile-close" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
            <span>&times;</span>
          </button>
        </div>
        <ul className="header__mobile-list">
          {navLinks.map((label) => (
            <li key={label} className="header__mobile-item">
              <a href={`/${label.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="header__mobile-actions">
          <a href="/" className="header__sign-in" onClick={() => setMobileMenuOpen(false)}>
            Sign In
          </a>
          <button className="header__button header__button--primary" onClick={() => setMobileMenuOpen(false)}>
            Request Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
