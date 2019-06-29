import React from "react";
import { connect } from "react-redux";
import modalActions from "../redux/modalActions";

const Modal = ({ dispatch, isOpen }) => (
  <div>
    <h6>In da Modal !</h6>
    <p>Status: {isOpen ? "open" : "closed"}</p>
    <button
      onClick={() => {
        dispatch(modalActions.MODAL_CLOSE);
      }}
    >
      Close
    </button>
    <button
      onClick={() => {
        dispatch(modalActions.MODAL_OPEN);
      }}
    >
      Open
    </button>
    <button
      onClick={() => {
        dispatch(modalActions.MODAL_TOGGLE);
      }}
    >
      Toggle
    </button>
  </div>
);
const mapStateToProps = store => ({
  isOpen: store.isOpen
});
export default connect(mapStateToProps)(Modal);
