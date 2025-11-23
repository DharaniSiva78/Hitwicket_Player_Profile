import React from 'react';
import '../styles/GameTheme.css';

const GameThemeBackground = () => {
  return (
    <div className="game-theme-background">
      <div className="animated-background">
        <div className="floating-cricket-balls">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="cricket-ball" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}>🏏</div>
          ))}
        </div>
        
        <div className="pulse-effects">
          <div className="pulse-circle circle-1"></div>
          <div className="pulse-circle circle-2"></div>
          <div className="pulse-circle circle-3"></div>
        </div>
        
        <div className="glowing-orbs">
          <div className="glowing-orb orb-1"></div>
          <div className="glowing-orb orb-2"></div>
          <div className="glowing-orb orb-3"></div>
        </div>
        
        <div className="animated-stripes">
          <div className="stripe stripe-1"></div>
          <div className="stripe stripe-2"></div>
          <div className="stripe stripe-3"></div>
        </div>
      </div>
    </div>
  );
};

export default GameThemeBackground;