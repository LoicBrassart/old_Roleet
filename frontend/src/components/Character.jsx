import React from "react";
import { Link } from "react-router-dom";

import "./styles/Character.scss";

class Character extends React.Component {
  render() {
    const char = this.props.charData;
    return (
      <section className="Character">
        <img src={char.avatar} alt={char.name} />
        <article>
          <h2>{char.name}</h2>
          <p>{char.baseline}</p>
          <aside>
            {char.tags.map((tag, i) => {
              return <a key={i}>{tag}</a>;
            })}
          </aside>
        </article>

        <aside>
          <nav>
            <button
              type="button"
              className="buttonSelected descriptionButton cardButton"
            >
              Description <span />
            </button>
            <button type="button" className="sheetsButton cardButton">
              Sheets <span />
            </button>
          </nav>

          <article className="descriptionArticle articleSelected">
            {char.fluffs.map((fluff, i) => {
              return (
                <React.Fragment key={i}>
                  <h3>{fluff.title}</h3>
                  <p>{fluff.content}</p>
                </React.Fragment>
              );
            })}
          </article>

          <article className="sheetsArticle">
            <ul>
              {char.characterSheets.map((sheet, i) => {
                return (
                  <li key={i}>
                    <Link to="/">{sheet.gameSystem}</Link>
                  </li>
                );
              })}
            </ul>
          </article>
        </aside>
      </section>
    );
  }
}
export default Character;
