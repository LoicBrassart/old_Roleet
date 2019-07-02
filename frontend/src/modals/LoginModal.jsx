import React from "react";
import { connect } from "react-redux";
import { notify } from "reapop";
import axios from "axios";
import userActions from "../redux/actions/userActions";
import modalActions from "../redux/actions/modalActions";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login(e) {
    e.preventDefault();
    const { notify } = this.props;
    notify({
      title: "Connexion en cours",
      message: "Attends une seconde stp...",
      status: "info",
      dismissible: false,
      dismissAfter: 0
    });
    axios
      .post("http://localhost:5050/auth/login", this.state)
      .then(({ data }) => {
        this.props.dispatch({ ...userActions.USER_LOGIN, ...data });
        this.props.dispatch({ ...modalActions.MODAL_CLOSE });
      })
      .catch(err => {
        console.log(`An error occurred while logging in: ${err}`);
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
  { notify }
)(LoginModal);
