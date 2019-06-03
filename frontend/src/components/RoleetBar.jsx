import React from "react";
import "./styles/RoleetBar.scss";
import { NavLink } from "react-router-dom";

const RoleetBar = () => (
  <nav className="RoleetBar flexer">
    <div className="logo center">
      <NavLink exact to="/" activeClassName="">
        <h1>Roleet</h1>
        <p>May the Dice be with you !</p>
      </NavLink>
    </div>
    <ul className="flexer">
      <li className="center">
        <NavLink activeClassName="active" to="/characters">
          Personnages
        </NavLink>
      </li>
      <li className="center">
        <NavLink activeClassName="active" to="/scenarii">
          Scenarii
        </NavLink>
      </li>
      <li className="center">
        <NavLink activeClassName="active" to="/parties">
          Groupes
        </NavLink>
      </li>
      <li className="center">
        <img src="/img/user-avatar-default.png" alt="Mon compte Roleet" />
      </li>
    </ul>
  </nav>
);

export default RoleetBar;
