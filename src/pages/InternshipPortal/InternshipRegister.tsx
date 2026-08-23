import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SeoHead from '../../components/SEO/SeoHead';
import { makeCandidateId, PROFILE_KEY, type CandidateProfile } from './types';
import './InternshipPortal.scss';

const domains = ['Web Development', 'App Development', 'UI/UX Design', 'Artificial Intelligence', 'Digital Marketing', 'Human Resources'];

export default function InternshipRegister() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const data = new FormData(event.currentTarget);
    const profile: CandidateProfile = {
      candidateId: makeCandidateId(), fullName: String(data.get('fullName')), email: String(data.get('email')),
      phone: String(data.get('phone')), dateOfBirth: String(data.get('dateOfBirth')), college: String(data.get('college')),
      course: String(data.get('course')), graduationYear: String(data.get('graduationYear')), domain: String(data.get('domain')),
      duration: String(data.get('duration')), startDate: String(data.get('startDate')), address: String(data.get('address')),
      status: 'Registered', paymentStatus: 'Pending', registeredAt: new Date().toISOString(),
    };
    window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    window.setTimeout(() => navigate('/candidate/dashboard'), 500);
  };

  return <main className="portal registration-page">
    <SeoHead title="Internship Registration | Jervix Technologies" description="Register for the Jervix internship program." canonicalUrl="https://jervix.com/internship/register" ogImage="/assets/jervix-internship-training-hero.png" />
    <section className="registration-hero">
      <a href="/careers/internship" className="portal-back">← &nbsp; Internship program</a>
      <span className="portal-eyebrow">Jervix Internship Program</span>
      <h1>Take the first step toward your career.</h1>
      <p>Complete your application and get instant access to your candidate dashboard.</p>
      <div className="registration-steps" aria-label="Registration progress">
        <span className="is-current"><b>1</b> Application</span><i /><span><b>2</b> Fee payment</span><i /><span><b>3</b> Documents</span>
      </div>
    </section>
    <section className="registration-wrap">
      <div className="registration-heading"><span>01</span><div><h2>Candidate registration</h2><p>Please enter your details exactly as they should appear on your internship documents.</p></div></div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <fieldset><legend>Personal information</legend><div className="form-grid">
          <label className="wide">Full name<input name="fullName" placeholder="Enter your full name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Phone number<input name="phone" type="tel" placeholder="+91 98765 43210" required /></label>
          <label>Date of birth<input name="dateOfBirth" type="date" required /></label>
          <label>Current address<input name="address" placeholder="City, State" required /></label>
        </div></fieldset>
        <fieldset><legend>Education details</legend><div className="form-grid">
          <label className="wide">College / University<input name="college" placeholder="Enter institution name" required /></label>
          <label>Course / Degree<input name="course" placeholder="e.g. B.Tech Computer Science" required /></label>
          <label>Graduation year<select name="graduationYear" defaultValue="" required><option value="" disabled>Select year</option>{[2026,2027,2028,2029,2030].map(y=><option key={y}>{y}</option>)}</select></label>
        </div></fieldset>
        <fieldset><legend>Internship preference</legend><div className="form-grid">
          <label className="wide">Preferred domain<select name="domain" defaultValue="" required><option value="" disabled>Select internship domain</option>{domains.map(d=><option key={d}>{d}</option>)}</select></label>
          <label>Duration<select name="duration" defaultValue="" required><option value="" disabled>Select duration</option><option>1 Month</option><option>2 Months</option><option>3 Months</option><option>6 Months</option></select></label>
          <label>Preferred start date<input name="startDate" type="date" required /></label>
        </div></fieldset>
        <label className="consent"><input type="checkbox" required /><span>I confirm that the information provided is accurate and agree to the <a href="#terms">program terms and privacy policy</a>.</span></label>
        <button className="submit-registration" type="submit" disabled={submitting}>{submitting ? 'Creating your profile…' : 'Submit & create candidate profile'}<span>→</span></button>
        <p className="secure-note">⌾ Your information is securely handled and used only for internship enrollment.</p>
      </form>
    </section>
  </main>;
}
