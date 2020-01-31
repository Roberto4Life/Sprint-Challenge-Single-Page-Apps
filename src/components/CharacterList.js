import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState ("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("axios Character", response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharacters(characters);
        
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [search]);
  const handleChange = event => {
    setSearch(event.target.value);
  };
  
  return (
    <div>
    <section className="search-form">
      <div className="searcher">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </section>
    <section className="character-list">
      {/* <SearchForm /> */}

      <h2>
        {characters.map(character => {
          return <CharacterCard
          character = {character}
          key = {character.id}
          />
        })}
      </h2>
    </section>
    </div>
  );
}
