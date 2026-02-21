import React from "react";
import "./subscription.scss";

const Subscription = () => (
  <section className="subscription">
    <div className="subscription__container">
      <h2 className="subscription__title">Ready to Secure Your<br />Enterprise?</h2>
      <p className="subscription__desc">
        Join 500+ organizations that trust Jervix to protect their critical assets. Start your free trial today—no credit card required.
      </p>
      <div className="subscription__actions">
        <button className="subscription__btn subscription__btn--primary">Start Free Trial <span className="subscription__btn-arrow">→</span></button>
        <button className="subscription__btn subscription__btn--secondary">Schedule Demo</button>
      </div>
      <div className="subscription__features">
        <div className="subscription__feature"><span className="subscription__check">✔</span> 14-day free trial</div>
        <div className="subscription__feature"><span className="subscription__check">✔</span> No credit card needed</div>
        <div className="subscription__feature"><span className="subscription__check">✔</span> Cancel anytime</div>
      </div>
    </div>
  </section>
);

export default Subscription;
