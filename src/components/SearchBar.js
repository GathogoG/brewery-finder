// Import React and useState hook for managing state
import React, { useState } from "react";
// import {  Input  } from "@chakra-ui/react";
// Array of brewery objects with details
import breweries from "./db.json";
import React from "react";
import { Input } from "@chakra-ui/react";

function SearchBar({ search, setSearch }) {
  
  return (
    <>
        <Input
          placeholder="Search for a brewery" // Search input placeholder text
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Handle input change to update search state
        />
        {filteredBreweries.map(
          (
            brewery // Map through filtered breweries and display each
          ) => (
            <div className="card-container" >
            <div className="card" key={brewery.id}>
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle">{brewery.brewery_type}</h6>
              <p className="card-text">
                {brewery.address_1},{brewery.address_2},{brewery.address_3}<br />
                {brewery.city}, {brewery.state}, {brewery.postal_code}<br />
                Country: {brewery.country}<br />
                Latitude: {brewery.latitude}, Longitude: {brewery.longitude}
              </p>
              <a href={`tel:${brewery.phone}`} className="card-link">{brewery.phone}</a>
              <a href={brewery.website_url} className="card-link" target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
            </div>
          </div>
          </div>
          )
        )}
      </>
  );
}

export default SearchBar;
