import React from "react";
import cogoToast from "cogo-toast";
import { api } from "../conf";

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
    const needle = e.target.value;
    this.setState({ needle });

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
    return (
      <React.Fragment>
        <input
          placeholder="Roliste, Scenario, Personnage, ..."
          value={this.state.needle}
          onChange={e => {
            this.onChangeNeedle(e);
          }}
        />
        <div>
          Resultats:{" "}
          {`
          ${this.state.characters.length}C + 
          ${this.state.users.length}U + 
          ${this.state.scenarii.length}S`}
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
