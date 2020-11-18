import React from 'react'
import ItensProvider from './context/selectedItens';
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <ItensProvider>
        <Routes/>
      </ItensProvider>
    </div>
  );
}

export default App;
