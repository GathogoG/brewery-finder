import React from 'react';
import BreweryFilter from './BreweryFilter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Brewery Finder</h1>
      </header>
      <main>
        <BreweryFilter />
      </main>
      <footer>
        <p>Powered by Open Brewery DB</p>
      </footer>
    </div>
  );
};

export default App;
