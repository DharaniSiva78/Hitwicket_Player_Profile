import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: '📊',
      description: 'Complete player dashboard'
    },
    {
      id: 'stats',
      label: 'Statistics',
      icon: '📈',
      description: 'Detailed performance stats'
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: '🏆',
      description: 'Awards and milestones'
    },
    {
      id: 'gamification',
      label: 'Progression',
      icon: '⚡',
      description: 'Levels and skills'
    },
    {
      id: 'performance',
      label: 'Performance',
      icon: '🎯',
      description: 'Recent match analysis'
    }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🏏</span>
          <span className="logo-text">Hitwicket</span>
        </div>
        <button 
          className="close-sidebar"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      <div className="sidebar-content">
        <div className="player-quick-info">
          <div className="player-avatar">
            <img src="/images/Hardik Pandya.jpg" alt="Player" />
          </div>
          <div className="player-details">
            <h3>Hardik Pandya</h3>
            <p>All-Rounder</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id);
                if (window.innerWidth < 768) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-content">
                <span className="nav-label">{item.label}</span>
                <span className="nav-description">{item.description}</span>
              </div>
              <div className="nav-indicator"></div>
            </button>
          ))}
        </nav>

        
      </div>
    </div>
  );
};

export default Sidebar;