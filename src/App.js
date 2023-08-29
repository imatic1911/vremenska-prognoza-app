import React from 'react';
import PrognozaTrenutniDan from './components/PrognozaTrenutniDan';
import FavoritiGradova from './components/FavoritiGradova';



const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Aplikacija Vremenska prognoza</h1>
      <PrognozaTrenutniDan />
      <FavoritiGradova />
    </div>
  );
};

export default App;