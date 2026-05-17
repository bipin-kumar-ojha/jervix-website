import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Success.scss';

interface Testimonial {
  id: number;
  category: string;
  rating: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  metric?: string;
  metricLabel?: string;
}

const Success: React.FC = () => {
  const mainRef = useRef<Slider>(null);
  const thumbRef = useRef<Slider>(null);
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      category: 'Technology',
      rating: 5,
      quote:
        'Jervix helped us create departments, teams, users, and roles quickly. Our project task ownership is now much clearer.',
      name: 'Sarah Mitchell',
      title: 'Operations Director',
      company: 'TechCorp Global',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      metric: '40%',
      metricLabel: 'Faster Setup',
    },
    {
      id: 2,
      category: 'Finance',
      rating: 5,
      quote:
        'The role and project management flow gives our managers clear visibility into tasks, budgets, and employee performance.',
      name: 'Michael Chen',
      title: 'Project Head',
      company: 'FinanceSecure Inc',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      metric: '60%',
      metricLabel: 'Better Visibility',
    },
    {
      id: 3,
      category: 'Healthcare',
      rating: 5,
      quote:
        'We can assign employee tasks, review progress, and track project budgets from one organized workspace.',
      name: 'Jennifer Rodriguez',
      title: 'Business Manager',
      company: 'HealthTech Solutions',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      metric: '80%',
      metricLabel: 'Task Clarity',
    },
  ];

  const mainSettings = {
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 700,
  infinite: true,
  pauseOnHover: true,
  cssEase: 'ease-in-out'
};

  const thumbSettings = {
  arrows: false,
  dots: false,
  vertical: true,
  slidesToShow: 3,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 700,
  infinite: true,
  pauseOnHover: true,
  cssEase: 'ease-in-out'
};

  return (
    <section className="success">
      <div className="success__header">
        <span className="success__badge">Customer Success Stories</span>
        <h2>Trusted by Operations Teams</h2>
        <p>See how organizations use Jervix to manage structure, projects, tasks, budgets, and performance</p>
      </div>

      <div className="success__grid">
        {/* MAIN SLIDER */}
        <Slider ref={mainRef} {...mainSettings} className="success__main">
          {testimonials.map((t) => (
            <div key={t.id}>
              <div className="success__card">
                <span className="success__category">{t.category}</span>

                <div className="success__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="success__quote">“{t.quote}”</p>

                <div className="success__footer">
                  <div className="success__user">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.title}</span>
                      <span>{t.company}</span>
                    </div>
                  </div>

                  {t.metric && (
                    <div className="success__metric">
                      <strong>{t.metric}</strong>
                      <span>{t.metricLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* THUMB SLIDER */}
        <Slider ref={thumbRef} {...thumbSettings} className="success__thumbs">
          {testimonials.map((t, i) => (
            <div key={t.id}>
              <div className={`success__thumb ${i === active ? 'active' : ''}`}>
                <div className="success__thumb-header">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.company}</span>
                  </div>
                </div>
                <p>{t.quote.slice(0, 70)}…</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="success__dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === active ? 'active' : ''}
            onClick={() => {
              setActive(i);
              mainRef.current?.slickGoTo(i);
              thumbRef.current?.slickGoTo(i);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Success;
