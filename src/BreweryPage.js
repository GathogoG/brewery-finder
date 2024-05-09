import breweries from './db.json'
import React from 'react'
import './App.css';

function BreweryPage() {
    return (
      <div className="card-container">
        {breweries.map((brewery) => (
          <div className="card" key={brewery.id}>
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle">{brewery.brewery_type}</h6>
              <p className="card-text">
                {brewery.address}<br />
                {brewery.city}, {brewery.state}, {brewery.postal_code}<br />
                Country: {brewery.country}<br />
                Latitude: {brewery.latitude}, Longitude: {brewery.longitude}
              </p>
              <a href={`tel:${brewery.phone}`} className="card-link">{brewery.phone}</a>
              <a href={brewery.website_url} className="card-link" target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default BreweryPage;