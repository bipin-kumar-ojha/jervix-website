import "./UnderDevelopmentPopup.scss";

const UnderDevelopmentPopup = () => {


  return (
    <div className="under-dev-popup__backdrop">
      <div className="under-dev-popup">
        <div className="under-dev-popup__icon under-dev-popup__icon--excite">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#E0F2FE"/>
            <path d="M32 18V36" stroke="#0f66ab" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="32" cy="46" r="2.5" fill="#0f66ab"/>
            <path d="M22 28C22 23.5817 25.5817 20 30 20H34C38.4183 20 42 23.5817 42 28" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2>Something Big is Coming!</h2>
        <p className="under-dev-popup__main-msg">
          🚀 We’re building <span className="under-dev-popup__brand">Jervix</span> — a structured platform for organization setup, project task management, budgets, and performance tracking.<br/>
          <span className="under-dev-popup__highlight">Launching soon with focused tools designed to organize your business operations.</span>
        </p>
        <ul className="under-dev-popup__features">
          <li>Departments, designations, and teams</li>
          <li>User and role management</li>
          <li>Project task assignment</li>
          <li>Budget and performance tracking</li>
        </ul>
        <p className="under-dev-popup__sub-msg">Stay tuned and get ready to manage your organization from one clean workspace.<br/>Thank you for your excitement and support!</p>
      </div>
    </div>
  );
};

export default UnderDevelopmentPopup;
