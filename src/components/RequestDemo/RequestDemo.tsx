import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, MouseEvent as ReactMouseEvent } from 'react';
import {
  careerEnquirySuccessMessage,
  careerRoles,
  requestDemoSuccessMessage,
  serviceInterests,
  submitCareerLead,
  submitWebsiteLead,
  type SubmitStatus,
} from './requestDemoApi';
import './RequestDemo.scss';

type EnquiryMode = 'consultation' | 'career';

export default function RequestDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryMode, setEnquiryMode] = useState<EnquiryMode>('consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  const closePopup = useCallback(() => {
    if (isSubmitting) {
      return;
    }

    setIsOpen(false);
  }, [isSubmitting]);

  useEffect(() => {
    const openFromDemoTrigger = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('a[href="#demo"], [data-request-demo], [data-career-enquiry]');

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setEnquiryMode(trigger.hasAttribute('data-career-enquiry') ? 'career' : 'consultation');
      setSubmitStatus('idle');
      setSubmitMessage('');
      setIsOpen(true);
    };

    document.addEventListener('click', openFromDemoTrigger);

    return () => {
      document.removeEventListener('click', openFromDemoTrigger);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, isSubmitting, closePopup]);

  const handleOverlayClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      if (enquiryMode === 'career') {
        await submitCareerLead(form);
      } else {
        await submitWebsiteLead(form);
      }
      form.reset();
      setSubmitStatus('success');
      setSubmitMessage(
        enquiryMode === 'career'
          ? careerEnquirySuccessMessage
          : requestDemoSuccessMessage,
      );
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="request-demo" role="presentation" onMouseDown={handleOverlayClick}>
      <div
        className="request-demo__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-demo-title"
        data-enquiry-mode={enquiryMode}
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          className="request-demo__close"
          type="button"
          aria-label="Close request demo popup"
          onClick={closePopup}
        >
          X
        </button>

        <div className="request-demo__content">
          <div className="request-demo__intro">
            <span className="request-demo__eyebrow">
              {enquiryMode === 'career' ? 'Career Enquiry' : 'Service Consultation'}
            </span>
            <h2 id="request-demo-title">
              {enquiryMode === 'career'
                ? 'Apply for an internship role at Jervix.'
                : 'Tell us what you want to build or grow.'}
            </h2>
            <p>
              {enquiryMode === 'career'
                ? 'Share your preferred role, skills, portfolio or resume link, and availability. Our team will review your profile for the current internship openings.'
                : 'Share your requirement and our team will help you choose the right approach for web, marketing, blockchain, mobile app, AI, or SaaS development.'}
            </p>

            <div className="request-demo__highlights" aria-label="Demo highlights">
              {enquiryMode === 'career' ? (
                <>
                  <span>Internship role enquiry</span>
                  <span>Profile review</span>
                  <span>Next-step coordination</span>
                </>
              ) : (
                <>
                  <span>Service-fit consultation</span>
                  <span>Scope and estimate guidance</span>
                  <span>Clear next-step planning</span>
                </>
              )}
            </div>
          </div>

          <form className="request-demo__form" onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting}>
              {enquiryMode === 'career' ? (
                <>
                  <label>
                    Applying for
                    <select name="role" defaultValue="" required>
                      <option value="" disabled>
                        Select an internship role
                      </option>
                      {careerRoles.map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Your name
                    <input type="text" name="name" placeholder="Your full name" required />
                  </label>

                  <label>
                    Email
                    <input type="email" name="email" placeholder="you@email.com" required />
                  </label>

                  <label>
                    Phone
                    <span className="request-demo__phone-field">
                      <span className="request-demo__phone-prefix">+91</span>
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

                  <label>
                    Current status
                    <input
                      type="text"
                      name="currentStatus"
                      placeholder="Student, fresher, final year, etc."
                      required
                    />
                  </label>

                  <label>
                    Resume / portfolio link
                    <input
                      type="url"
                      name="portfolio"
                      placeholder="https://drive.google.com/..."
                    />
                  </label>

                  <label>
                    Skills / tools
                    <textarea
                      name="skills"
                      placeholder="Share your key skills, tools, projects, or technologies you have worked with."
                      rows={3}
                      required
                    />
                  </label>

                  <label>
                    Message
                    <textarea
                      name="message"
                      placeholder="Tell us why you are interested in this internship and your availability."
                      rows={3}
                      required
                    />
                  </label>
                </>
              ) : (
                <>
                  <label>
                    Organization name
                    <input type="text" name="organizationName" placeholder="Your organization" required />
                  </label>

                  <label>
                    Your name
                    <input type="text" name="name" placeholder="Your full name" required />
                  </label>

                  <label>
                    Email
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </label>

                  <label>
                    Phone
                    <span className="request-demo__phone-field">
                      <span className="request-demo__phone-prefix">+91</span>
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

                  <label>
                    Service you need
                    <select name="serviceInterest" defaultValue="" required>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceInterests.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Project requirement
                    <textarea
                      name="projectBrief"
                      placeholder="Tell us about your goal, current challenge, or the solution you want to build."
                      rows={4}
                      required
                    />
                  </label>
                </>
              )}

              <button className="request-demo__submit" type="submit">
                {isSubmitting
                  ? 'Submitting...'
                  : enquiryMode === 'career'
                    ? 'Submit Career Enquiry'
                    : 'Request Consultation'}
              </button>
            </fieldset>

            {submitMessage ? (
              <p className={`request-demo__message request-demo__message--${submitStatus}`}>
                {submitMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
