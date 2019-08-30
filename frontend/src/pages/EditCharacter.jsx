import React from "react";
//import "./styles/CharacterForm.scss";
import { api } from "../conf";
import Title from "../components/Title";
import CharacterForm from "../forms/CharacterForm";

class EditCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData: {
        name: "Sylv",
        avatar: "http://tutu.url",
        baseline: "Pour la Horde !",
        fluffs: [
          {
            title: "titre1",
            content: "blablablablbalba1"
          },
          {
            title: "titre2",
            content: "blablablablbalba2"
          }
        ]
      }
    };
  }
  componentDidMount() {
    api
      .get("/character/5d36d65682c4630e703c1c0d")
      .then(({ data }) => {
        this.setState({ characterData: data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  submit = values => {
    console.log(values);
  };
  render() {
    return (
      <div className="EditCharacter">
        <Title label="toto" />
        <CharacterForm
          onSubmit={this.submit}
          charData={this.state.characterData}
        />
      </div>
    );
  }
}

export default EditCharacter;
