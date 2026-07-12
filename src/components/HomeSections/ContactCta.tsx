export default function ContactCta() {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta__inner page-container">
        <div className="contact-cta__content">
          <p className="eyebrow">Let&apos;s Build</p>
          <h2>Ready to turn your next digital idea into a real product?</h2>
          <p>
            Share your goals with Jervix. We&apos;ll map the right strategy, technology stack, launch
            plan, and growth path for your AI, custom software, web application, mobile app, SaaS,
            cloud, or enterprise software project.
          </p>
          <div className="contact-cta__actions">
            <a href="#demo" className="primary-action" data-request-demo>
              Request Consultation
            </a>
            <a href="mailto:info@jervix.com" className="secondary-action">
              Email Us
            </a>
          </div>
        </div>

        <div className="contact-cta__panel" aria-label="Project consultation highlights">
          <div className="contact-cta__metric">
            <strong>48h</strong>
            <span>Project roadmap response</span>
          </div>
          <div className="contact-cta__metric">
            <strong>6+</strong>
            <span>Digital service capabilities</span>
          </div>
          <div className="contact-cta__chips" aria-label="Services we can discuss">
            <span>Web</span>
            <span>Mobile</span>
            <span>AI</span>
            <span>SaaS</span>
            <span>Cloud</span>
            <span>Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
