import '../layout/Header.scss';

const navLinks = ['Platform', 'Solutions', 'Customers', 'Resources', 'Pricing'];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" >
          <img src="/src/assets/logo.png" alt="" />
          </a>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((label) => (
              <li key={label} className="header__nav-item">
                <a href={`/${label.toLowerCase()}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="/signin" className="header__sign-in">
            Sign In
          </a>
          <button className="header__button header__button--primary">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
