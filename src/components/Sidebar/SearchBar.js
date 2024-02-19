import React, { useState } from "react";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { useMainContext } from "../../context/MainContext";
import { useWeather } from "../../hooks/useWeather";

function SearchBar() {
  const { setSearch } = useMainContext();
  const [searchTerm, setSearchTerm] = useState("");

  useWeather();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearch(searchTerm);
    }
  };

  const handleSearchClick = () => {
    setSearch(searchTerm);
  };

  return (
    <div className="searchbar">
      <label className="searchbar-label" htmlFor="src">
        <IoSearchOutline size={40} className="searchbar-icon" />
      </label>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        id="src"
        type="search"
        className="searchbar-input capitalize"
        placeholder="Search for places..."
        autoComplete="on"
      />
      <button onClick={handleSearchClick} className="searchbar-button">
        <IoSearch
          className="searchbar-icon"
          style={{ width: "40px", height: "20px" }}
        />
      </button>
    </div>
  );
}

export default SearchBar;
