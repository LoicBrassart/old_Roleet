import React from "react";
import { Reveal, Image, Card, Label, List, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./styles/Character.scss";

class Character extends React.Component {
  render() {
    const char = this.props.charData;
    const panes = [
      {
        menuItem: "Description",
        render: () => (
          <Tab.Pane>
            {char.fluffs.map((fluff, i) => {
              return (
                <React.Fragment key={i}>
                  <h3>{fluff.title}</h3>
                  <p>{fluff.content}</p>
                </React.Fragment>
              );
            })}
          </Tab.Pane>
        )
      },
      {
        menuItem: "Sheets",
        render: () => (
          <Tab.Pane>
            <List>
              {char.characterSheets.map((sheet, i) => {
                return (
                  <List.Item key={i}>
                    <Link to="/">{sheet.gameSystem}</Link>
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="Character">
        <Reveal animated="move">
          <Reveal.Content visible>
            <Card>
              <div className="imgwrapper">
                <Image src={char.avatar} alt={char.name} />
              </div>
              <Card.Content>
                <Card.Header>{char.name}</Card.Header>
                <Card.Description>{char.baseline}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {char.tags.map((tag, i) => {
                  return <Label key={i}>{tag}</Label>;
                })}
              </Card.Content>
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card>
              <Card.Content>
                <Tab panes={panes} />
              </Card.Content>
            </Card>
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }
}
export default Character;
