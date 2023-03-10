import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useSearchResultsStore } from "./useSearchResultStore";

const Search = () => {
  // state to hold the searchterm and a destructuring of the zustand search component
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResults } = useSearchResultsStore()
  const navigate = useNavigate();
 
  // function that holds the search string
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // a simple fetch that takes the searchterm and fetches it
  // and navigates to result page
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.mediehuset.net/detutroligeteater/events/search/${searchTerm}`)
      .then((response) => response.json())
      .then((results) => {
        setSearchResults(results.items);
        navigate("/resultat");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Indtast søgeord"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <GrSearch />
      </button>
    </form>
  );
};

export default Search;
