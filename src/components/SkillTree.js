import React from 'react';
import '../styles/Gamification.css';
import { defaultGamification } from '../data/playerData';

const SkillTree = ({ player, activeFormat }) => {
  const formatData = player.gamification?.formats?.[activeFormat] || defaultGamification;
  const { skillTree } = formatData;

  // Format colors
  const formatColors = {
    T20: '#FF6B6B',
    ODI: '#4ECDC4',
    Test: '#45B7D1',
    IPL: '#FFD93D'
  };

  const currentColor = formatColors[activeFormat] || '#4ECDC4';

  const SkillBranch = ({ title, data, icon }) => (
    <div className="skill-branch">
      <div className="branch-header" style={{ '--branch-color': currentColor }}>
        <div className="branch-title-container">
          <span className="branch-icon">{icon}</span>
          <h3 className="branch-title">{title}</h3>
        </div>
        <span className="branch-level">Level {data?.level || 1}</span>
      </div>
      <div className="skills-list">
        {data?.skills && data.skills.length > 0 ? (
          data.skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-node ${data.unlocked?.includes(skill) ? 'unlocked' : 'locked'}`}
              style={{ 
                '--skill-color': currentColor,
                borderColor: data.unlocked?.includes(skill) ? currentColor : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="skill-icon">
                {data.unlocked?.includes(skill) ? '✅' : '🔒'}
              </div>
              <span className="skill-name">{skill}</span>
              {skill === data.nextSkill && (
                <div className="next-indicator" style={{ background: currentColor }}>
                  NEXT
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-skills">
            <span>No skills available for this format</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="skill-tree-panel premium-card">
      <div className="skill-tree-header">
        <h2 className="skill-tree-title">{activeFormat} Skill Tree</h2>
        <div className="skill-tree-progress">
          <span style={{ color: currentColor }}>Format-specific skills</span>
        </div>
      </div>

      <div className="skill-branches">
        <SkillBranch 
          title="Batting Skills" 
          data={skillTree?.batting} 
          icon="🏏"
        />
        <SkillBranch 
          title="Bowling Skills" 
          data={skillTree?.bowling} 
          icon="🎯"
        />
        <SkillBranch 
          title="Fielding Skills" 
          data={skillTree?.fielding} 
          icon="✋"
        />
      </div>

      <div className="skill-tree-footer">
        <div className="format-tip" style={{ borderColor: currentColor }}>
          <span>💡</span>
          <p>Skills are specific to {activeFormat} format. Switch formats to see different skill trees!</p>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;