import { workProcess } from "./homeSectionData";

export default function ProcessSection() {
  return (
    <section className="section page-container process-section" id="process">
      <div className="section__intro process-section__intro">
        <p className="eyebrow">Client-Friendly SDLC</p>
        <h2>A clear software development lifecycle that keeps your project predictable.</h2>
        <p>
          We follow every important SDLC phase with simple communication, milestone approvals, and
          quality checks, so you always know what is happening, what comes next, and how your idea is
          moving toward launch.
        </p>

        <div className="process-section__actions">
          <a className="primary-action" href="#contact" data-request-demo>
            Start With a Free Estimate
          </a>
          <a className="secondary-action" href="#services">
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="process-timeline">
        {workProcess.map((step, index) => (
          <article className="process-step" key={step.title}>
            <div className="process-step__top">
              <span className="process-step__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="process-step__icon">
                <img src={step.icon} alt="" />
              </span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <p className="process-section__message">
        From the first consultation to post-launch support, every SDLC phase is planned,
        documented, and communicated clearly, helping you stay confident about timeline, budget,
        quality, and final delivery.
      </p>
    </section>
  );
}
