import React from 'react';
import Character from '../components/Character';
import Title from '../components/Title';
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../conf';
import characters from '../mock/characters.json';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      api: {
        page: 0,
        hasMore: true,
      },
    };
  }
  componentDidMount() {
    //this.fetchMoreCharacters();
    console.log(characters);
    this.setState({ ...this.state, charactersData: characters });
  }

  fetchMoreCharacters() {
    api
      .get(`/character?page=${this.state.api.page}`)
      .then(({ data }) => {
        this.setState({
          charactersData: [...this.state.charactersData, ...data],
          api: {
            page: parseInt(this.state.api.page) + 1,
            hasMore: data.length > 0,
          },
        });
      })
      .catch((err) => {
        console.log("couldn't fetch: " + err);
      });
  }

  render() {
    return (
      <div className='Characters'>
        <Title label='Personnages' />
        <InfiniteScroll
          dataLength={this.state.charactersData.length}
          next={() => {
            this.fetchMoreCharacters();
          }}
          hasMore={this.state.api.hasMore}
          loader={<h4>Une minute stp...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
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
