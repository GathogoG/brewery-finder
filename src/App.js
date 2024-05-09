// App.jsx
import React from 'react';
import BreweryFilter from './BreweryFilter';
import Navbar from './components/NavBar';
import BreweryPage from "./BreweryPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
  <>
  <Navbar />
  <SearchBar/>
  <BreweryFilter/>
      <BreweryPage />
      </>)}
 
export default App;
