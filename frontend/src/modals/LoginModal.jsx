import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import cogoToast from "cogo-toast";
import userActions from "../redux/actions/userActions";
import modalActions from "../redux/actions/modalActions";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5050/auth/login", this.state)
      .then(({ data }) => {
        this.props.dispatch({ ...userActions.USER_LOGIN, ...data });
        this.props.dispatch({ ...modalActions.MODAL_CLOSE });
        cogoToast.success("Connecté", { position: "bottom-right" });
      })
      .catch(() => {
        cogoToast.error("Une erreur est survenue lors de la connexion", {
          position: "bottom-right"
        });
      });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.login(e);
        }}
      >
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <input type="submit" value="Connexion" />
      </form>
    );
  }
}
export default connect(
  null,
  {}
)(LoginModal);
