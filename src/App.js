import React, { useState } from 'react';
import Navbar from './components/NavBar';
import SearchBar from "./components/SearchBar";
import BreweryPage from "./BreweryPage";
// import BreweryFilter from './BreweryFilter';


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
      {/* <BreweryFilter breweries={breweries} setBreweries={setBreweries} /> */}
      <SearchBar search={search} setSearch={setSearch} />
      <BreweryPage breweries={filteredBreweries} />
    </>
  );
}

export default App;
