import './ProductView.scss';

const productImage = '/assets/jervixOne.png';

const productLabels = [
  { className: 'product-view__label product-view__label--teams', text: 'Teams' },
  { className: 'product-view__label product-view__label--roles', text: 'Roles' },
  { className: 'product-view__label product-view__label--tasks', text: 'Tasks' },
  { className: 'product-view__label product-view__label--budget', text: 'Budget' },
  { className: 'product-view__label product-view__label--reports', text: 'Reports' },
];

const ProductView = () => {
  return (
    <section className="product-view" aria-labelledby="product-view-title">
      <div className="product-view__container">
        <div className="product-view__copy">
          <span className="product-view__badge">Our Product</span>
          <h2 id="product-view-title">For teams ready to run work with clarity</h2>
          <strong>Meet Jervix One.</strong>
          <p>Bring structure, projects, access, budgets, and performance into one clean workspace.</p>

          <a href="#demo" className="product-view__button" data-request-demo>
            Request Demo
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="product-view__visual">
          <div className="product-view__cloud product-view__cloud--top">
            <span />
            <span />
            <span />
          </div>
          <div className="product-view__cloud product-view__cloud--right">
            <span />
            <span />
            <span />
          </div>

          <div className="product-view__arrow" />

          <div className="product-view__ring">
            <span className="product-view__dot product-view__dot--left" />
            <span className="product-view__dot product-view__dot--right" />
            <span className="product-view__curve product-view__curve--left" />
            <span className="product-view__curve product-view__curve--right" />
            <div className="product-view__logo-wrap">
              <img src={productImage} alt="Jervix One" />
            </div>
          </div>

          {productLabels.map((label) => (
            <span className={label.className} key={label.text}>
              {label.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
