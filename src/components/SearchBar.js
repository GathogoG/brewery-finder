// Import React and useState hook for managing state
import React, { useState } from "react";
import { Box, Input, VStack, Text } from "@chakra-ui/react";
// Array of brewery objects with details
import breweries from "./db.json";

function SearchBar() {
  const [search, setSearch] = useState(""); // Initialize state for search input value
  const filteredBreweries = breweries.filter((brewery) =>
    brewery.name.toLowerCase().includes(search.toLowerCase())
  ); // Filter breweries based on search input value
  return (
    <Box p={4}>
      {" "}
      {/* Container component with padding */}
      <VStack spacing={4}>
        {" "}
        {/* Vertical stack layout with spacing */}
        <Input
          placeholder="Search for a brewery" // Search input placeholder text
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Handle input change to update search state
        />
        {filteredBreweries.map(
          (
            brewery // Map through filtered breweries and display each
          ) => (
            <Box key={brewery.id} p={2} shadow="md" borderWidth="1px">
              {" "}
              {/* Brewery info box with styling */}
              <Text fontSize="xl">{brewery.name}</Text>{" "}
              {/* Brewery name with larger font */}
              <Text>{brewery.brewery_type}</Text> {/* Brewery type */}
            </Box>
          )
        )}
      </VStack>
    </Box>
  );
}
export default SearchBar;
