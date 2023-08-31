import React from 'react';
import FavoritiGradova from './components/FavoritiGradova';
import './App.css'; // Uvezite CSS fajl za stilizaciju

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Vremenska prognoza</h1>
      <FavoritiGradova />
    </div>
  );
};

export default App;