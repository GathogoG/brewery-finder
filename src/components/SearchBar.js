import React from "react";
import { Input } from "@chakra-ui/react";

function SearchBar({ search, setSearch }) {
  
  return (
    <Input
      placeholder="Search for a brewery"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
