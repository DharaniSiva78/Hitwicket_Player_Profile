import React from 'react';
import '../styles/PremiumTheme.css';

const PremiumBackground = () => {
  return (
    <div className="premium-background">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Animated Cricket Stumps */}
      <div className="cricket-stumps stumps-1">🏏</div>
      <div className="cricket-stumps stumps-2">🏏</div>
      <div className="cricket-stumps stumps-3">🏏</div>
      
      {/* Grid Pattern */}
      <div className="grid-pattern"></div>
      
      {/* Shimmer Effects */}
      <div className="shimmer-effect shimmer-1"></div>
      <div className="shimmer-effect shimmer-2"></div>
    </div>
  );
};

export default PremiumBackground;