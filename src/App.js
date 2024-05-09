// App.jsx
import React from 'react';
import BreweryFilter from './BreweryFilter';
import Navbar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/Abou';
import Contact from './components/Contacts'; // Import Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Brewery Finder</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BreweryFilter />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} /> {/* Add Contact component route */}
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
