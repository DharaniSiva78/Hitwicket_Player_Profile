import React from 'react';
import '../styles/PlayerStats.css';

const Header = ({ player }) => {
  return (
    <header className="player-header premium-header">
      <div className="header-content">
        <div className="player-image-section">
          <div className="image-container premium-glow">
            <img src={player.image} alt={player.name} className="player-image" />
            
          </div>
        </div>
        
        <div className="player-info-section">
          <h1 className="player-name premium-name">
            <span className="name-text">{player.name}</span>
            <span className="name-glow"></span>
          </h1>
          
          <div className="player-tags premium-tags">
            <span className="player-role tag-premium">
              <span className="tag-icon">🎯</span>
              {player.role}
            </span>
            <span className="player-team tag-premium">
              <span className="tag-icon">🏆</span>
              {player.team}
            </span>
            <span className="player-nationality tag-premium">
              <span className="tag-icon">🌍</span>
              {player.nationality}
            </span>
          </div>
          
          <div className="player-bio premium-bio">
            <p>{player.bio}</p>
          </div>
        </div>
        
        <div className="rating-section">
          <div className="rating-display premium-rating">
            <div className="rating-circle">
              <span className="rating-value">{player.overallRating}</span>
              <span className="rating-label">RATING</span>
            </div>
            <div className="rating-glow"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;