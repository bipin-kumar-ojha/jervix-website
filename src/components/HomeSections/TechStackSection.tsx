import { useState } from "react";
import { techStackGroups } from "./homeSectionData";

export default function TechStackSection() {
  const [activeStack, setActiveStack] = useState(techStackGroups[0]);

  return (
    <section className="section page-container tech-stack-section" id="tech-stack">
      <div className="section__intro tech-stack-section__intro">
        <p className="eyebrow">Technology Stack</p>
        <h2>Tools and platforms we use to build, market, and scale digital products.</h2>
        <p>
          We choose technology based on your product goals, performance needs, integrations, and
          long-term maintainability.
        </p>
      </div>

      <div className="tech-stack-tabs">
        <div className="tech-stack-tabs__nav" aria-label="Technology stack categories">
          {techStackGroups.map((group) => {
            const isActive = group.title === activeStack.title;

            return (
              <button
                aria-pressed={isActive}
                className={`tech-stack-tab${isActive ? " tech-stack-tab--active" : ""}`}
                key={group.title}
                onClick={() => setActiveStack(group)}
                type="button"
              >
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        <article className="tech-stack-panel">
          <div className="tech-stack-panel__summary">
            <span>{activeStack.tools.length} core tools</span>
            <h3>{activeStack.title}</h3>
            <p>{activeStack.description}</p>
          </div>

          <div className="tech-stack-panel__tools">
            {activeStack.tools.map((tool) => (
              <span className="tech-stack-tool" key={tool.name}>
                <span className="tech-stack-tool__icon">
                  <img src={tool.icon} alt={`${tool.name} logo`} loading="lazy" />
                </span>
                <strong>{tool.name}</strong>
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
