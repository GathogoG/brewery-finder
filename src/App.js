// Import necessary details
import React from 'react';
import { Container } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';

// Function component for App
function App() {
  // Return  with Container component and SearchBar component
  return (
    <Container maxW="container.md" centerContent> {/* Container component */}
      <SearchBar /> {/* SearchBar component */}
    </Container>
  );
}


export default App;