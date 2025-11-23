import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PlayerStats from './PlayerStats';
import FormatTabs from './FormatTabs';
import AchievementCards from './AchievementCards';
import PremiumBackground from './PremiumBackground';
import GamificationPanel from './GamificationPanel';
import SkillTree from './SkillTree';
import BadgeCollection from './BadgeCollection';
import RecentPerformance from './RecentPerformance';
import '../styles/Dashboard.css';

const Dashboard = ({ player }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeFormat, setActiveFormat] = useState('T20');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-content">
            <div className="format-selector-section">
              <FormatTabs 
                activeFormat={activeFormat} 
                setActiveFormat={setActiveFormat} 
              />
            </div>

            <div className="gamification-section">
              <div className="gamification-grid">
                <GamificationPanel player={player} activeFormat={activeFormat} />
                <SkillTree player={player} activeFormat={activeFormat} />
              </div>
            </div>
            
            <div className="player-stats-section">
              <PlayerStats player={player} activeFormat={activeFormat} />
            </div>

            <div className="recent-performance-section">
              <RecentPerformance player={player} activeFormat={activeFormat} />
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="dashboard-content">
            <div className="section-header">
              <h1>Detailed Statistics</h1>
              <p>Comprehensive performance analysis across all formats</p>
            </div>
            
            <div className="format-selector-section">
              <FormatTabs 
                activeFormat={activeFormat} 
                setActiveFormat={setActiveFormat} 
              />
            </div>

            <div className="player-stats-section">
              <PlayerStats player={player} activeFormat={activeFormat} />
            </div>

            <div className="recent-performance-section">
              <RecentPerformance player={player} activeFormat={activeFormat} />
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="dashboard-content">
            <div className="section-header">
              <h1>Achievements & Awards</h1>
              <p>Career milestones and prestigious accomplishments</p>
            </div>
            
            <div className="achievements-section">
              <AchievementCards player={player} />
            </div>

            <div className="badges-section">
              <BadgeCollection player={player} />
            </div>
          </div>
        );

      case 'gamification':
        return (
          <div className="dashboard-content">
            <div className="section-header">
              <h1>Player Progression</h1>
              <p>Track your growth and unlock new abilities</p>
            </div>
            
            <div className="format-selector-section">
              <FormatTabs 
                activeFormat={activeFormat} 
                setActiveFormat={setActiveFormat} 
              />
            </div>

            <div className="gamification-section">
              <div className="gamification-grid">
                <GamificationPanel player={player} activeFormat={activeFormat} />
                <SkillTree player={player} activeFormat={activeFormat} />
              </div>
            </div>

            <div className="badges-section">
              <BadgeCollection player={player} />
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="dashboard-content">
            <div className="section-header">
              <h1>Recent Performance</h1>
              <p>Detailed analysis of recent matches and form</p>
            </div>
            
            <div className="format-selector-section">
              <FormatTabs 
                activeFormat={activeFormat} 
                setActiveFormat={setActiveFormat} 
              />
            </div>

            <div className="recent-performance-full">
              <RecentPerformance player={player} activeFormat={activeFormat} />
            </div>

            
            
          </div>
        );

      default:
        return (
          <div className="dashboard-content">
            <div className="welcome-section">
              <h1>Welcome to Player Dashboard</h1>
              <p>Select a section from the sidebar to begin exploring player data</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <PremiumBackground />
      
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="content-container">
          <Header player={player} />
          {renderContent()}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>
    </div>
  );
};

export default Dashboard;