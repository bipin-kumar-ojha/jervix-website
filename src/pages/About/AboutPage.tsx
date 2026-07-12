import SeoHead from "../../components/SEO/SeoHead";
import "./AboutPage.scss";
import "./AboutPageEnhancements.scss";

const journey = [
  { icon: "/assets/workflow-icons/discovery-color.svg", title: "Listen to your idea", text: "We begin by understanding your vision, business context, users and expectations without rushing to prescribe a solution." },
  { icon: "/assets/workflow-icons/strategy-color.svg", title: "Analyse the requirement", text: "Our team studies the scope, workflows, priorities and technical needs to turn the idea into a clear and realistic execution plan." },
  { icon: "/assets/mega-icons/ai-color.svg", title: "Define the impact", text: "We connect each important feature to the value it should create for your customers, team and long-term business goals." },
  { icon: "/assets/workflow-icons/build-color.svg", title: "Execute with visibility", text: "Development moves forward through planned modules, daily progress reporting and open communication throughout the engagement." },
  { icon: "/assets/mega-icons/web-color.svg", title: "Showcase and improve", text: "At every meaningful module milestone, we demonstrate the work, invite your feedback and make aligned improvements before moving ahead." },
  { icon: "/assets/workflow-icons/launch-color.svg", title: "Deliver with confidence", text: "Proactive planning, regular reviews and early issue resolution help us protect timelines and deliver a result you are comfortable adopting." },
];

const promises = [
  { icon: "/assets/workflow-icons/discovery-color.svg", title: "Daily project visibility", text: "You receive a concise daily status report covering completed work, current activity and the next planned actions." },
  { icon: "/assets/workflow-icons/strategy-color.svg", title: "No surprise delivery", text: "We communicate dependencies and decisions early, helping prevent avoidable escalations and last-minute uncertainty." },
  { icon: "/assets/workflow-icons/build-color.svg", title: "Feedback built into execution", text: "Your feedback is gathered between modules—not saved until the end—so the final solution remains aligned with your expectations." },
  { icon: "/assets/workflow-icons/launch-color.svg", title: "Respect for your timeline", text: "We plan responsibly, track progress closely and focus on completing agreed work within the committed delivery schedule." },
];

export default function AboutPage() {
  return (
    <main className="about-view">
      <SeoHead
        title="About Jervix Technologies | From Idea to Impact"
        description="Jervix Technologies turns client ideas into meaningful digital impact through thoughtful analysis, transparent execution, daily reporting and on-time delivery."
        canonicalUrl="https://jervix.com/about"
        ogImage="/assets/jervix-who-we-are.png"
      />

      <section className="about-hero">
        <div className="about-shell about-hero__grid">
          <div className="about-hero__copy">
            <span className="about-kicker">About Jervix</span>
            <h1>From idea<br />to impact.</h1>
            <p>We help clients turn a promising idea into a useful product or project through careful analysis, transparent execution and dependable delivery.</p>
            <div className="about-hero__actions">
              <a href="#our-approach">How we work</a>
              <a href="#demo" data-request-demo>Share your idea</a>
            </div>
          </div>
          <div className="about-hero__image">
            <img src="/assets/jervix-who-we-are.png" alt="Jervix team discussing a client's product idea" />
            <div><strong>Idea → Execution → Impact</strong><span>A clear journey, shared with you.</span></div>
          </div>
        </div>
      </section>

      <section className="about-belief about-shell">
        <span className="about-kicker">Our motto</span>
        <div className="about-belief__grid">
          <h2>A good idea creates greater value when execution is thoughtful, visible and aligned.</h2>
          <div>
            <p>We see every project as a shared responsibility. You bring the vision and knowledge of your business; we bring analysis, technology and structured execution.</p>
            <p>By working closely together from the beginning, we can protect the purpose of your idea while shaping it into an outcome that creates real impact.</p>
          </div>
        </div>
      </section>

      <section className="about-journey" id="our-approach">
        <div className="about-shell">
          <header className="about-heading">
            <span className="about-kicker">Our way of working</span>
            <h2>Your journey from idea to impact</h2>
            <p>A collaborative delivery process designed to keep decisions clear, progress visible and expectations aligned.</p>
          </header>
          <div className="about-journey__grid">
            {journey.map((item) => (
              <article key={item.title}>
                <span className="about-card-icon"><img src={item.icon} alt="" /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-visibility">
        <div className="about-shell about-visibility__grid">
          <div className="about-visibility__image"><img src="/assets/jervix-execution-delivery.png" alt="Jervix team reviewing project execution and delivery" /></div>
          <div className="about-visibility__copy">
            <span className="about-kicker">Transparent by design</span>
            <h2>You should always know where your project stands.</h2>
            <p>Trust grows when progress is visible. That is why communication is part of our delivery process—not something reserved for when a problem appears.</p>
            <ul>
              <li><strong>Daily status reports</strong><span>Clear updates on progress, priorities and next steps.</span></li>
              <li><strong>Module demonstrations</strong><span>Working showcases at meaningful completion points.</span></li>
              <li><strong>Timely feedback cycles</strong><span>Your input is reviewed and included while it can create the most value.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-promises about-shell">
        <header className="about-heading">
          <span className="about-kicker">The experience we aim to provide</span>
          <h2>Dependable execution without unnecessary uncertainty</h2>
        </header>
        <div className="about-promises__grid">
          {promises.map((item) => <article key={item.title}><span className="about-card-icon"><img src={item.icon} alt="" /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="about-outcome">
        <div className="about-shell about-outcome__grid">
          <div><span className="about-kicker">Our measure of success</span><h2>On-time delivery. A solution you trust. An impact you can see.</h2></div>
          <p>Our goal is not simply to complete a list of features. It is to deliver an outcome that reflects your idea, supports your business and gives you confidence in the work we have built together.</p>
        </div>
      </section>

      <section className="about-cta about-shell">
        <div><span className="about-kicker">Have an idea?</span><h2>Let&apos;s explore the impact it can create.</h2><p>Share your vision with us, and we will help you understand the practical path from requirement to execution.</p></div>
        <a href="#demo" data-request-demo>Start a conversation</a>
      </section>
    </main>
  );
}
