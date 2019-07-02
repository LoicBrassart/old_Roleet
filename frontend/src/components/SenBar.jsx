import React from "react";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";
import modalActions from "../redux/actions/modalActions";
import userActions from "../redux/actions/userActions";
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

  logout() {
    this.props.dispatch(userActions.USER_LOGOUT);
    cogoToast.success("Déconnecté", { position: "bottom-right" });
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
              this.props.dispatch({
                ...modalActions.MODAL_OPEN,
                name: "login"
              });
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
