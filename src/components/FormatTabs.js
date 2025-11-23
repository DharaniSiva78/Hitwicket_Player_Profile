import React from 'react';
import '../styles/FormatTabs.css';

const FormatTabs = ({ activeFormat, setActiveFormat }) => {
  const formats = [
    { id: 'T20', name: 'T20', icon: '⚡', color: '#FF6B6B' },
    { id: 'ODI', name: 'ODI', icon: '🏆', color: '#4ECDC4' },
    { id: 'Test', name: 'TEST', icon: '📜', color: '#45B7D1' },
    { id: 'IPL', name: 'IPL', icon: '💰', color: '#FFD93D' }
  ];

  return (
    <div className="format-selector-container">
      <div className="format-header">
        <h2 className="format-title">Match Formats</h2>
        <div className="format-indicator">
          <span className="current-format">Current: {activeFormat}</span>
        </div>
      </div>
      
      <div className="format-tabs-grid">
        {formats.map((format) => (
          <div
            key={format.id}
            className={`format-tab-card ${activeFormat === format.id ? 'active' : ''}`}
            onClick={() => setActiveFormat(format.id)}
            style={{
              '--format-color': format.color,
              '--format-glow': `${format.color}40`
            }}
          >
            <div className="format-icon">{format.icon}</div>
            <div className="format-content">
              <h3 className="format-name">{format.name}</h3>
              <div className="format-status">
                {activeFormat === format.id ? (
                  <span className="status-active">● Active</span>
                ) : (
                  <span className="status-inactive">Click to view</span>
                )}
              </div>
            </div>
            <div className="format-glow"></div>
            <div className="format-pulse"></div>
          </div>
        ))}
      </div>
      
      <div className="format-stats-preview">
        <div className="preview-header">
          <span className="preview-title">{activeFormat} Statistics Preview</span>
          <div className="preview-badge">{activeFormat}</div>
        </div>
      </div>
    </div>
  );
};

export default FormatTabs;