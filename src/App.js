import React from 'react';
import Dashboard from './components/Dashboard';
import { playerData } from './data/playerData';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Dashboard player={playerData} />
    </div>
  );
}

export default App;