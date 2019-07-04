import React from "react";
import "./styles/Scenario.scss";

const Scenario = ({ scenData: { title, summary, created_at }, locked }) => {
  return (
    <div className="Scenario">
      <header>
        <div>
          <h2>{title}</h2>
          <p>{new Date(created_at).toDateString()}</p>
        </div>
        <button disabled={locked}>Lire</button>
      </header>
      <p>{summary}</p>
    </div>
  );
};
export default Scenario;
