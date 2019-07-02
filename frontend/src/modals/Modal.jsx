import React from "react";
import { connect } from "react-redux";
import modalActions from "../redux/actions/modalActions";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

const Modal = ({ dispatch, isOpen, name }) => (
  <Rodal
    visible={isOpen}
    onClose={() => {
      dispatch(modalActions.MODAL_CLOSE);
    }}
  >
    {name === "login" ? <LoginModal dispatch={dispatch} /> : null}
    {name === "signup" ? <SignupModal dispatch={dispatch} /> : null}
  </Rodal>
);

const mapStateToProps = store => ({
  isOpen: store.modal.isOpen,
  name: store.modal.name
});
export default connect(mapStateToProps)(Modal);
