import React from "react";
import "./styles/ScenarioSearchFilter.scss";

const ScenarioSearchFilter = () => {
  return (
    <div className="ScenarioSearchFilter">
      <input type="text" placeholder="Rechercher" />
      <select name="Filtrer par ...">
        <option>Nom</option>
        <option>Date de parution</option>
      </select>
    </div>
  );
};
export default ScenarioSearchFilter;
