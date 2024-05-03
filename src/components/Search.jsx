import findIcon from "../assets/icon-search.svg";
import React, { useState, useContext } from "react";
import { Card } from "./Card";
import ThemeContext from "../context/ThemeProvider";
import "./Search.css";
export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profileData, setProfileData] = useState(null);
  const { theme } = useContext(ThemeContext);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="main-container">
      <article className={`input-container input${theme}`}>
        <div className="img-input-container">
          <img src={findIcon} alt="find-icon" />
          <input
            className={`input${theme}`}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search GitHub username…"
          />
        </div>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </article>
      <Card profileData={profileData} />
    </section>
  );
};
