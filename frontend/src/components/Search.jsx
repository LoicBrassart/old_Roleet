import React from "react";
import cogoToast from "cogo-toast";
import { Link } from "react-router-dom";
import { api } from "../conf";
import "./styles/Search.scss";

const icons = ["ಠ_ಠ", "( ͠° ͟ʖ ͡°)", "(v°_°v)", "¬_¬", "(；⌣̀_⌣́)"];
const NoResult = () => {
  const numIcon = Math.floor(Math.random() * icons.length);
  return (
    <div className="NoResult">
      <h5>{icons[numIcon]}</h5>
      <p>
        Désolé, on a <br />
        rien trouvé !
      </p>
    </div>
  );
};

const initialState = {
  needle: "",
  characters: [],
  scenarii: [],
  users: []
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeNeedle(e) {
    let needle = e.target.value;
    this.setState({ needle });
    needle = needle.trim().toLowerCase();

    if (!needle.length) {
      this.setState(initialState);
    } else {
      api
        .get(`/search?needle=${needle}`)
        .then(({ data }) => {
          this.setState({
            characters: data.characters || [],
            users: data.users || [],
            scenarii: data.scenarii || []
          });
        })
        .catch(err => {
          cogoToast.error(
            `Une erreur est survenue lors de la récupération: ${err}`,
            { position: "bottom-right" }
          );
        });
    }
  }

  render() {
    const display = this.state.needle.length > 0 ? "" : "hidden";
    return (
      <div className="Search">
        <input
          placeholder="Roliste, Scenario, Personnage, ..."
          value={this.state.needle}
          onChange={e => {
            this.onChangeNeedle(e);
          }}
        />
        <div className={`searchResults ${display}`}>
          <section>
            <h4>Personnages</h4>
            {this.state.characters.length > 0 ? (
              <ul>
                {this.state.characters.map((char, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={`/character/${char._id}`}>{char.name}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <NoResult />
            )}
          </section>
          <section>
            <h4>Rolistes</h4>
            {this.state.users.length > 0 ? (
              <ul>
                {this.state.users.map((user, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={`/profile/${user._id}`}>{user.pseudo}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <NoResult />
            )}
          </section>
          <section>
            <h4>Scenarii</h4>
            {this.state.scenarii.length > 0 ? (
              <ul>
                {this.state.scenarii.map((scen, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={`/scenario/${scen._id}`}>{scen.title}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <NoResult />
            )}
          </section>
        </div>
      </div>
    );
  }
}
export default Search;
