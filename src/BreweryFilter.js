import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BreweryFilter = () => {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries').then(response => {
      const statesSet = new Set(response.data.map(brewery => brewery.state));
      setStates(Array.from(statesSet));
    });
  }, []);

  const handleChange = event => {
    setSelectedState(event.target.value);
    fetchBreweries(event.target.value);
  };

  const fetchBreweries = state => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`).then(response => {
      setBreweries(response.data);
    });
  };

  return (
    <div>
      <h1>Breweries by State</h1>
      <label htmlFor="states">Select a State:</label>
      <select id="states" value={selectedState} onChange={handleChange}>
        <option value="">Select...</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {breweries.map(brewery => (
          <div key={brewery.id} style={{ padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ccc' }}>
            <h3>{brewery.name}</h3>
            <p>Location: {brewery.city}, {brewery.state}</p>
            <p>Type: {brewery.brewery_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreweryFilter;