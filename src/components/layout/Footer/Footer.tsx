import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__brand">
        <div className="footer__logo">
            <a href="/" >
            <img src="/assets/logo-white.png" alt="" />
            </a>
        </div>

        <p className="footer__desc">
          Jervix is a structured employee lifecycle and organizational management platform 
          designed to help companies build clarity, accountability, and operational control.
        </p>

        <ul className="footer__contact-list">
          <li>
            <span className="footer__contact-icon">📍</span>
            <span className="footer__contact-link"><strong>Launching Soon</strong></span>
          </li>

          <li>
            <span className="footer__contact-icon">✉️</span>
            <span className="footer__contact-link">info@jervix.com</span>
          </li>
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
            <li>Platform Overview</li>
            <li>Role Management</li>
            <li>Task Tracking</li>
            <li>Reporting</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Solutions</span>
          <ul>
            <li>Corporate Organizations</li>
            <li>Growing Businesses</li>
            <li>Service Firms</li>
            <li>Operations Teams</li>
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Resources</span>
          <ul>
            <li>Blog</li>
            <li>Guides</li>
            <li>Documentation</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Company</span>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="footer__legal">
        <span>© 2026 Jervix. All rights reserved.</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;