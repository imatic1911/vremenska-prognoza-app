import React from 'react';
import PrognozaTrenutniDan from './components/PrognozaTrenutniDan';


const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Aplikacija Vremenska prognoza</h1>
      <PrognozaTrenutniDan />
    </div>
  );
};

export default App;