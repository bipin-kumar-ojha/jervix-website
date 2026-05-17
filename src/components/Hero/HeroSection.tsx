import './HeroSection.scss';

const heroStats = [
  { value: '9', label: 'modules' },
  { value: '100%', label: 'structured' },
  { value: '1', label: 'workspace' },
];

const proofItems = [
  'Departments & teams',
  'Projects & tasks',
  'Budget tracking',
];

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Workforce Management Platform</span>

          <h1 id="hero-title" className="hero__title">
            Manage your organization from one workspace.
          </h1>

          <p className="hero__subtitle">
            Register your company, create departments, teams, roles, projects,
            assign tasks, and track budgets and performance.
          </p>

          <div className="hero__actions" aria-label="Hero actions">
            <a href="/get-started" className="hero__button hero__button--primary">
              Request Demo
            </a>
            <a href="/watch-demo" className="hero__button hero__button--secondary">
              Explore Platform
            </a>
          </div>

          <ul className="hero__proof" aria-label="Jervix highlights">
            {proofItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__stats" aria-label="Platform outcomes">
            {heroStats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-label="Jervix demo preview">
          <div className="hero__demo-card">
            <div className="hero__demo-header">
              <span>See Jervix in action</span>
              <strong>Book a demo</strong>
            </div>

            <form className="hero__demo-form">
              <label>
                Work email
                <input type="email" placeholder="you@company.com" />
              </label>

              <label>
                Company size
                <select defaultValue="">
                  <option value="" disabled>Select organization size</option>
                  <option>1-25 employees</option>
                  <option>26-100 employees</option>
                  <option>101-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </label>

              <button type="button">Request Demo</button>
            </form>

            <div className="hero__demo-meta">
              <span>No credit card</span>
              <span>Launching soon</span>
              <span>Secure by design</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
