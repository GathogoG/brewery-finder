//fetch data here to be used by other components

import { useEffect, useState } from 'react';

function App() {
  const [breweries, setBreweries] = useState([]);
  //Function to fetch data
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
export default App;
