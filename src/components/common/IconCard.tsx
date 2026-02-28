import React from 'react';
import './IconCard.scss';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description, actionLabel, onActionClick }) => {
  return (
    <div className="icon-card">
      <div className="icon-card__icon">{icon}</div>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__desc">{description}</p>
      {actionLabel && (
        <button className="icon-card__action" onClick={onActionClick}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default IconCard;
