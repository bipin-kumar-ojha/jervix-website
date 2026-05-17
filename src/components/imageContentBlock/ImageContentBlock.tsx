import "./ImageContentBlock.scss";

const imageSrc =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";

const smileys = [
  { className: "image-content__smiley image-content__smiley--blue", label: ":)" },
  { className: "image-content__smiley image-content__smiley--red-one", label: ":)" },
  { className: "image-content__smiley image-content__smiley--green-one", label: ":)" },
  { className: "image-content__smiley image-content__smiley--red-two", label: ":)" },
  { className: "image-content__smiley image-content__smiley--green-two", label: ":)" },
  { className: "image-content__smiley image-content__smiley--gold", label: ":)" },
];

const ImageContentBlock = () => {
  return (
    <section className="image-content" aria-labelledby="image-content-title">
      <div className="image-content__container">
        <div className="image-content__copy">
          <h2 id="image-content-title" className="image-content__title">
            For ambitious teams ready to build better workplaces
          </h2>
          <strong>Be the champion of change.</strong>
          <p className="image-content__text">
            Switch to smarter work management for your next growth chapter.
          </p>
          <a href="#demo" className="image-content__button">
            Talk to Us Today!
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="image-content__visual" aria-hidden="true">
          <div className="image-content__cloud image-content__cloud--top">
            <span />
            <span />
            <span />
          </div>
          <div className="image-content__cloud image-content__cloud--right">
            <span />
            <span />
            <span />
          </div>

          <div className="image-content__arrow" />

          <div className="image-content__ring">
            <span className="image-content__dot image-content__dot--left" />
            <span className="image-content__dot image-content__dot--right" />
            <span className="image-content__curve image-content__curve--left" />
            <span className="image-content__curve image-content__curve--right" />
            <img src={imageSrc} alt="" />
          </div>

          {smileys.map((item) => (
            <span className={item.className} key={item.className}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContentBlock;
