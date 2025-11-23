import React from 'react';
import '../styles/AchievementCards.css';

const AchievementCards = ({ player }) => {
  const { achievements = [] } = player;

  // Group achievements by year
  const achievementsByYear = achievements.reduce((acc, achievement) => {
    const year = achievement.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {});

  // Get sorted years
  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => b - a);

  const getAchievementIcon = (type) => {
    const icons = {
      legendary: '🏆',
      epic: '⭐',
      rare: '🎯',
      common: '📜'
    };
    return icons[type] || '🏆';
  };

  const getTypeColor = (type) => {
    const colors = {
      legendary: '#FFD93D',
      epic: '#9B59B6', 
      rare: '#3498DB',
      common: '#95A5A6'
    };
    return colors[type] || '#95A5A6';
  };

  const getTypeLabel = (type) => {
    const labels = {
      legendary: 'Legendary',
      epic: 'Epic',
      rare: 'Rare',
      common: 'Common'
    };
    return labels[type] || 'Achievement';
  };

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <div className="header-content">
          <h2 className="achievements-title">Achievements & Awards</h2>
          <div className="achievements-stats">
            <div className="stat">
              <span className="stat-number">{achievements.length}</span>
              <span className="stat-label">Total Awards</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {achievements.filter(a => a.type === 'legendary').length}
              </span>
              <span className="stat-label">Legendary</span>
            </div>
          </div>
        </div>
        <div className="trophy-decoration">🏆</div>
      </div>

      <div className="achievements-timeline">
        {sortedYears.map((year) => (
          <div key={year} className="year-section">
            <div className="year-header">
              <div className="year-indicator">
                <span className="year-text">{year}</span>
                <div className="year-line"></div>
              </div>
              <div className="year-count">
                {achievementsByYear[year].length} Achievement{achievementsByYear[year].length > 1 ? 's' : ''}
              </div>
            </div>

            <div className="achievements-grid">
              {achievementsByYear[year].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`achievement-card ${achievement.type}`}
                  style={{ '--accent-color': getTypeColor(achievement.type) }}
                >
                  <div className="achievement-glow"></div>
                  
                  <div className="achievement-header">
                    <div className="achievement-icon">
                      {getAchievementIcon(achievement.type)}
                    </div>
                    <div className="achievement-meta">
                      <span className="achievement-year">{achievement.year}</span>
                      <span 
                        className="achievement-type"
                        style={{ color: getTypeColor(achievement.type) }}
                      >
                        {getTypeLabel(achievement.type)}
                      </span>
                    </div>
                  </div>

                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="achievement-footer">
                    <div className="achievement-badge">
                      <span className="badge-icon">✨</span>
                      <span className="badge-text">Award</span>
                    </div>
                    <div className="achievement-decoration">
                      <div className="decoration-dot"></div>
                      <div className="decoration-dot"></div>
                      <div className="decoration-dot"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Summary */}
      <div className="achievement-summary">
        <div className="summary-card">
          <div className="summary-icon">🎖️</div>
          <div className="summary-content">
            <h4>Career Highlights</h4>
            <p>
              {achievements.length} major achievements across {sortedYears.length} years of professional cricket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCards;