import { useRef, useState } from "react";
import SeoHead from "../../components/SEO/SeoHead";
import "./Internship.scss";

const headstartCards = [
  {
    image: "/assets/jervix-internship-training-hero.png",
    title: "Our research and innovation",
    text: "We believe in the power of collective knowledge.",
  },
  {
    image: "/assets/jervix-career-interns-hero.png",
    title: "Our inclusive workplace",
    text: "We believe in a world where everyone can be, belong and become.",
  },
  {
    image: "/assets/jervix-home-culture-trust-hero.png",
    title: "Our investment in innovation",
    text: "We believe in nurturing fresh talent and bold ideas.",
  },
  {
    image: "/assets/jervix-who-we-are.png",
    title: "Our learning culture",
    text: "We turn curiosity into practical software experience.",
  },
];

const whyJervix = [
  {
    label: "Impact",
    title: "Meaningful experience across every team",
    text: "Whether your strengths lie in working with people, building business relationships, connecting with customers or creating technology, you will contribute to practical work that supports real company goals.",
    image: "/assets/jervix-home-culture-trust-hero.png",
  },
  {
    label: "Development",
    title: "Develop skills for your chosen career",
    text: "Build professional capabilities through guided assignments, communication, research, collaboration and hands-on responsibilities aligned with the area in which you want to grow.",
    image: "/assets/jervix-internship-training-hero.png",
  },
  {
    label: "Support",
    title: "Guidance from experienced professionals",
    text: "Learn alongside team members from recruitment, sales, business growth, software and artificial intelligence who provide direction, practical feedback and support throughout your journey.",
    image: "/assets/jervix-career-interns-hero.png",
  },
  {
    label: "Progress",
    title: "A foundation for every career path",
    text: "Strengthen your confidence, communication, problem-solving and workplace readiness while gaining a clearer understanding of your abilities and the professional path you want to pursue.",
    image: "/assets/jervix-who-we-are.png",
  },
];

export default function Internship() {
  const [activeTab, setActiveTab] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const active = whyJervix[activeTab];

  const scrollCards = (direction: number) => {
    cardsRef.current?.scrollBy({ left: direction * 520, behavior: "smooth" });
  };

  return (
    <main className="internship-page">
      <SeoHead
        title="Build Your Career With Jervix Technologies"
        description="Begin your professional journey with practical experience, meaningful work and guidance from the team at Jervix Technologies."
        canonicalUrl="https://jervix.com/careers/internship"
        ogImage="/assets/jervix-internship-training-hero.png"
      />

      <section className="internship-hero" id="home">
        <video className="internship-hero__motion" poster="/assets/jervix-internship-career-video-still.jpg" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/assets/jervix-internship-career-hero.mp4" type="video/mp4" />
        </video>
        <span className="internship-hero__light internship-hero__light--one" aria-hidden="true" />
        <span className="internship-hero__light internship-hero__light--two" aria-hidden="true" />
        <div className="internship-hero__content">
          <span className="internship-hero__label">Careers</span>
          <span className="internship-hero__rule" aria-hidden="true" />
          <p className="section-kicker">Start your professional journey</p>
          <h1>Turn your potential into a career with impact</h1>
          <div className="internship-actions">
            <a className="primary-action" href="#demo" data-career-enquiry>Apply Now</a>
            <a className="secondary-action" href="#intern-with-jervix">View Program Details</a>
          </div>
        </div>
      </section>

      <section className="intern-intro" id="intern-with-jervix">
        <div className="intern-new-shell intern-intro__grid">
          <div className="intern-intro__copy">
            <span>Join us</span>
            <h2>Intern with Jervix</h2>
            <p>Jervix makes it possible for you to achieve your fullest potential. We nurture our talent and equip them to contribute to the creation of a better future. With exciting opportunities across a breadth of technologies and industries, we encourage you to take the initial steps toward a fulfilling career with us.</p>
          </div>
          <img src="/assets/jervix-intern-intro.png" alt="A Jervix software engineering intern in a modern office" />
        </div>
      </section>

      <section className="headstart-section">
        <div className="headstart-section__heading">
          <h2>Get a headstart with Jervix</h2>
          <div className="headstart-section__controls">
            <button type="button" onClick={() => scrollCards(-1)} aria-label="Previous cards">←</button>
            <button type="button" onClick={() => scrollCards(1)} aria-label="Next cards">→</button>
          </div>
        </div>
        <div className="headstart-cards" ref={cardsRef}>
          {headstartCards.map((card) => (
            <article className="headstart-card" key={card.title}>
              <img src={card.image} alt="" />
              <div className="headstart-card__shade" />
              <div className="headstart-card__copy">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="#why-jervix"><span>→</span> Read more</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-jervix" id="why-jervix">
        <div className="intern-new-shell">
          <h2>Why Jervix</h2>
          <div className="why-jervix__tabs" role="tablist" aria-label="Why Jervix topics">
            {whyJervix.map((item, index) => (
              <button className={index === activeTab ? "is-active" : ""} type="button" role="tab" aria-selected={index === activeTab} onClick={() => setActiveTab(index)} key={item.label}>{item.label}</button>
            ))}
          </div>
          <div className="why-jervix__content">
            <img src={active.image} alt="Jervix team collaborating in the workplace" />
            <div>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intern-future">
        <img src="/assets/jervix-career-interns-hero.png" alt="Jervix technology team working together" />
        <div className="intern-future__copy">
          <h2>Greater futures<br />through innovation</h2>
          <p>Watching the world of next-tech unfold? It&apos;s time to be part of it.</p>
          <a href="#demo" data-career-enquiry>Join us</a>
        </div>
      </section>
    </main>
  );
}
