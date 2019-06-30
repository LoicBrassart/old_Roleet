import React from "react";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import axios from "axios";
import "./styles/SenBar.scss";

class SenBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.token,
      data: props.data,
      isLoggedIn: props.isLoggedIn
    };
  }
  login() {
    axios
      .post("http://localhost:5050/auth/login", {
        email: "loic@spamland.com",
        password: "toto"
      })
      .then(({ data }) => {
        this.props.dispatch({ ...userActions.USER_LOGIN, ...data });
      })
      .catch(err => {
        console.log(`An error occurred while logging in: ${err}`);
      });
  }

  logout() {
    this.props.dispatch(userActions.USER_LOGOUT);
  }

  render() {
    return (
      <nav className="SenBar flexer">
        <div>Senvisage</div>
        {this.props.isLoggedIn ? (
          <button
            onClick={() => {
              this.logout();
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        )}
      </nav>
    );
  }
}
const mapStateToProps = store => ({
  token: store.user.token,
  data: store.user.data,
  isLoggedIn: store.user.isLoggedIn
});
export default connect(mapStateToProps)(SenBar);
