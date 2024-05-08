import React from "react";
import { Container } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Container maxW="container.xl" mt="10">
      <SearchBar />
    </Container>
  );
}

export default App