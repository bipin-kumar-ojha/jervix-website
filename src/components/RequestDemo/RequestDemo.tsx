import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, MouseEvent as ReactMouseEvent } from 'react';
import {
  requestDemoSuccessMessage,
  serviceInterests,
  submitWebsiteLead,
  type SubmitStatus,
} from './requestDemoApi';
import './RequestDemo.scss';

export default function RequestDemo() {
  const [isOpen, setIsOpen] = useState(false);
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
      const trigger = target?.closest<HTMLElement>('a[href="#demo"], [data-request-demo]');

      if (!trigger) {
        return;
      }

      event.preventDefault();
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
      await submitWebsiteLead(form);
      form.reset();
      setSubmitStatus('success');
      setSubmitMessage(requestDemoSuccessMessage);
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
            <span className="request-demo__eyebrow">Service Consultation</span>
            <h2 id="request-demo-title">Tell us what you want to build or grow.</h2>
            <p>
              Share your requirement and our team will help you choose the right approach for web,
              marketing, blockchain, mobile app, AI, or SaaS development.
            </p>

            <div className="request-demo__highlights" aria-label="Demo highlights">
              <span>Service-fit consultation</span>
              <span>Scope and estimate guidance</span>
              <span>Clear next-step planning</span>
            </div>
          </div>

          <form className="request-demo__form" onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting}>
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

              <button className="request-demo__submit" type="submit">
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
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
