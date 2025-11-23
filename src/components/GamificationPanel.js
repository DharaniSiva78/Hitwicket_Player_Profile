import React from 'react';
import '../styles/Gamification.css';
import { defaultGamification } from '../data/playerData';

const GamificationPanel = ({ player, activeFormat }) => {
  // Get format-specific gamification data
  const formatData = player.gamification?.formats?.[activeFormat] || defaultGamification;
  const { level, xp, xpToNextLevel, progress, abilities, mastery } = formatData;

  // Calculate recent performance stats for the active format
  const recentMatches = player.gamification?.recentPerformance?.filter(match => match.format === activeFormat) || [];
  const recentWins = recentMatches.filter(match => match.result === 'Won').length;
  const totalRecentRuns = recentMatches.reduce((total, match) => total + (match.batting?.runs || 0), 0);
  const averageRecentRuns = recentMatches.length > 0 ? Math.round(totalRecentRuns / recentMatches.length) : 0;
  
  // Get career stats for reference
  const careerRuns = player.stats?.[activeFormat]?.batting?.runs || 0;
  const careerWickets = player.stats?.[activeFormat]?.bowling?.wickets || 0;

  // Format colors for consistency
  const formatColors = {
    T20: '#FF6B6B',
    ODI: '#4ECDC4', 
    Test: '#45B7D1',
    IPL: '#FFD93D'
  };

  const currentColor = formatColors[activeFormat] || '#4ECDC4';

  return (
    <div className="gamification-panel premium-card">
      <div className="panel-header">
        <h2 className="panel-title">Player Progression</h2>
        <div className="format-mastery">
          <span className="mastery-badge" style={{ background: currentColor }}>
            {mastery}
          </span>
        </div>
        <div className="level-badge-large" style={{ '--level-color': currentColor }}>
          <span className="level-text">LEVEL</span>
          <span className="level-number">{level}</span>
        </div>
      </div>

      {/* Format Indicator */}
      <div className="format-indicator" style={{ borderColor: currentColor }}>
        <span className="format-name">{activeFormat} FORMAT</span>
        <span className="format-level">Level {level}</span>
      </div>

      {/* XP Progress Bar */}
      <div className="xp-section">
        <div className="xp-info">
          <span className="xp-current">{xp.toLocaleString()} XP</span>
          <span className="xp-next">Next: {xpToNextLevel.toLocaleString()} XP</span>
        </div>
        <div className="xp-bar">
          <div 
            className="xp-progress" 
            style={{ 
              width: `${(xp / xpToNextLevel) * 100}%`,
              background: `linear-gradient(90deg, ${currentColor}, #ffffff)`
            }}
          >
            <div className="xp-glow"></div>
          </div>
        </div>
        <div className="progress-text">{progress}% to Level {level + 1}</div>
      </div>

      {/* Format-specific Abilities */}
      <div className="abilities-section">
        <h3 className="abilities-title">{activeFormat} Special Abilities</h3>
        <div className="abilities-grid">
          {abilities.length > 0 ? (
            abilities.map((ability, index) => (
              <div key={index} className="ability-card" style={{ borderColor: currentColor }}>
                <div className="ability-icon" style={{ color: currentColor }}>⚡</div>
                <span className="ability-name">{ability}</span>
                <div className="ability-description">
                  {getAbilityDescription(ability, activeFormat)}
                </div>
              </div>
            ))
          ) : (
            <div className="no-abilities">
              <span>No abilities unlocked yet</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats - Now showing recent performance data */}
      <div className="quick-stats">
        <div className="stat-item">
          <div className="stat-icon">📊</div>
          <span className="stat-value" style={{ color: currentColor }}>
            {recentMatches.length}
          </span>
          <span className="stat-label">Recent Matches</span>
          <div className="stat-tooltip">Last 5 {activeFormat} games</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">🏆</div>
          <span className="stat-value" style={{ color: currentColor }}>
            {recentWins}
          </span>
          <span className="stat-label">Recent Wins</span>
          <div className="stat-tooltip">{Math.round((recentWins / recentMatches.length) * 100) || 0}% win rate</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">🏃</div>
          <span className="stat-value" style={{ color: currentColor }}>
            {averageRecentRuns}
          </span>
          <span className="stat-label">Avg Runs</span>
          <div className="stat-tooltip">Per match in last 5 games</div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">🎯</div>
          <span className="stat-value" style={{ color: currentColor }}>
            {getRecentWickets(recentMatches)}
          </span>
          <span className="stat-label">Avg Wickets</span>
          <div className="stat-tooltip">Per match in last 5 games</div>
        </div>
      </div>

      {/* Career Reference */}
      <div className="career-reference">
        <div className="career-stats">
          <span className="career-label">Career {activeFormat}:</span>
          <span className="career-runs">{careerRuns.toLocaleString()} runs</span>
          <span className="career-wickets">{careerWickets} wickets</span>
        </div>
      </div>
    </div>
  );
};

// Helper function to get ability descriptions
const getAbilityDescription = (ability, format) => {
  const descriptions = {
    // T20 Abilities
    "Power Hitting": "Consistently clear boundaries in T20 format",
    "Death Bowling": "Excellent bowling in final overs under pressure",
    "Quick Running": "Fast between wickets and quick singles",
    "T20 Specialist": "Master of T20 format strategies",
    
    // ODI Abilities
    "Middle Overs": "Excel during overs 15-40 in ODI matches",
    "Partnership Building": "Build crucial partnerships in ODIs",
    "Economy Bowling": "Maintain low economy rate in ODIs",
    "ODI Specialist": "Expert in 50-over format dynamics",
    
    // Test Abilities
    "Patience": "Long innings building capability",
    "Stamina": "Endurance for multi-day matches",
    "Technical Batting": "Strong defensive technique",
    "Test Specialist": "Master of Test cricket nuances",
    
    // IPL Abilities
    "IPL Star": "Proven performer in IPL tournaments",
    "Fan Favorite": "High impact player loved by fans",
    "Pressure Player": "Excel in high-pressure situations",
    "Franchise Leader": "Leadership in franchise cricket"
  };
  
  return descriptions[ability] || "Format-specific ability";
};

// Helper function to calculate average wickets
const getRecentWickets = (matches) => {
  if (matches.length === 0) return 0;
  const totalWickets = matches.reduce((total, match) => total + (match.bowling?.wickets || 0), 0);
  return (totalWickets / matches.length).toFixed(1);
};

export default GamificationPanel;