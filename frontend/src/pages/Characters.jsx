import React from "react";
import axios from "axios";
import "./styles/Characters.scss";
import Character from "../components/Character";
import Title from "../components/Title";
import InfiniteScroll from "react-infinite-scroll-component";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      api: {
        page: 1,
        hasMore: true
      }
    };
  }
  componentDidMount() {
    this.fetchMoreCharacters();
  }

  fetchMoreCharacters() {
    axios
      .get(`http://localhost:5050/character?page=${this.state.api.page}`)
      .then(({ data }) => {
        this.setState({
          charactersData: [...this.state.charactersData, ...data],
          api: {
            page: parseInt(this.state.api.page) + 1,
            hasMore: data.length > 0
          }
        });
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }

  render() {
    return (
      <div className="Characters">
        <Title label="Personnages" />
        <InfiniteScroll
          dataLength={this.state.charactersData.length}
          next={() => {
            this.fetchMoreCharacters();
          }}
          hasMore={this.state.api.hasMore}
          loader={<h4>Une minute stp...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>
                Désolé... C'est un peu gênant, mais on n'a plus aucun perso à te
                proposer !
              </b>
            </p>
          }
        >
          <main>
            {this.state.charactersData.map((char, i) => (
              <Character key={i} charData={char} />
            ))}
          </main>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Characters;
