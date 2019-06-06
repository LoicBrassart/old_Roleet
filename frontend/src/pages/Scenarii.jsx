import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Scenarii.scss";
import Title from "../components/Title";
import Scenario from "../components/Scenario";

const Scenarii = () => {
  // Replaces state
  const [scenariiData, setScenariiData] = useState([]);

  // Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get("http://localhost:5050/scenario")
      .then(({ data }) => {
        setScenariiData(data);
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }, []); // <- This empty array disables automatic updates

  return (
    <div className="Scenarii">
      <Title label="Scenarii" />
      <div>
        <main>
          {scenariiData.map((scenario, i) => (
            <Scenario key={i} scenData={scenario} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Scenarii;
