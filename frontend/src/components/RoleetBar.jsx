import React from "react";
import "./styles/RoleetBar.scss";
import { NavLink, Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import { api } from "../conf";
import Search from "./Search";

class RoleetBar extends React.Component {
  onChangeSearchString(e) {
    this.setState({ search: { ...this.state.search, str: e.target.value } });
    api
      .get(`/character?search=${e.target.value}`)
      .then(({ data }) => {
        this.setState({
          search: { ...this.state.search, characters: data }
        });
      })
      .catch(err => {
        cogoToast.error(
          `Une erreur est survenue lors de la récupération: ${err}`,
          {
            position: "bottom-right"
          }
        );
      });
    api
      .get(`/user?search=${e.target.value}`)
      .then(({ data }) => {
        this.setState({
          search: { ...this.state.search, users: data }
        });
      })
      .catch(err => {
        cogoToast.error(
          `Une erreur est survenue lors de la récupération: ${err}`,
          {
            position: "bottom-right"
          }
        );
      });
    api
      .get(`/scenario?search=${e.target.value}`)
      .then(({ data }) => {
        this.setState({
          search: { ...this.state.search, scenarii: data }
        });
      })
      .catch(err => {
        cogoToast.error(
          `Une erreur est survenue lors de la récupération: ${err}`,
          {
            position: "bottom-right"
          }
        );
      });
  }

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
          <li>
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
