import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BreweryFilter from './BreweryFilter';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Brewery Finder</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Breweries</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BreweryFilter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;