import React from "react";
import "./styles/Scenario.scss";

const Scenario = ({ scenData: { title, summary, created_at } }) => {
  return (
    <div className="Scenario">
      <header>
        <h2>{title}</h2>
        <p>{new Date(created_at).toDateString()}</p>
      </header>
      <p>{summary}</p>
    </div>
  );
};
export default Scenario;
