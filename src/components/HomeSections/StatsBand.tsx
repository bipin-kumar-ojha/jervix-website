import { stats } from "./homeSectionData";

export default function StatsBand() {
  return (
    <section className="stats-band page-container" id="products" aria-label="Jervix highlights">
      {stats.map(([value, label]) => (
        <div className="stats-band__item" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
