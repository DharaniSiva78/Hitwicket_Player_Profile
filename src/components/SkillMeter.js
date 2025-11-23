import React from 'react';
import '../styles/PlayerStats.css';

const SkillMeter = ({ skill, value, icon = null }) => {
  return (
    <div className="skill-meter premium-skill">
      <div className="skill-header">
        {icon && <span className="skill-icon">{icon}</span>}
        <div className="skill-info">
          <span className="skill-name">{skill}</span>
          <span className="skill-value">{value}/100</span>
        </div>
      </div>
      <div className="meter-container premium-meter">
        <div 
          className="meter-fill premium-fill" 
          style={{ width: `${value}%` }}
          data-value={value}
        >
          <div className="fill-shimmer"></div>
        </div>
        <div className="meter-glow"></div>
      </div>
      <div className="skill-percentage">{value}%</div>
    </div>
  );
};

export default SkillMeter;