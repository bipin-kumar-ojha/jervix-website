import React from 'react';
import './ModernCard.scss';

interface ModernCardProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const ModernCard: React.FC<ModernCardProps> = ({ imageUrl, title, subtitle, description, ctaLabel, onCtaClick }) => {
  return (
    <div className="modern-card">
      {imageUrl && (
        <div className="modern-card__image" style={{ backgroundImage: `url(${imageUrl})` }} />
      )}
      <div className="modern-card__body">
        <h3 className="modern-card__title">{title}</h3>
        {subtitle && <div className="modern-card__subtitle">{subtitle}</div>}
        <p className="modern-card__desc">{description}</p>
        {ctaLabel && (
          <button className="modern-card__cta" onClick={onCtaClick}>{ctaLabel}</button>
        )}
      </div>
    </div>
  );
};

export default ModernCard;
