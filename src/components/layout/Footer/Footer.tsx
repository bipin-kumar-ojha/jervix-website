import "./Footer.scss";

const footerGroups = [
  {
    title: "Platform",
    links: ["Organization Setup", "Teams & Users", "Roles", "Projects", "Tasks", "Budgets"],
  },
  {
    title: "Use Cases",
    links: ["Growing Businesses", "Operations Teams", "Project Teams", "Service Firms"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Support", "Contact"],
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__brand">
        <a href="/" className="footer__logo" aria-label="Jervix home">
          <img src="/assets/jervix-logo.png" alt="Jervix" />
        </a>

        <p>
          A structured workspace for managing organization setup, users, roles,
          projects, tasks, budgets, and performance.
        </p>

        <a className="footer__email" href="mailto:info@jervix.com">
          info@jervix.com
        </a>
      </div>

      <nav className="footer__links" aria-label="Footer navigation">
        {footerGroups.map((group) => (
          <div className="footer__col" key={group.title}>
            <span>{group.title}</span>
            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>

    <div className="footer__bottom">
      <span>© 2026 Jervix. All rights reserved.</span>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
