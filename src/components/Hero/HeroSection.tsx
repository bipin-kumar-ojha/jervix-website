import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  employeeSizes,
  requestDemoSuccessMessage,
  submitWebsiteLead,
  type SubmitStatus,
} from '../RequestDemo/requestDemoApi';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      await submitWebsiteLead(form);
      form.reset();
      setSubmitStatus('success');
      setSubmitMessage(requestDemoSuccessMessage);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your request right now.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="#pricingSection" className="hero__button hero__button--primary">
              View Plans
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

            <form className="hero__demo-form" onSubmit={handleSubmit}>
              <fieldset disabled={isSubmitting}>
                <label>
                  Organization name
                  <input type="text" name="organizationName" placeholder="Your organization" required />
                </label>

                <label>
                  Your name
                  <input type="text" name="name" placeholder="Your full name" required />
                </label>

                <div className="hero__form-row">
                  <label>
                    Email
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </label>

                  <label>
                    Phone
                    <span className="hero__phone-field">
                      <span className="hero__phone-prefix">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        placeholder="98765 43210"
                        aria-label="Phone number"
                        required
                      />
                    </span>
                  </label>
                </div>

                <label>
                  Employee size
                  <select name="employeeSize" defaultValue="" required>
                    <option value="" disabled>Select employee size</option>
                    {employeeSizes.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </label>

                <button type="submit">
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </fieldset>

              {submitMessage ? (
                <p className={`hero__demo-message hero__demo-message--${submitStatus}`}>
                  {submitMessage}
                </p>
              ) : null}
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
