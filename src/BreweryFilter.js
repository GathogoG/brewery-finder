import React, { useState, useEffect } from 'react';
import breweriesData from '/.db.json'; // Importing data from db.json

const BreweryFilter = () => {
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    setBreweries(breweriesData); // Setting breweries data from db.json on component mount
    setFilteredBreweries(breweriesData); // Setting filtered breweries initially to all breweries
  }, []);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    if (state === '') {
      setFilteredBreweries(breweries); // Show all breweries if no state is selected
    } else {
      const filtered = breweries.filter(brewery => brewery.state === state);
      setFilteredBreweries(filtered);
    }
  };

  return (
    <div>
      <h1>Brewery Filter</h1>
      <label htmlFor="stateSelect">Select a state:</label>
      <select id="stateSelect" value={selectedState} onChange={handleStateChange}>
        <option value="">All</option>
        {/* Dynamically generating options for all states from the data */}
        {[...new Set(breweries.map(brewery => brewery.state))].map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <ul>
        {filteredBreweries.map(brewery => (
          <li key={brewery.id}>{brewery.name} - {brewery.city}, {brewery.state}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreweryFilter;
