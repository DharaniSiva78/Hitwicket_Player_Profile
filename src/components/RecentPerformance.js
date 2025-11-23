import React, { useState, useMemo } from 'react';
import '../styles/RecentPerformance.css';
import { defaultGamification } from '../data/playerData';

const RecentPerformance = ({ player, activeFormat }) => {
  const [selectedMatch, setSelectedMatch] = useState(0);
  const gamification = player.gamification || defaultGamification;
  
  // Filter recent performance by active format
  const formatPerformance = useMemo(() => {
    return gamification.recentPerformance?.filter(match => match.format === activeFormat) || [];
  }, [gamification.recentPerformance, activeFormat]);

  const formatData = player.gamification?.formats?.[activeFormat] || defaultGamification;
  const { performance = {} } = formatData;

  // Format colors
  const formatColors = {
    T20: '#FF6B6B',
    ODI: '#4ECDC4',
    Test: '#45B7D1',
    IPL: '#FFD93D'
  };

  const currentColor = formatColors[activeFormat] || '#4ECDC4';

  const PerformanceMetric = ({ label, value, max = 10 }) => (
    <div className="performance-metric">
      <div className="metric-header">
        <span className="metric-label">{label}</span>
        <span className="metric-value" style={{ color: currentColor }}>
          {value}/10
        </span>
      </div>
      <div className="metric-bar">
        <div 
          className="metric-fill" 
          style={{ 
            width: `${(value / max) * 100}%`,
            background: currentColor
          }}
        ></div>
      </div>
    </div>
  );

  const MatchCard = ({ match, index, isActive }) => (
    <div 
      className={`match-card ${isActive ? 'active' : ''}`}
      onClick={() => setSelectedMatch(index)}
      style={{
        borderColor: isActive ? currentColor : 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="match-header">
        <span className="match-vs">{match.match}</span>
        <span className={`match-result ${match.result?.toLowerCase() || 'unknown'}`}>
          {match.result || 'N/A'}
        </span>
      </div>
      <div className="match-date">{match.date}</div>
      <div className="match-format" style={{ color: currentColor }}>
        {match.format}
      </div>
      <div className="match-rating">
        <span className="rating-value" style={{ color: currentColor }}>
          {match.rating || 0}
        </span>
        <span className="rating-label">Rating</span>
      </div>
      <div className="match-xp" style={{ color: currentColor }}>
        +{match.xpEarned || 0} XP
      </div>
    </div>
  );

  const currentMatch = formatPerformance[selectedMatch] || {};

  return (
    <div className="recent-performance-panel premium-card">
      <div className="performance-header">
        <h2 className="performance-title">Recent {activeFormat} Performance</h2>
        <div className="performance-stats">
          <span className="win-rate" style={{ background: `${currentColor}20`, color: currentColor }}>
            {formatPerformance.length > 0 
              ? `${((formatPerformance.filter(m => m.result === 'Won').length / formatPerformance.length) * 100).toFixed(1)}% Win Rate`
              : 'No matches'
            }
          </span>
          <span className="matches-count" style={{ color: currentColor }}>
            {formatPerformance.length} matches
          </span>
        </div>
      </div>

      <div className="performance-content">
        {/* Match Selector */}
        <div className="matches-selector">
          {formatPerformance.length > 0 ? (
            formatPerformance.map((match, index) => (
              <MatchCard 
                key={index}
                match={match}
                index={index}
                isActive={selectedMatch === index}
              />
            ))
          ) : (
            <div className="no-matches">
              <span>No recent {activeFormat} matches available</span>
            </div>
          )}
        </div>

        {/* Match Details */}
        {formatPerformance.length > 0 && (
          <div className="match-details">
            <div className="detail-section">
              <h3 className="detail-title" style={{ color: currentColor }}>
                {currentMatch.match} - Performance
              </h3>
              <div className="performance-breakdown">
                <div className="performance-category">
                  <h4>🏏 Batting</h4>
                  <div className="category-stats">
                    <span>Runs: <strong style={{ color: currentColor }}>{currentMatch.batting?.runs || 0}</strong></span>
                    <span>Balls: {currentMatch.batting?.balls || 0}</span>
                    <span>4s/6s: {currentMatch.batting?.fours || 0}/{currentMatch.batting?.sixes || 0}</span>
                    <span>SR: {currentMatch.batting?.runs && currentMatch.batting?.balls 
                      ? <strong style={{ color: currentColor }}>{((currentMatch.batting.runs / currentMatch.batting.balls) * 100).toFixed(1)}</strong>
                      : 0
                    }</span>
                  </div>
                </div>
                
                <div className="performance-category">
                  <h4>🎯 Bowling</h4>
                  <div className="category-stats">
                    <span>Wickets: <strong style={{ color: currentColor }}>{currentMatch.bowling?.wickets || 0}</strong></span>
                    <span>Runs: {currentMatch.bowling?.runs || 0}</span>
                    <span>Overs: {currentMatch.bowling?.overs || 0}</span>
                    <span>Econ: {currentMatch.bowling?.runs && currentMatch.bowling?.overs 
                      ? <strong style={{ color: currentColor }}>{(currentMatch.bowling.runs / currentMatch.bowling.overs).toFixed(1)}</strong>
                      : 0
                    }</span>
                  </div>
                </div>
                
                <div className="performance-category">
                  <h4>✋ Fielding</h4>
                  <div className="category-stats">
                    <span>Catches: <strong style={{ color: currentColor }}>{currentMatch.fielding?.catches || 0}</strong></span>
                    <span>Run Outs: <strong style={{ color: currentColor }}>{currentMatch.fielding?.runouts || 0}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="metrics-section">
              <h3 className="metrics-title">{activeFormat} Performance Metrics Overview</h3>
              <div className="metrics-grid">
                <PerformanceMetric label="Form" value={performance.form || 0} />
                <PerformanceMetric label="Consistency" value={performance.consistency || 0} />
                <PerformanceMetric label="Impact" value={performance.impact || 0} />
                <PerformanceMetric label="Fitness" value={performance.fitness || 0} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPerformance;