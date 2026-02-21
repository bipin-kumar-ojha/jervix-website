import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__brand">
        <div className="footer__logo">
          <span className="footer__logo-icon">J</span>
          <div className="footer__logo-text">
            <span className="footer__logo-title">Jervix</span>
            <span className="footer__logo-sub">Security & Compliance</span>
          </div>
        </div>
        <p className="footer__desc">
          Enterprise-grade security, compliance, and governance platform trusted by leading organizations worldwide.
        </p>
        <ul className="footer__contact-list">
          <li><span className="footer__contact-icon">📍</span> <span className="footer__contact-link"><strong>123 Business Ave, San Francisco, CA 94107</strong></span></li>
          <li><span className="footer__contact-icon">📞</span> <span className="footer__contact-link">+1 (555) 123-4567</span></li>
          <li><span className="footer__contact-icon">✉️</span> <span className="footer__contact-link">contact@jervix.com</span></li>
        </ul>
        <div className="footer__socials">
          <a href="#" className="footer__social"><span>in</span></a>
          <a href="#" className="footer__social"><span>tw</span></a>
          <a href="#" className="footer__social"><span>gh</span></a>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <span className="footer__col-title">Product</span>
          <ul>
            <li>Features</li>
            <li>Security</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>API Docs</li>
          </ul>
        </div>
        <div className="footer__col">
          <span className="footer__col-title">Solutions</span>
          <ul>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Technology</li>
            <li>Legal</li>
            <li>Government</li>
          </ul>
        </div>
        <div className="footer__col">
          <span className="footer__col-title">Resources</span>
          <ul>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Webinars</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer__col">
          <span className="footer__col-title">Company</span>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Press Kit</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__compliance">
        <span className="footer__compliance-badge">SOC 2 Type II</span>
        <span className="footer__compliance-badge">ISO 27001</span>
        <span className="footer__compliance-badge">GDPR Compliant</span>
        <span className="footer__compliance-badge">HIPAA Compliant</span>
      </div>
      <div className="footer__legal">
        <span>© 2026 Jervix. All rights reserved.</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Security</a>
      </div>
    </div>
  </footer>
);

export default Footer;
