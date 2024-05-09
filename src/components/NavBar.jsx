import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About';
import Contact from './Contacts';


function NavBar() {
  return (
    <Router>
      <div>
        <nav className='text-white'>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 ,textDecorationColor:'text-white'}}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/" style={{ color: 'white' }}>Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/about" style={{ color: 'white' }}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
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

export default NavBar;
