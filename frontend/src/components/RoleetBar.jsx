import React from "react";
import "./styles/RoleetBar.scss";
import { NavLink, Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import { api } from "../conf";

class RoleetBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        str: "",
        characters: [],
        scenarii: [],
        users: []
      }
    };
  }

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
          <li className="center" id="search">
            <ul className={`${this.state.search.str ? "" : "hidden"}`}>
              <li>
                <ul>
                  <li
                    className={`${
                      this.state.search.characters.length === 0 ? "" : "hidden"
                    }`}
                  >
                    Aucun perso trouvé !
                  </li>
                  {this.state.search.characters.map((char, idx) => {
                    return <li key={idx}>{char.name}</li>;
                  })}
                </ul>
              </li>
              <li>
                <ul>
                  <li
                    className={`${
                      this.state.search.users.length === 0 ? "" : "hidden"
                    }`}
                  >
                    Aucun utilisateur trouvé !
                  </li>
                  {this.state.search.users.map((user, idx) => {
                    return <li key={idx}>{user.pseudo}</li>;
                  })}
                </ul>
              </li>
              <li>
                <ul>
                  <li
                    className={`${
                      this.state.search.scenarii.length === 0 ? "" : "hidden"
                    }`}
                  >
                    Aucun scenario trouvé !
                  </li>
                  {this.state.search.scenarii.map((scen, idx) => {
                    return <li key={idx}>{scen.title}</li>;
                  })}
                </ul>
              </li>
            </ul>
            <input
              type="text"
              placeholder="Perso, scenario, joueur, etc..."
              value={this.state.search.str}
              onChange={e => {
                this.onChangeSearchString(e);
              }}
            />
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
