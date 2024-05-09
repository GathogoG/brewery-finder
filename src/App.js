import React, { useState } from 'react';
import Navbar from './components/NavBar';
import SearchBar from "./components/SearchBar";
// App.jsx
import React from 'react';
import BreweryFilter from './BreweryFilter';
// import Navbar from './components/NavBar';
import BreweryPage from "./BreweryPage";
//import SearchBar from "./components/SearchBar";

function App() {
  const [breweries, setBreweries] = useState(require('./db.json')); // Import breweries directly into state
  const [search, setSearch] = useState("");

  // Filter breweries based on search input
  const filteredBreweries = search.length === 0 
    ? breweries 
    : breweries.filter(brewery =>
        brewery.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
  <>
  <Navbar />
  <BreweryFilter/>
  {/* <SearchBar/> */}
      <BreweryPage />
      </>)}
 
export default App;
