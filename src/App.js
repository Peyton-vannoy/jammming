import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
