import React from 'react';
import PrognozaTrenutniDan from './components/PrognozaTrenutniDan';
import TrenutniDanPrognoza from './components/TrenutniDanPrognoza'


const App = () => {
  return (
    <div>
      <h1>Aplikacija Vremenska prognoza</h1>
      <PrognozaTrenutniDan />
      <TrenutniDanPrognoza />
    </div>
  );
};

export default App;