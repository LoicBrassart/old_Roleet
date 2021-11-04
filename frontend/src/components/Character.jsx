import React from 'react';
import { Link } from 'react-router-dom';

import SCharacter from './styles/Character';

const FluffsTab = ({ fluffs }) => (
  <article className='descriptionArticle articleSelected'>
    {fluffs.map((fluff, i) => {
      return (
        <React.Fragment key={i}>
          <h3>{fluff.title}</h3>
          <p>{fluff.content}</p>
        </React.Fragment>
      );
    })}
  </article>
);

const SheetsTab = ({ sheets }) => (
  <article className='sheetsArticle articleSelected'>
    <ul>
      {sheets.map((sheet, i) => {
        return (
          <li key={i}>
            <Link to='/'>{sheet.gameSystem}</Link>
          </li>
        );
      })}
    </ul>
  </article>
);

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'fluffs',
    };
  }

  changeTab = (newTab) => {
    this.setState({
      currentTab: newTab,
    });
  };

  render() {
    const char = this.props.charData;

    return (
      <SCharacter className='Character'>
        <img src={char.avatar} alt={char.name} />
        <article>
          <h2>{char.name}</h2>
          <p>{char.baseline}</p>
          <aside>
            {char.tags.map((tag, i) => {
              return <span key={i}>{tag}</span>;
            })}
          </aside>
        </article>

        <aside>
          <nav>
            <button
              type='button'
              className={`${
                this.state.currentTab === 'fluffs' ? 'buttonSelected' : ''
              } descriptionButton cardButton`}
              onClick={() => {
                this.changeTab('fluffs');
              }}
            >
              Description
            </button>
            <button
              type='button'
              className={`${
                this.state.currentTab === 'sheets' ? 'buttonSelected' : ''
              } sheetsButton cardButton`}
              onClick={() => {
                this.changeTab('sheets');
              }}
            >
              Sheets
            </button>
          </nav>

          {this.state.currentTab === 'fluffs' ? (
            <FluffsTab fluffs={char.fluffs} />
          ) : (
            <SheetsTab sheets={char.characterSheets} />
          )}
        </aside>
      </SCharacter>
    );
  }
}
export default Character;
