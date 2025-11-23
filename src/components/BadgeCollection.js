import React from 'react';
import '../styles/Gamification.css';
import { defaultGamification } from '../data/playerData';

const BadgeCollection = ({ player }) => {
  const gamification = player.gamification || defaultGamification;
  const { badges = [] } = gamification;

  const getBadgeClass = (type) => {
    switch(type) {
      case 'common': return 'badge-common';
      case 'rare': return 'badge-rare';
      case 'epic': return 'badge-epic';
      case 'legendary': return 'badge-legendary';
      case 'mythic': return 'badge-mythic';
      default: return 'badge-common';
    }
  };

  return (
    <div className="badge-collection-panel premium-card">
      <div className="badge-header">
        <h2 className="badge-title">Badges & Achievements</h2>
        <div className="badge-count">
          {badges.filter(b => b.unlocked).length}/{badges.length} Unlocked
        </div>
      </div>

      <div className="badges-grid">
        {badges.length > 0 ? (
          badges.map((badge) => (
            <div 
              key={badge.id} 
              className={`badge-card ${getBadgeClass(badge.type)} ${!badge.unlocked ? 'locked' : ''}`}
            >
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-content">
                <h4 className="badge-name">{badge.name}</h4>
                <p className="badge-description">{badge.description}</p>
                <span className="badge-type">{badge.type.toUpperCase()}</span>
              </div>
              {!badge.unlocked && <div className="badge-lock">🔒</div>}
            </div>
          ))
        ) : (
          <div className="no-badges">
            <span>No badges earned yet</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCollection;