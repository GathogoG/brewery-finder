import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Abou';
import Contact from './Contacts';

function NavBarWithPages() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBarWithPages;
