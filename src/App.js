import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BreweryFilter from './BreweryFilter';

// Function component for App
function App() {
  // Return  with Container component and SearchBar component
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Brewery Finder</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Breweries</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BreweryFilter />} />
          </Routes>
        </main>
      </div>
      <BreweryPage />
    </Router>
  );
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
  return <div>

  </div>;
}
export default App;