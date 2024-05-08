import React from 'react';
import { Container } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container maxW="container.md" centerContent>
      <SearchBar />
    </Container>
  );
}

export default App;
