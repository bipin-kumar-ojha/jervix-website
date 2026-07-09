import { clientSolutions } from "./homeSectionData";

export default function ClientStrip() {
  return (
    <section className="client-strip page-container" aria-label="Client solutions">
      {clientSolutions.map(({ icon, label }) => (
        <a href="#services" key={label}>
          <span className="client-strip__icon">
            <img src={icon} alt="" />
          </span>
          {label}
        </a>
      ))}
    </section>
  );
}
