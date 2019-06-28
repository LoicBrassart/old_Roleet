import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Characters.scss";
import Character from "../components/Character";
import Title from "../components/Title";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5050/character")
      .then(({ data }) => {
        this.setState({
          charactersData: data
        });
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }

  render() {
    return (
      <div className="Characters">
        <Title label="Personnages" />
        <main>
          {this.state.charactersData.map((char, i) => (
            <Character key={i} charData={char} />
          ))}
        </main>
      </div>
    );
  }
}

export default Characters;
