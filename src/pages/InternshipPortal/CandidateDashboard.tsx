import { useMemo, useState } from 'react';
import { PROFILE_KEY, type CandidateProfile } from './types';
import './InternshipPortal.scss';

const Icon = ({ children }: { children: string }) => <span className="dash-icon" aria-hidden="true">{children}</span>;

export default function CandidateDashboard() {
  const [active, setActive] = useState('Overview');
  const profile = useMemo<CandidateProfile | null>(() => {
    try { return JSON.parse(window.localStorage.getItem(PROFILE_KEY) || 'null'); } catch { return null; }
  }, []);

  if (!profile) return <main className="portal empty-dashboard"><img src="/assets/logo.png" alt="Jervix" /><h1>No candidate profile found</h1><p>Complete internship registration to create your candidate ID and dashboard.</p><a href="/internship/register">Register for internship →</a></main>;

  const initials = profile.fullName.split(' ').map(part => part[0]).join('').slice(0,2).toUpperCase();
  const pay = () => window.alert('Payment gateway will open here after backend integration.');
  const download = (name: string) => window.alert(`${name} will be available after training fee payment and backend integration.`);

  return <div className="candidate-app portal">
    <aside className="candidate-sidebar">
      <a href="/" className="candidate-logo"><img src="/assets/logo-white.png" alt="Jervix" /></a>
      <nav>{['Overview','My Profile','Training Fee','Documents'].map((item,index)=><button key={item} className={active===item?'is-active':''} onClick={()=>setActive(item)}><Icon>{['⌂','♙','₹','□'][index]}</Icon>{item}{item==='Training Fee'&&<small>Due</small>}</button>)}</nav>
      <div className="sidebar-support"><Icon>?</Icon><div><strong>Need help?</strong><a href="mailto:careers@jervix.com">Contact support</a></div></div>
      <a className="sidebar-website" href="/careers/internship">← Back to website</a>
    </aside>
    <main className="candidate-main">
      <header className="candidate-topbar"><div><span className="mobile-mark">J</span><h1>Candidate Portal</h1></div><div className="topbar-user"><span className="avatar avatar--small">{initials}</span><span><b>{profile.fullName}</b><small>{profile.candidateId}</small></span></div></header>
      <div className="candidate-content">
        <section className="dashboard-welcome"><div><span className="portal-eyebrow">Welcome to Jervix</span><h2>Hello, {profile.fullName.split(' ')[0]} <span>👋</span></h2><p>Your internship registration is complete. Finish the next step to unlock your documents.</p></div><span className="status-pill">● Application registered</span></section>
        <section className="candidate-grid">
          <article className="profile-card dashboard-card">
            <div className="card-title"><div><span>Candidate profile</span><h3>Your information</h3></div><button onClick={()=>setActive('My Profile')}>View profile ↗</button></div>
            <div className="profile-identity"><span className="avatar">{initials}</span><div><h4>{profile.fullName}</h4><p>{profile.domain} Intern</p></div></div>
            <div className="candidate-id"><span>Candidate ID</span><strong>{profile.candidateId}</strong><button onClick={()=>navigator.clipboard?.writeText(profile.candidateId)}>Copy</button></div>
            <dl><div><dt>Email</dt><dd>{profile.email}</dd></div><div><dt>Phone</dt><dd>{profile.phone}</dd></div><div><dt>College</dt><dd>{profile.college}</dd></div><div><dt>Duration</dt><dd>{profile.duration}</dd></div></dl>
          </article>
          <article className="payment-card dashboard-card">
            <div className="card-title"><div><span>Next step</span><h3>Training fee</h3></div><span className="pending-pill">Payment pending</span></div>
            <div className="fee-illustration"><span>₹</span><div><small>Program training fee</small><strong>Amount shown at checkout</strong></div></div>
            <p>Complete the secure payment to confirm your enrollment and unlock your internship documents.</p>
            <ul><li>Secure online payment</li><li>Instant payment confirmation</li><li>Documents unlocked automatically</li></ul>
            <button className="pay-button" onClick={pay}>Proceed to secure payment <span>→</span></button>
            <small className="payment-provider">Protected payment · Gateway integration ready</small>
          </article>
        </section>
        <section className="documents-section"><div className="section-title"><div><span>After payment</span><h3>Your documents</h3></div><p>Available once your training fee is confirmed</p></div><div className="document-grid">
          <article><span className="document-icon">✉</span><div><h4>Welcome Letter</h4><p>Your official welcome and program onboarding details.</p><small>PDF document</small></div><button onClick={()=>download('Welcome Letter')} disabled>⌄</button><span className="locked">🔒 Complete payment to unlock</span></article>
          <article><span className="document-icon">▤</span><div><h4>Offer Letter</h4><p>Your internship offer with role, duration and joining date.</p><small>PDF document</small></div><button onClick={()=>download('Offer Letter')} disabled>⌄</button><span className="locked">🔒 Complete payment to unlock</span></article>
        </div></section>
      </div>
    </main>
  </div>;
}
