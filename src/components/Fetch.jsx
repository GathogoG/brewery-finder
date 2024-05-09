//Fetching data here from the the db.json
import React, { useEffect, useState } from 'react';

function Fetch() {
  const [breweries, setBreweries] = useState([]);
  //function to fetch data
  function fetchData() {
    return fetch('http://localhost:3000/breweries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBreweries(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}
export default Fetch;