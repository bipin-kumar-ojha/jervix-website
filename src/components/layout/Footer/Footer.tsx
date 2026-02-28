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
          <a href="#" className="footer__social" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.601v4.728z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="footer__social" aria-label="Twitter">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="footer__social" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.611.059 1.282.342 2.394 1.322 3.374.98.98 2.092 1.263 3.374 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.342 3.374-1.322.98-.98 1.263-2.092 1.322-3.374.059-1.279.072-1.688.072-7.611 0-5.923-.013-6.332-.072-7.611-.059-1.282-.342-2.394-1.322-3.374-.98-.98-2.092-1.263-3.374-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor"/>
            </svg>
          </a>
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