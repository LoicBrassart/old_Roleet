import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Characters.scss";
import Character from "../components/Character";
import Title from "../components/Title";

const Characters = () => {
  // Replaces state
  const [charactersData, setCharactersData] = useState([]);

  // Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get("http://localhost:5050/character")
      .then(({ data }) => {
        setCharactersData(data);
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }, []); // <- This empty array disables automatic updates

  return (
    <div className="Characters">
      <main>
        <Title label="Personnages" />
        {charactersData.map((char, i) => (
          <Character key={i} charData={char} />
        ))}
      </main>
      <aside />
    </div>
  );
};

export default Characters;
