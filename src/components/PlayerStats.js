import React from 'react';
import SkillMeter from './SkillMeter';
import AnimatedCounter from './AnimatedCounter';
import '../styles/PlayerStats.css';

const PlayerStats = ({ player, activeFormat }) => {
  const formatStats = player.stats[activeFormat];
  
  const StatItem = ({ label, value, isAnimated = false, icon = null }) => (
    <div className="stat-item premium-stat">
      {icon && <span className="stat-icon">{icon}</span>}
      <div className="stat-content">
        <span className="stat-label">{label}</span>
        <span className="stat-value">
          {isAnimated ? <AnimatedCounter value={value} /> : value}
        </span>
      </div>
      <div className="stat-glow"></div>
    </div>
  );

  return (
    <div className="player-stats-container premium-stats">
      <div className="stats-grid premium-grid">
        <div className="stats-card premium-card batting-card glow-border">
          <div className="card-header">
            <div className="card-icon">🏏</div>
            <h3 className="stats-heading premium-heading">Batting Mastery</h3>
          </div>
          <div className="stats-values">
            <StatItem label="Matches" value={formatStats.batting.matches} isAnimated={true} icon="📊" />
            <StatItem label="Total Runs" value={formatStats.batting.runs} isAnimated={true} icon="🏃" />
            <StatItem label="Average" value={formatStats.batting.average} icon="📈" />
            <StatItem label="Strike Rate" value={formatStats.batting.strikeRate} icon="⚡" />
            <StatItem label="50s/100s" value={`${formatStats.batting.fifties}/${formatStats.batting.hundreds}`} icon="🎯" />
            <StatItem label="Highest Score" value={formatStats.batting.highestScore} icon="🌟" />
          </div>
        </div>
        
        <div className="stats-card premium-card bowling-card glow-border">
          <div className="card-header">
            <div className="card-icon">🎯</div>
            <h3 className="stats-heading premium-heading">Bowling Prowess</h3>
          </div>
          <div className="stats-values">
            <StatItem label="Matches" value={formatStats.bowling.matches} isAnimated={true} icon="📊" />
            <StatItem label="Total Wickets" value={formatStats.bowling.wickets} isAnimated={true} icon="🎳" />
            <StatItem label="Average" value={formatStats.bowling.average} icon="📉" />
            <StatItem label="Economy" value={formatStats.bowling.economy} icon="💰" />
            <StatItem label="Strike Rate" value={formatStats.bowling.strikeRate} icon="🎯" />
            <StatItem label="Best Bowling" value={formatStats.bowling.bestBowling} icon="🔥" />
          </div>
        </div>
        
        <div className="stats-card premium-card fielding-card glow-border">
          <div className="card-header">
            <div className="card-icon">✋</div>
            <h3 className="stats-heading premium-heading">Fielding Excellence</h3>
          </div>
          <div className="stats-values">
            <StatItem label="Catches" value={formatStats.fielding.catches} isAnimated={true} icon="👐" />
            <StatItem label="Run Outs" value={formatStats.fielding.runOuts} isAnimated={true} icon="🏃" />
            <StatItem label="Stumpings" value={formatStats.fielding.stumpings} isAnimated={true} icon="🎯" />
          </div>
        </div>
      </div>
      
      <div className="skills-section premium-skills">
        <div className="skills-header">
          <h3 className="skills-heading premium-heading">Player Skills Matrix</h3>
          <div className="skills-decoration">⚡</div>
        </div>
        <div className="skills-grid premium-skills-grid">
          <SkillMeter skill="Batting" value={player.skills.batting} icon="🏏" />
          <SkillMeter skill="Bowling" value={player.skills.bowling} icon="🎯" />
          <SkillMeter skill="Fielding" value={player.skills.fielding} icon="✋" />
          <SkillMeter skill="Fitness" value={player.skills.fitness} icon="💪" />
          <SkillMeter skill="Leadership" value={player.skills.leadership} icon="👑" />
          <SkillMeter skill="Experience" value={player.skills.experience} icon="📚" />
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;