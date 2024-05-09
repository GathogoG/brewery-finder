// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BreweryFilter from './BreweryFilter';
import Navbar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/Abou';
import Contact from './components/Contacts'; // Import Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Brewery Finder</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BreweryFilter />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} /> {/* Add Contact component route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
