import React from "react";
import "./styles/RoleetBar.scss";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

class RoleetBar extends React.Component {
  render() {
    return (
      <nav className="RoleetBar">
        <div className="logo center">
          <NavLink exact to="/" activeClassName="">
            <div>
              <img src="/img/logo.svg" alt="" />
              <h1>Roleet</h1>
            </div>
            <p>May the Dice be with you !</p>
          </NavLink>
        </div>
        <ul className="flexer">
          <li className="center">
            <Search />
          </li>
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
            <Link to="/profile">
              <img src="/img/user-avatar-default.png" alt="Mon compte Roleet" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default RoleetBar;
