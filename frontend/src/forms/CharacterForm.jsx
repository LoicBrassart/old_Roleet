import React from "react";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm } from "redux-form";

const DATA = {
  name: "toto",
  avatar: "meh",
  baseline: "meeeeeh",
  fluffs: [
    {
      title: "bleh",
      content: "bleh"
    }
  ]
};

const loadCharacter = () => {};

const renderFluffs = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Ajouter du fluff
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((fluff, index) => (
      <li key={index}>
        <button
          type="button"
          title="Retirer ce fluff"
          onClick={() => fields.remove(index)}
        />
        <h4>Fluff n°{index + 1}</h4>
        <label>
          Titre
          <Field
            name={`${fluff}.title`}
            type="text"
            component="input"
            label="Titre"
          />
        </label>
        <label>
          Contenu
          <Field
            name={`${fluff}.content`}
            type="textarea"
            component="textarea"
            label="Contenu"
          />
        </label>
      </li>
    ))}
  </ul>
);

let CharacterForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Field name="name" component="input" type="text" />
      </label>
      <label>
        Illustration
        <Field name="avatar" component="input" type="text" />
      </label>
      <label>
        Baseline
        <Field name="baseline" component="input" type="text" />
      </label>

      <FieldArray name="fluffs" component={renderFluffs} />

      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

CharacterForm = reduxForm({
  form: "character"
})(CharacterForm);

// You have to connect() to any reducers that you wish to connect to yourself
CharacterForm = connect(
  () => ({
    initialValues: DATA // pull initial values from account reducer
  }),
  { load: loadCharacter } // bind account loading action creator
)(CharacterForm);

export default CharacterForm;
