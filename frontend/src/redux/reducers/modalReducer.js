import modalActions from "../actions/modalActions";

const initial = {
  isOpen: false,
  name: "test"
};

export default (state = initial, action) => {
  switch (action.type) {
    case modalActions.MODAL_CLOSE.type:
      return { ...state, isOpen: false };
    case modalActions.MODAL_OPEN.type:
      return { ...state, isOpen: true, name: action.name };
    case modalActions.MODAL_TOGGLE.type:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
