import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import cogoToast from "cogo-toast";
import userActions from "../redux/actions/userActions";
import modalActions from "../redux/actions/modalActions";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      pseudo: "",
      wants_email_notifications: false
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signup(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5050/auth/signup", this.state)
      .then(({ data }) => {
        console.log(data);
        this.props.dispatch({ ...modalActions.MODAL_CLOSE });
        cogoToast.success(
          `Inscription réussie, ${data.pseudo}tu peux maintenant te connecter.`,
          {
            position: "bottom-right"
          }
        );
      })
      .catch(() => {
        cogoToast.error("Une erreur est survenue lors de l'inscription", {
          position: "bottom-right"
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.dispatch({
              ...modalActions.MODAL_OPEN,
              name: "login"
            });
          }}
        >
          Connexion
        </button>
        <form
          onSubmit={e => {
            this.signup(e);
          }}
        >
          <label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => {
                this.onChange(e);
              }}
            />
            Adresse mail
          </label>
          <label>
            <input
              type="text"
              name="pseudo"
              value={this.state.pseudo}
              onChange={e => {
                this.onChange(e);
              }}
            />
            Pseudo
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => {
                this.onChange(e);
              }}
            />
            Mot de passe
          </label>
          <label>
            <input
              type="password"
              name="passwordBis"
              value={this.state.passwordBis}
              onChange={e => {
                this.onChange(e);
              }}
            />
            Mot de passe (confirmation)
          </label>
          <label>
            <input
              type="checkbox"
              name="wants_email_notifications"
              value={this.state.wants_email_notifications}
              onChange={e => {
                this.onChange(e);
              }}
            />
            Veux-tu recevoir tes notifs par mail ?
          </label>

          <input type="submit" value="Inscription" />
        </form>
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  {}
)(SignupModal);
