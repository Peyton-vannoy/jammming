import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchBar;
