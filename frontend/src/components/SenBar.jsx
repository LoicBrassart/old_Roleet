import React from "react";
import { connect } from "react-redux";
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
  render() {
    return (
      <nav className="SenBar flexer">
        <div>Senvisage</div>
        <div>My Account</div>
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
